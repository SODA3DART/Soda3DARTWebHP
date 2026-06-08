/**
 * 飛び出すARハブ — 「遊び方」ポップアップ
 */
(function (global) {
    const HOWTO_HTML = `
        <h2 id="howto-dialog-title">遊び方</h2>
        <div class="howto-body-full">
            <ol>
                <li>下のカルーセルから<strong>好きなキャラクター</strong>を選び、「ARを見る」をタップしてください。</li>
                <li><strong>マーカー画像</strong>を用意します。おすすめは<a href="ar_marker_print.html" style="color:#0072ff;font-weight:700;">マーカー印刷用ページ</a>から<strong>コースター大サイズ（90mm角）</strong>で印刷し、平らな台に置いて使う方法です。</li>
                <li>ARページでカメラを「許可」し、<strong>印刷したマーカー</strong>（または別端末の「マーカーを表示」画面）を映すと、3Dキャラクターが飛び出して見えます。</li>
                <li>作品によって<strong>ポスターモード</strong>（マーカーに平行）や<strong>立体モード</strong>、<strong>ソリッドWF</strong>、<strong>BGM</strong>などの機能があります。</li>
                <li>各ARページ左下の「<strong>マーカーレス（実験）</strong>」で、マーカーなし体験に切り替えられます（スマートフォン推奨）。</li>
            </ol>
            <p class="howto-note">印刷時はプリンター設定を<strong>実際のサイズ・100%</strong>にしてください。うまく表示されないときは、明るい場所でマーカーを曲げずに置いてお試しください。</p>
        </div>
        <div class="howto-body-short">
            <ol class="howto-steps-compact">
                <li>キャラを選ぶ →「<strong>ARを見る</strong>」</li>
                <li>地面を<strong>タップ</strong>して配置</li>
            </ol>
            <p class="howto-note howto-note-optional">マーカー派は左下ボタンで切替 · <a href="ar_marker_print.html" style="color:#0072ff;font-weight:600;">印刷</a></p>
        </div>
        <div class="howto-actions howto-actions-full">
            <a href="ar_marker_print.html" class="howto-close" style="display:inline-block;text-decoration:none;margin-right:8px;background:#fff;color:#0072ff;border:1px solid rgba(0,114,255,0.3);">印刷ページへ</a>
            <button type="button" class="howto-close" id="howto-close-btn">閉じる</button>
        </div>
        <div class="howto-actions howto-actions-short">
            <button type="button" class="howto-close" id="howto-close-btn-mobile">OK</button>
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
        const closeBtnMobile = document.getElementById('howto-close-btn-mobile');

        function closeOverlay() {
            overlay.classList.remove('is-open');
            if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
            overlay.hidden = true;
            try {
                sessionStorage.setItem(STORAGE_KEY, '1');
            } catch (e) { /* ignore */ }
        }

        function openOverlay() {
            overlay.hidden = false;
            overlay.classList.add('is-open');
            if (openBtn) openBtn.setAttribute('aria-expanded', 'true');
        }

        if (openBtn) openBtn.addEventListener('click', openOverlay);
        closeBtn.addEventListener('click', closeOverlay);
        closeBtnMobile.addEventListener('click', closeOverlay);
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
