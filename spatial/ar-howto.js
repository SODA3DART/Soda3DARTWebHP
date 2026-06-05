/**
 * 飛び出すARハブ — 「遊び方」ポップアップ
 */
(function (global) {
    const HOWTO_HTML = `
        <h2 id="howto-dialog-title">遊び方</h2>
        <ol>
            <li>下のカルーセルから<strong>好きなキャラクター</strong>を選び、「ARを見る」をタップしてください。</li>
            <li>各キャラクターのページでは、<strong>マーカー画像</strong>をスマートフォンのカメラで映すと、3Dキャラクターが飛び出して見えます。</li>
            <li>「<strong>マーカーを表示</strong>」から専用マーカーを確認できます。別画面に表示したり、印刷した用紙に映して使えます。</li>
            <li>作品によって<strong>ポスターモード</strong>（マーカーに平行）や<strong>立体モード</strong>、<strong>ソリッドWF</strong>、<strong>BGM</strong>などの機能があります。</li>
            <li>各ARページ左下の「<strong>マーカーレス（実験）</strong>」で、8th Wall を使ったマーカーなし体験に切り替えられます（スマートフォン推奨）。</li>
        </ol>
        <p class="howto-note">AR体験はスマートフォン推奨です。初回はカメラの使用を「許可」してください。うまく表示されないときは、明るい場所でマーカーを平らな面に置いてお試しください。</p>
        <div class="howto-actions">
            <button type="button" class="howto-close" id="howto-close-btn">閉じる</button>
        </div>
    `;

    const STORAGE_KEY = 'ar-howto-seen';

    function initArHowto(options) {
        const opts = options || {};
        const autoOpen = opts.autoOpen !== false;
        const showButton = opts.showButton !== false;

        if (document.getElementById('howto-overlay')) return;

        let openBtn = null;
        if (showButton) {
            openBtn = document.createElement('button');
            openBtn.type = 'button';
            openBtn.id = 'howto-hub-btn';
            openBtn.className = 'howto-hub-btn';
            openBtn.textContent = '遊び方';
            openBtn.setAttribute('aria-expanded', 'false');
            openBtn.setAttribute('aria-controls', 'howto-overlay');
            document.body.appendChild(openBtn);
        }

        const overlay = document.createElement('div');
        overlay.id = 'howto-overlay';
        overlay.className = 'howto-overlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-labelledby', 'howto-dialog-title');
        overlay.hidden = true;

        const panel = document.createElement('div');
        panel.className = 'howto-panel';
        panel.innerHTML = HOWTO_HTML;
        overlay.appendChild(panel);
        document.body.appendChild(overlay);

        const closeBtn = document.getElementById('howto-close-btn');

        function openOverlay() {
            overlay.hidden = false;
            overlay.classList.add('is-open');
            if (openBtn) openBtn.setAttribute('aria-expanded', 'true');
        }

        function closeOverlay() {
            overlay.classList.remove('is-open');
            if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
            overlay.hidden = true;
            try {
                sessionStorage.setItem(STORAGE_KEY, '1');
            } catch (e) { /* ignore */ }
        }

        if (openBtn) openBtn.addEventListener('click', openOverlay);
        closeBtn.addEventListener('click', closeOverlay);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeOverlay();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeOverlay();
        });

        let seen = false;
        try {
            seen = sessionStorage.getItem(STORAGE_KEY) === '1';
        } catch (e) { /* ignore */ }

        if (autoOpen && !seen) {
            requestAnimationFrame(() => openOverlay());
        }

        return { open: openOverlay, close: closeOverlay };
    }

    global.initArHowto = initArHowto;
})(window);
