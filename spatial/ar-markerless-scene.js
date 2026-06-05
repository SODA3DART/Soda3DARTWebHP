/* globals AFRAME, XR8 */
(function () {
    const params = new URLSearchParams(window.location.search);
    const characterId = params.get('id');
    const catalog = window.AR_MARKERLESS_CHARACTERS || {};
    const config = characterId ? catalog[characterId] : null;

    if (!config) {
        document.body.innerHTML = '<p style="color:#fff;font-family:sans-serif;padding:20px;">キャラクター設定が見つかりません。</p>';
        return;
    }

    document.title = `${config.title} | マーカーレスAR（実験）`;

    const assetsEl = document.getElementById('markerless-assets');
    const rootEl = document.getElementById('placed-root');

    const pivotEl = document.createElement('a-entity');
    pivotEl.id = 'floor-pivot';
    pivotEl.setAttribute('rotation', config.rootRotation || '0 0 0');
    pivotEl.setAttribute('scale', config.rootScale || '1 1 1');
    rootEl.appendChild(pivotEl);

    config.models.forEach((model, index) => {
        const assetId = `ml-model-${index}`;
        const item = document.createElement('a-asset-item');
        item.id = assetId;
        item.setAttribute('src', model.src);
        assetsEl.appendChild(item);

        const entity = document.createElement('a-entity');
        entity.setAttribute('gltf-model', `#${assetId}`);
        entity.setAttribute('rotation', model.rotation || '0 0 0');
        entity.setAttribute('position', model.position || '0 0 0');
        entity.setAttribute('scale', model.scale || '1 1 1');
        entity.setAttribute('double-sided', '');
        if (model.mixer) {
            entity.setAttribute('animation-mixer', 'clip: *; loop: repeat');
        }
        pivotEl.appendChild(entity);
    });

    rootEl.setAttribute('position', config.rootPosition || '0 0 -2');
    rootEl.setAttribute('rotation', '0 0 0');

    const placeRoot = (x, y, z) => {
        let yaw = 0;
        const cameraEl = document.querySelector('[camera]');
        if (cameraEl && cameraEl.object3D) {
            const camPos = new THREE.Vector3();
            cameraEl.object3D.getWorldPosition(camPos);
            const dx = camPos.x - x;
            const dz = camPos.z - z;
            yaw = Math.atan2(dx, dz) * (180 / Math.PI);
        }
        rootEl.setAttribute('position', `${x} ${y} ${z}`);
        rootEl.setAttribute('rotation', `0 ${yaw} 0`);
        rootEl.setAttribute('visible', 'true');
    };

    const initTapPlace = () => {
        const onTap = (e) => {
            const touch = e.touches ? e.touches[0] : e;
            const nx = touch.clientX / window.innerWidth;
            const ny = touch.clientY / window.innerHeight;

            if (typeof XR8 !== 'undefined' && XR8.XrController && XR8.XrController.hitTest) {
                const hits = XR8.XrController.hitTest(nx, ny);
                if (hits && hits.length > 0) {
                    const hit = hits[0];
                    placeRoot(hit.position.x, hit.position.y, hit.position.z);
                    return;
                }
            }
            placeRoot(0, -0.5, -2);
        };

        window.addEventListener('touchstart', onTap, { passive: true });
        window.addEventListener('click', onTap);
    };

    if (window.XR8) {
        initTapPlace();
    } else {
        window.addEventListener('xrloaded', initTapPlace);
    }
})();
