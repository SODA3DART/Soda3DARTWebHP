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

  const motion = document.createElement('a-entity');
  motion.setAttribute('gltf-model', '#fox-motion');
  motion.setAttribute('rotation', '240 180 0');
  motion.setAttribute('position', '0 0 0');
  motion.setAttribute('scale', '1 1 1');
  motion.setAttribute('animation-mixer', 'clip: *; loop: repeat');
  motion.setAttribute('shadow', 'cast: true; receive: true');
  newEl.appendChild(motion);

  const behind = document.createElement('a-entity');
  behind.setAttribute('gltf-model', '#fox-behind');
  behind.setAttribute('rotation', '240 180 0');
  behind.setAttribute('position', '0 0.2 0');
  behind.setAttribute('scale', '1 1 1');
  behind.setAttribute('animation-mixer', 'clip: *; loop: repeat');
  behind.setAttribute('shadow', 'cast: true; receive: true');
  newEl.appendChild(behind);

  newEl.setAttribute('animation', 'property: scale; to: 0.3 0.3 0.3; dur: 500; easing: easeOutElastic');
  scene.appendChild(newEl);
};

window.XR8 ? initTapPlace() : window.addEventListener('xrloaded', initTapPlace);
