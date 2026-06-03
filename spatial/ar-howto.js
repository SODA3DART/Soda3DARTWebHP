/**
 * 飛び出すAR — 「遊び方」ポップアップ
 * @param {{ theme?: 'dark'|'light', autoOpen?: boolean, showButton?: boolean }} options
 */
(function (global) {
    const HOWTO_HTML = `
        <h2 id="howto-dialog-title">遊び方</h2>
        <ol>
            <li><strong>スマートフォン</strong>のブラウザ（Safari / Chrome など）でページを開いてください。カメラが使える端末が必要です。</li>
            <li>初回表示時に<strong>カメラの使用を「許可」</strong>してください。</li>
            <li>右上の「<strong>マーカーを表示</strong>」から、この作品専用のマーカー画像を確認できます。別の画面に表示したり、印刷した用紙に映して使えます。</li>
            <li>マーカー全体が画面に入るようにかざすと、<strong>キャラクターが表示</strong>されます。マーカーを動かすとキャラクターも一緒に動きます。</li>
            <li>右下の「<strong>ポスターモード</strong>」／「<strong>立体モード</strong>」で、マーカーに平行に寝かせる表示と、立って見る表示を切り替えられます（作品により異なります）。</li>
            <li>「<strong>ソリッドWF</strong>」ボタンがある作品は、ワイヤーフレーム表示のオン／オフができます。</li>
            <li>音が鳴る作品は、マーカーを認識したときに<strong>BGM</strong>が再生されます（端末の音量・マナーモードにご注意ください）。</li>
            <li>左上の「<strong>一覧に戻る</strong>」でキャラクター選択画面に戻れます。</li>
        </ol>
        <p class="howto-note">うまく表示されないときは、部屋を明るくする・マーカーを平らな面に置く・ブラウザを再読み込みする・カメラ許可を確認してください。</p>
        <div class="howto-actions">
            <button type="button" class="howto-close" id="howto-close-btn">閉じる</button>
        </div>
    `;

    const HUB_HOWTO_HTML = `
        <h2 id="howto-dialog-title">遊び方</h2>
        <ol>
            <li>下のカルーセルから<strong>好きなキャラクター</strong>を選び、「ARを見る」をタップしてください。</li>
            <li>各キャラクターのページでは、<strong>マーカー画像</strong>をスマートフォンのカメラで映すと、3Dキャラクターが飛び出して見えます。</li>
            <li>作品によって<strong>ポスターモード</strong>（マーカーに平行）や<strong>立体モード</strong>、<strong>ソリッドWF</strong>、<strong>BGM</strong>などの機能があります。各ページ右上の「遊び方」でも確認できます。</li>
            <li>マーカーは各ARページの「<strong>マーカーを表示</strong>」から確認・保存できます。</li>
        </ol>
        <p class="howto-note">AR体験はスマートフォン推奨です。PCではカメラが使えない場合があります。</p>
        <div class="howto-actions">
            <button type="button" class="howto-close" id="howto-close-btn">閉じる</button>
        </div>
    `;

    const STORAGE_KEY = 'ar-howto-seen';

    function initArHowto(options) {
        const theme = options.theme === 'light' ? 'light' : 'dark';
        const autoOpen = options.autoOpen !== false;
        const showButton = options.showButton !== false;
        const isHub = theme === 'light';
        const innerHtml = isHub ? HUB_HOWTO_HTML : HOWTO_HTML;

        if (document.getElementById('howto-overlay')) return;

        if (!document.querySelector('link[href="ar-howto.css"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'ar-howto.css';
            document.head.appendChild(link);
        }

        let openBtn = null;
        if (showButton) {
            openBtn = document.createElement('button');
            openBtn.type = 'button';
            openBtn.id = isHub ? 'howto-hub-btn' : 'howto-ui-btn';
            openBtn.className = isHub ? 'howto-hub-btn' : '';
            openBtn.textContent = '遊び方';
            openBtn.setAttribute('aria-expanded', 'false');
            openBtn.setAttribute('aria-controls', 'howto-overlay');
            document.body.appendChild(openBtn);
        }

        const overlay = document.createElement('div');
        overlay.id = 'howto-overlay';
        overlay.className = 'howto-overlay' + (isHub ? ' howto-overlay--light' : '');
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-labelledby', 'howto-dialog-title');
        overlay.hidden = true;

        const panel = document.createElement('div');
        panel.className = 'howto-panel';
        panel.innerHTML = innerHtml;
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

    function bootHowto() {
        if (document.body && document.body.dataset.arHowtoAuto === 'false') return;
        initArHowto({ theme: 'dark' });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootHowto);
    } else {
        bootHowto();
    }
})(window);
