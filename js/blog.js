/**
 * Blog-specific JavaScript functions for Soda3DARTWebHP
 * This file contains JavaScript functions specific to the blog pages
 */

// Wait for the DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Markdown-it
    const md = window.markdownit({
        html: true,
        linkify: true,
        typographer: true,
        breaks: true  // Enable line breaks
    });

    // Initialize blog editor functionality
    initBlogEditor(md);
});

/**
 * Initialize blog editor functionality
 * @param {Object} md - Markdown-it instance
 */
function initBlogEditor(md) {
    // Get editor elements
    const blogContent = document.getElementById('blog-content');
    const imageUpload = document.getElementById('image-upload');
    const saveBtn = document.getElementById('save-btn');
    const boldBtn = document.getElementById('bold-btn');
    const italicBtn = document.getElementById('italic-btn');
    const linkBtn = document.getElementById('link-btn');
    const headingBtn = document.getElementById('heading-btn');
    const listBtn = document.getElementById('list-btn');
    const embedBtn = document.getElementById('embed-btn');

    // Array for uploaded images
    let uploadedImages = [];

    // Initialize event listeners if elements exist
    if (blogContent) {
        blogContent.addEventListener('input', updatePreview);
        // Initial preview update
        updatePreview();
    }

    if (imageUpload) {
        imageUpload.addEventListener('change', handleImageUpload);
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', saveBlog);
    }

    // Formatting buttons
    if (boldBtn) boldBtn.addEventListener('click', () => wrapSelectedText('**', '**'));
    if (italicBtn) italicBtn.addEventListener('click', () => wrapSelectedText('*', '*'));
    if (linkBtn) linkBtn.addEventListener('click', addLink);
    if (headingBtn) headingBtn.addEventListener('click', addHeading);
    if (listBtn) listBtn.addEventListener('click', addList);
    if (embedBtn) embedBtn.addEventListener('click', addEmbed);

    /**
     * Update the preview with the current markdown content
     */
    function updatePreview() {
        if (!blogContent) return;

        const markdownContent = blogContent.value;
        // Preprocess markdown to handle line breaks
        const processedMarkdown = preprocessMarkdown(markdownContent);
        const htmlContent = md.render(processedMarkdown);

        const previewContent = document.getElementById('preview-content');
        if (previewContent) {
            previewContent.innerHTML = htmlContent;
        }
    }

    /**
     * Preprocess markdown to handle special syntax
     * @param {string} markdown - The markdown content to preprocess
     * @returns {string} - The preprocessed markdown
     */
    function preprocessMarkdown(markdown) {
        // Process embed syntax
        markdown = markdown.replace(/\[embed:(https?:\/\/[^\]]+)\]/g, function(match, url) {
            // Replace with special marker for later HTML conversion
            return '<div class="embed-container"><iframe src="' + url + '" width="100%" height="500" frameborder="0" allowfullscreen></iframe></div>';
        });

        // Detect consecutive line breaks (2 or more) and replace with special marker
        return markdown.replace(/\n{2,}/g, function(match) {
            // Generate <br> tags based on number of line breaks
            const brCount = match.length - 1; // First line break is for paragraph break
            if (brCount > 0) {
                return '\n\n' + '<br>'.repeat(brCount) + '\n\n';
            }
            return match;
        });
    }

    /**
     * Handle image upload
     * @param {Event} event - The change event from the file input
     */
    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        // Check if it's an image file
        if (!file.type.match('image.*')) {
            alert('画像ファイルを選択してください');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const imagePath = e.target.result; // Data URL
            const imageName = file.name;

            // Add image info to array
            uploadedImages.push({
                name: imageName,
                path: imagePath
            });

            // Add image to preview
            addImageToPreview(imagePath, imageName);

            // Add image reference to markdown editor
            const imageMarkdown = `![${imageName}](${imageName})\n`;
            const textarea = document.getElementById('blog-content');
            if (textarea) {
                const cursorPos = textarea.selectionStart;
                const textBefore = textarea.value.substring(0, cursorPos);
                const textAfter = textarea.value.substring(cursorPos);
                textarea.value = textBefore + imageMarkdown + textAfter;

                // Update preview
                updatePreview();
            }
        };

        reader.readAsDataURL(file);
    }

    /**
     * Add image to preview container
     * @param {string} imagePath - The image path (data URL)
     * @param {string} imageName - The image name
     */
    function addImageToPreview(imagePath, imageName) {
        const previewContainer = document.getElementById('image-preview-container');
        if (!previewContainer) return;

        const imagePreview = document.createElement('div');
        imagePreview.className = 'image-preview';
        imagePreview.innerHTML = `
            <img src="${imagePath}" alt="${imageName}" data-name="${imageName}">
            <div class="remove-image">×</div>
        `;

        // Delete button event listener
        imagePreview.querySelector('.remove-image').addEventListener('click', function() {
            // Remove from preview
            previewContainer.removeChild(imagePreview);

            // Remove from array
            const index = uploadedImages.findIndex(img => img.name === imageName);
            if (index !== -1) {
                uploadedImages.splice(index, 1);
            }

            // Remove reference from markdown editor
            const textarea = document.getElementById('blog-content');
            if (textarea) {
                const imageMarkdown = `![${imageName}](${imageName})`;
                textarea.value = textarea.value.replace(imageMarkdown, '');

                // Update preview
                updatePreview();
            }
        });

        previewContainer.appendChild(imagePreview);
    }

    /**
     * Wrap selected text with markdown syntax
     * @param {string} before - Text to add before selection
     * @param {string} after - Text to add after selection
     */
    function wrapSelectedText(before, after) {
        const textarea = document.getElementById('blog-content');
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.substring(start, end);

        // Wrap selected text with markdown syntax
        const newText = before + selectedText + after;

        // Update textarea content
        textarea.value = textarea.value.substring(0, start) + newText + textarea.value.substring(end);

        // Update cursor position
        textarea.focus();
        if (selectedText.length > 0) {
            // If text was selected, maintain selection
            textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length);
        } else {
            // If no text was selected, place cursor in the middle
            textarea.setSelectionRange(start + before.length, start + before.length);
        }

        // Update preview
        updatePreview();
    }

    /**
     * Add a link to the markdown editor
     */
    function addLink() {
        const url = prompt('リンク先のURLを入力してください:', 'https://');
        if (!url) return;

        const textarea = document.getElementById('blog-content');
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.substring(start, end) || 'リンクテキスト';

        const linkMarkdown = `[${selectedText}](${url})`;
        textarea.value = textarea.value.substring(0, start) + linkMarkdown + textarea.value.substring(end);

        // Update cursor position
        textarea.focus();
        textarea.setSelectionRange(start + linkMarkdown.length, start + linkMarkdown.length);

        // Update preview
        updatePreview();
    }

    /**
     * Add a heading to the markdown editor
     */
    function addHeading() {
        const level = prompt('見出しのレベルを選択してください (1-6):', '2');
        if (!level || isNaN(level) || level < 1 || level > 6) return;

        const prefix = '#'.repeat(parseInt(level)) + ' ';
        const textarea = document.getElementById('blog-content');
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.substring(start, end) || '見出し';

        const headingMarkdown = prefix + selectedText;
        textarea.value = textarea.value.substring(0, start) + headingMarkdown + textarea.value.substring(end);

        // Update cursor position
        textarea.focus();
        textarea.setSelectionRange(start + headingMarkdown.length, start + headingMarkdown.length);

        // Update preview
        updatePreview();
    }

    /**
     * Add a list to the markdown editor
     */
    function addList() {
        const listType = confirm('番号付きリストを作成しますか？\n「OK」→番号付きリスト\n「キャンセル」→箇条書きリスト');
        const textarea = document.getElementById('blog-content');
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        let selectedText = textarea.value.substring(start, end);

        // Split selected text by line
        const lines = selectedText.split('\n');
        let formattedList = '';

        if (listType) {
            // Numbered list
            for (let i = 0; i < lines.length; i++) {
                formattedList += (i + 1) + '. ' + lines[i] + '\n';
            }
        } else {
            // Bullet list
            for (let i = 0; i < lines.length; i++) {
                formattedList += '- ' + lines[i] + '\n';
            }
        }

        // Remove last line break
        if (formattedList.endsWith('\n')) {
            formattedList = formattedList.slice(0, -1);
        }

        // Update textarea content
        textarea.value = textarea.value.substring(0, start) + formattedList + textarea.value.substring(end);

        // Update cursor position
        textarea.focus();
        textarea.setSelectionRange(start + formattedList.length, start + formattedList.length);

        // Update preview
        updatePreview();
    }

    /**
     * Add an embed to the markdown editor
     */
    function addEmbed() {
        const url = prompt('埋め込むページのURLを入力してください:', 'https://');
        if (!url) return;

        const embedMarkdown = `[embed:${url}]`;
        const textarea = document.getElementById('blog-content');
        if (!textarea) return;

        const start = textarea.selectionStart;

        // Update textarea content
        textarea.value = textarea.value.substring(0, start) + embedMarkdown + textarea.value.substring(start);

        // Update cursor position
        textarea.focus();
        textarea.setSelectionRange(start + embedMarkdown.length, start + embedMarkdown.length);

        // Update preview
        updatePreview();
    }

    /**
     * Save the blog post
     */
    function saveBlog() {
        const title = document.getElementById('blog-title')?.value || 'タイトルなし';
        const date = document.getElementById('blog-date')?.value 
            ? new Date(document.getElementById('blog-date').value).toLocaleDateString('ja-JP') 
            : new Date().toLocaleDateString('ja-JP');
        const markdownContent = document.getElementById('blog-content')?.value || '';

        // Preprocess markdown to handle line breaks
        const processedMarkdown = preprocessMarkdown(markdownContent);
        // Convert markdown to HTML
        let htmlContent = md.render(processedMarkdown);

        // Replace image paths with actual data URLs
        uploadedImages.forEach(image => {
            const regex = new RegExp(`src="${image.name}"`, 'g');
            htmlContent = htmlContent.replace(regex, `src="${image.path}"`);
        });

        // Generate blog HTML
        const blogHTML = generateBlogHTML(title, date, htmlContent);

        // Generate filename (from date and title)
        const fileName = generateFileName(title);

        // Save HTML file
        saveHTMLFile(fileName, blogHTML);
    }

    /**
     * Generate a filename from the blog title
     * @param {string} title - The blog title
     * @returns {string} - The generated filename
     */
    function generateFileName(title) {
        // Get current date
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');

        // Generate valid filename from title
        let sanitizedTitle = title
            .replace(/[^\w\s]/gi, '') // Remove special characters
            .replace(/\s+/g, '-')     // Replace spaces with hyphens
            .toLowerCase();

        // Combine date and title to generate filename
        return `${year}${month}${day}-${sanitizedTitle}.html`;
    }

    /**
     * Save HTML file
     * @param {string} fileName - The filename
     * @param {string} htmlContent - The HTML content
     */
    function saveHTMLFile(fileName, htmlContent) {
        // Create Blob object
        const blob = new Blob([htmlContent], { type: 'text/html' });

        // Create download link
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = fileName;

        // Click link to start download
        document.body.appendChild(a);
        a.click();

        // Cleanup
        document.body.removeChild(a);
        URL.revokeObjectURL(a.href);

        alert(`ブログが保存されました: ${fileName}\n\nこのファイルを blog/bloglist/ ディレクトリに配置してください。`);
    }

    /**
     * Generate blog HTML
     * @param {string} title - The blog title
     * @param {string} date - The blog date
     * @param {string} content - The blog content (HTML)
     * @returns {string} - The complete blog HTML
     */
    function generateBlogHTML(title, date, content) {
        // HTML template for blog post
        return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - 崇城大学芸術学部美術学科 3Dアートコース</title>
    <meta name="description" content="${title} - 崇城大学芸術学部美術学科3Dアートコースのブログ記事です。">
    <link rel="icon" href="../../images/logohedder.png" type="image/png">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/earlyaccess/ipaexmincho.css" rel="stylesheet">
    <link rel="stylesheet" href="../../css/common.min.css">
    <link rel="stylesheet" href="../../css/blog.min.css">
</head>
<body>
    <!-- ヘッダー -->
    <header>
        <div class="container header-container">
            <div class="logo">
                <div class="logo-text">崇城大学 芸術学部<span>3Dアートコース</span></div>
            </div>
            <nav id="nav">
                <ul>
                    <li><a href="../../index.html#home">ホーム</a></li>
                    <li><a href="../../index.html#features">コース紹介</a></li>
                    <li><a href="../../index.html#gallery">ギャラリー</a></li>
                    <li><a href="../../index.html#news">ニュース</a></li>
                    <li><a href="../../index.html#contact">お問い合わせ</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- ブログコンテンツ -->
    <div class="container">
        <div class="blog-content">
            <div class="blog-header">
                <h1 class="blog-title">${title}</h1>
                <p class="blog-date">${date}</p>
            </div>
            <div class="blog-body">
                ${content}
            </div>
            <a href="../blogList.html" class="back-link">← ブログ一覧に戻る</a>
        </div>
    </div>

    <!-- フッター -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-column">
                    <h3>崇城大学</h3>
                    <ul class="footer-links">
                        <li><a href="https://www.sojo-u.ac.jp/">大学について</a></li>
                        <li><a href="https://www.sojo-u.ac.jp/faculty/">学部・学科紹介</a></li>
                        <li><a href="https://www.sojo-u.ac.jp/examination/">入試情報</a></li>
                        <li><a href="https://www.sojo-u.ac.jp/student_life/">キャンパスライフ</a></li>
                        <li><a href="https://www.sojo-u.ac.jp/course/">就職・進路</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>芸術学部</h3>
                    <ul class="footer-links">
                        <li><a href="https://soda.art.sojo-u.ac.jp/about">美術学科</a></li>
                        <li><a href="https://soda.art.sojo-u.ac.jp/art-professor">教員紹介</a></li>
                        <li><a href="../../facilities.html">施設・設備</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>学生作品</h3>
                    <ul class="footer-links">
                        <li><a href="../../gallery.html">ギャラリー</a></li>
                        <li><a href="../../temp/temppage.html">講義紹介・プロジェクト</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>お問い合わせ</h3>
                    <ul class="footer-links">
                        <li><a href="https://www.sojo-u.ac.jp/access/">アクセス</a></li>
                        <li><a href="../../index.html#contact">3Dアートコースへのお問い合わせ</a></li>
                        <li><a href="../../special/OpenCampus.html">オープンキャンパス</a></li>
                        <li><a href="../../question.html">よくある質問</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 崇城大学芸術学部美術学科 3Dアートコース All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <!-- JavaScript -->
    <script src="../../js/common.min.js"></script>
</body>
</html>`;
    }
}
