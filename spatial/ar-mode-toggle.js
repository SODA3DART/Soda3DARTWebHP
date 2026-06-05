/**
 * MindAR（マーカー）⇔ 8th Wall（マーカーレス・実験）切り替え
 * 既存シーンはそのまま。マーカーレスは iframe で分離読み込み。
 *
 * 使い方: <script src="ar-mode-toggle.js" data-character="leo"></script>
 */
(function () {
    const script = document.currentScript;
    const characterId = script && script.dataset.character;
    if (!characterId) return;

    const catalog = window.AR_MARKERLESS_CHARACTERS || {};
    if (!catalog[characterId]) return;

    const mindarScene = document.querySelector('a-scene');
    if (!mindarScene) return;

    if (!document.querySelector('link[href="ar-mode-toggle.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'ar-mode-toggle.css';
        document.head.appendChild(link);
    }

    const markerOnlySelectors = ['#marker-ui-btn', '#mode-ui-btn', '#view-ui-btn'];
    let mode = 'marker';
    let iframe = null;
    let iframeLoaded = false;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'ar-mode-toggle-btn';
    btn.textContent = 'マーカーレス（実験）';
    btn.setAttribute('aria-pressed', 'false');
    document.body.appendChild(btn);

    const hint = document.createElement('div');
    hint.id = 'ar-markerless-hint';
    hint.textContent = '実験モード：地面をタップしてキャラクターを配置できます（8th Wall SLAM）';
    document.body.appendChild(hint);

    function pauseMarkerMedia() {
        mindarScene.querySelectorAll('audio, video').forEach((media) => {
            try {
                media.pause();
            } catch (e) { /* ignore */ }
        });
        const bodyAudio = document.getElementById('bgm');
        if (bodyAudio) {
            try {
                bodyAudio.pause();
            } catch (e) { /* ignore */ }
        }
    }

    function setMarkerUiVisible(visible) {
        markerOnlySelectors.forEach((selector) => {
            const el = document.querySelector(selector);
            if (el) el.style.display = visible ? '' : 'none';
        });
        const overlay = document.getElementById('marker-overlay');
        if (overlay && !visible && overlay.classList.contains('is-open')) {
            overlay.classList.remove('is-open');
            overlay.hidden = true;
        }
    }

    function ensureIframe() {
        if (!iframe) {
            iframe = document.createElement('iframe');
            iframe.id = 'ar-markerless-frame';
            iframe.title = 'マーカーレスAR（実験）';
            iframe.setAttribute('allow', 'camera; gyroscope; accelerometer; xr-spatial-tracking');
            document.body.appendChild(iframe);
        }
        return iframe;
    }

    function stopMarkerless() {
        if (!iframe) return;
        iframe.style.display = 'none';
        iframe.src = 'about:blank';
    }

    function applyMode() {
        const isMarkerless = mode === 'markerless';
        btn.classList.toggle('is-markerless', isMarkerless);
        btn.setAttribute('aria-pressed', isMarkerless ? 'true' : 'false');
        btn.textContent = isMarkerless ? 'マーカーARに戻る' : 'マーカーレス（実験）';
        hint.style.display = isMarkerless ? 'block' : 'none';

        if (isMarkerless) {
            pauseMarkerMedia();
            setMarkerUiVisible(false);
            mindarScene.style.visibility = 'hidden';
            mindarScene.style.pointerEvents = 'none';
            const frame = ensureIframe();
            if (frame.src === 'about:blank' || !frame.src.includes('ar_markerless.html')) {
                frame.src = `ar_markerless.html?id=${encodeURIComponent(characterId)}`;
            }
            frame.style.display = 'block';
        } else {
            stopMarkerless();
            setMarkerUiVisible(true);
            mindarScene.style.visibility = '';
            mindarScene.style.pointerEvents = '';
        }
    }

    btn.addEventListener('click', () => {
        mode = mode === 'marker' ? 'markerless' : 'marker';
        applyMode();
    });
})();
