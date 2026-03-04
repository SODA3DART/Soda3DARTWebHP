/* globals AFRAME, XR8 */
/**
 * 8th Wall OSS - マーカーレス6DoF AR
 * SLAMによる地面ヒットテストでタップ位置にオブジェクトを配置
 */

const initTapPlace = () => {
  const scene = document.querySelector('a-scene');
  if (!scene) return;

  const onTap = (e) => {
    const touch = e.touches ? e.touches[0] : e;
    const x = (touch.clientX / window.innerWidth);
    const y = (touch.clientY / window.innerHeight);

    if (typeof XR8 === 'undefined' || !XR8.XrController || !XR8.XrController.hitTest) return;

    const hits = XR8.XrController.hitTest(x, y);
    if (hits && hits.length > 0) {
      const hit = hits[0];
      const pos = hit.position;
      placeObject(scene, pos.x, pos.y, pos.z);
    } else {
      // フォールバック: 画面中央の推定位置（カメラの前方・下方）
      placeObject(scene, 0, -0.5, -2);
    }
  };

  window.addEventListener('touchstart', onTap, { passive: true });
  window.addEventListener('click', onTap);
};

const placeObject = (scene, x, y, z) => {
  const newEl = document.createElement('a-entity');
  newEl.setAttribute('position', { x, y, z });
  newEl.setAttribute('rotation', { x: 0, y: Math.random() * 360, z: 0 });
  newEl.setAttribute('scale', '0.001 0.001 0.001');
  newEl.setAttribute('visible', 'true');
  newEl.setAttribute('shadow', 'cast: true; receive: true');

  const box = document.createElement('a-box');
  box.setAttribute('width', '0.2');
  box.setAttribute('height', '0.2');
  box.setAttribute('depth', '0.2');
  box.setAttribute('material', 'roughness: 0.8; metalness: 0.2; color: #DD0065');
  box.setAttribute('animation', 'property: scale; to: 1 1 1; dur: 500; easing: easeOutElastic');
  newEl.appendChild(box);

  scene.appendChild(newEl);
};

window.XR8 ? initTapPlace() : window.addEventListener('xrloaded', initTapPlace);
