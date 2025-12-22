document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const inputs = {
        title: document.getElementById('input-title'),
        author: document.getElementById('input-author'),
        size: document.getElementById('input-size'),
        material: document.getElementById('input-material')
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
        preview.title.textContent = inputs.title.value;
        preview.author.textContent = inputs.author.value;
        preview.size.textContent = inputs.size.value;
        preview.material.textContent = inputs.material.value;
    }

    Object.values(inputs).forEach(input => {
        input.addEventListener('input', updatePreview);
    });

    // Add to Collection
    addBtn.addEventListener('click', () => {
        const cardClone = document.getElementById('preview-card').cloneNode(true);
        cardClone.id = ''; // Remove ID to avoid duplicates

        // Add a remove button overlay for user convenience (not visible in print ideally, but keep simple for now)
        cardClone.style.cursor = 'pointer';
        cardClone.title = 'Click to remove';
        cardClone.addEventListener('click', () => {
            if (confirm('このカードをリストから削除しますか？')) {
                cardClone.remove();
            }
        });

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
                    backgroundColor: '#ffffff' // Ensure white background
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
