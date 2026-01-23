document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const inputs = {
        title: document.getElementById('input-title'),
        author: document.getElementById('input-author'),
        size: document.getElementById('input-size'),
        material: document.getElementById('input-material'),
        titleMode: document.getElementById('input-title-mode')
    };

    const preview = {
        title: document.getElementById('preview-title'),
        author: document.getElementById('preview-author'),
        size: document.getElementById('preview-size'),
        material: document.getElementById('preview-material')
    };

    const addBtn = document.getElementById('add-card-btn');
    const downloadBtn = document.getElementById('download-pdf-btn');
    const collectionGrid = document.getElementById('card-collection');

    // Live Preview Update
    function updatePreview() {
        const mode = inputs.titleMode.value;
        const titleEl = preview.title;

        // Reset basic content
        titleEl.textContent = inputs.title.value;
        preview.author.textContent = inputs.author.value;
        preview.size.textContent = inputs.size.value;
        preview.material.textContent = inputs.material.value;

        // Reset styles to defaults before applying mode
        titleEl.style.whiteSpace = 'normal';
        titleEl.style.textAlign = 'left';
        titleEl.style.fontSize = '24pt'; // Default CSS size
        titleEl.style.width = '100%';
        titleEl.style.display = 'block';

        // Apply Mode Logic
        if (mode === 'center') {
            titleEl.style.textAlign = 'center';
        } else if (mode === 'shrink') {
            titleEl.style.whiteSpace = 'nowrap';
            titleEl.style.textAlign = 'center';

            // Layout thrashing triggers reflow, but needed for calculation
            // Reset to reasonable max first
            let currentSize = 24;
            titleEl.style.fontSize = `${currentSize}pt`;

            // We need to ensure the element is actually rendered to check scrollWidth
            // Since we are just setting styles, it should be fine if connected to DOM

            // Simple shrink loop
            const parentStyle = window.getComputedStyle(titleEl.parentElement);
            const paddingX = parseFloat(parentStyle.paddingLeft) + parseFloat(parentStyle.paddingRight);
            const parentWidth = titleEl.parentElement.clientWidth;
            const maxWidth = parentWidth - paddingX;

            // Check if overflow
            while (titleEl.scrollWidth > maxWidth && currentSize > 6) {
                currentSize -= 1;
                titleEl.style.fontSize = `${currentSize}pt`;
            }
        }
    }

    Object.values(inputs).forEach(input => {
        input.addEventListener('input', updatePreview);
    });

    // Add to Collection
    addBtn.addEventListener('click', () => {
        const cardClone = document.getElementById('preview-card').cloneNode(true);
        cardClone.id = ''; // Remove ID to avoid duplicates
        cardClone.style.cursor = 'default'; // Reset cursor
        cardClone.title = ''; // Reset title

        // Create Overlay
        const overlay = document.createElement('div');
        overlay.className = 'card-overlay';

        // Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'overlay-btn delete';
        deleteBtn.textContent = '削除';
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            if (confirm('このカードをリストから削除しますか？')) {
                cardClone.remove();
            }
        };

        // Download Image Button
        const dlBtn = document.createElement('button');
        dlBtn.className = 'overlay-btn';
        dlBtn.textContent = '画像保存';
        dlBtn.onclick = async (e) => {
            e.stopPropagation();
            const originalText = dlBtn.textContent;
            dlBtn.textContent = '保存中...';

            try {
                // Get title for filename
                const titleText = cardClone.querySelector('.caption-title').textContent || 'caption';
                // Sanitize filename
                const safeTitle = titleText.replace(/[^a-z0-9\u3000-\u30Fe\u4e00-\u9fa5]/gi, '_').substring(0, 20);

                const canvas = await html2canvas(cardClone, {
                    scale: 3,
                    useCORS: true,
                    backgroundColor: '#ffffff',
                    ignoreElements: (element) => element.classList.contains('card-overlay')
                });

                const link = document.createElement('a');
                link.download = `${safeTitle}.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
            } catch (err) {
                console.error(err);
                alert('画像の保存に失敗しました');
            } finally {
                dlBtn.textContent = originalText;
            }
        };

        overlay.appendChild(dlBtn);
        overlay.appendChild(deleteBtn);
        cardClone.appendChild(overlay);

        collectionGrid.appendChild(cardClone);
    });

    // PDF Generation
    downloadBtn.addEventListener('click', async () => {
        // Status element (create if not exists)
        let statusDiv = document.getElementById('status-message');
        if (!statusDiv) {
            statusDiv = document.createElement('div');
            statusDiv.id = 'status-message';
            statusDiv.style.marginTop = '10px';
            statusDiv.style.fontWeight = 'bold';
            downloadBtn.parentNode.appendChild(statusDiv);
        }

        const cards = collectionGrid.children;
        if (cards.length === 0) {
            alert('リストにカードがありません。「リストに追加」ボタンを押してカードを追加してください。');
            return;
        }

        // Reset status
        statusDiv.textContent = 'PDF生成準備中...';
        statusDiv.style.color = 'blue';

        // Check jsPDF
        if (!window.jspdf) {
            alert('エラー: PDF生成ライブラリ (jspdf) が読み込まれていません。インターネット接続を確認してください。');
            statusDiv.textContent = 'ライブラリ読み込みエラー';
            statusDiv.style.color = 'red';
            return;
        }

        // Show loading state
        const originalText = downloadBtn.textContent;
        downloadBtn.textContent = '生成中...';
        downloadBtn.disabled = true;

        try {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({
                orientation: 'p',
                unit: 'mm',
                format: 'a4'
            });

            // Layout settings
            const margin = 10;
            const cardWidth = 90;
            const cardHeight = 55;
            const xGap = 5;
            const yGap = 5;
            let currentX = margin;
            let currentY = margin;

            statusDiv.textContent = `PDF生成中... (0/${cards.length})`;

            for (let i = 0; i < cards.length; i++) {
                const card = cards[i];

                // Update status
                statusDiv.textContent = `PDF生成中... (${i + 1}/${cards.length})`;

                // Use html2canvas
                const canvas = await html2canvas(card, {
                    scale: 3,
                    useCORS: true,
                    logging: false,
                    backgroundColor: '#ffffff', // Ensure white background
                    ignoreElements: (element) => element.classList.contains('card-overlay')
                });

                const imgData = canvas.toDataURL('image/png');

                // Check page bounds
                if (currentX + cardWidth > 210 - margin) {
                    currentX = margin;
                    currentY += cardHeight + yGap;
                }

                if (currentY + cardHeight > 297 - margin) {
                    doc.addPage();
                    currentX = margin;
                    currentY = margin;
                }

                doc.addImage(imgData, 'PNG', currentX, currentY, cardWidth, cardHeight);
                currentX += cardWidth + xGap;
            }

            statusDiv.textContent = 'ダウンロード開始...';
            doc.save('gallery_captions.pdf');

            statusDiv.textContent = '完了しました！';
            statusDiv.style.color = 'green';
            setTimeout(() => { statusDiv.textContent = ''; }, 3000);

        } catch (error) {
            console.error('PDF generation failed:', error);
            alert('PDF生成中にエラーが発生しました:\n' + error.message);
            statusDiv.textContent = 'エラーが発生しました';
            statusDiv.style.color = 'red';
        } finally {
            downloadBtn.textContent = originalText;
            downloadBtn.disabled = false;
        }
    });

    // Initialize preview
    updatePreview();
});
