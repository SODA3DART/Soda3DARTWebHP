/**
 * マーカーレス（8th Wall）用キャラクター定義 — ar_character_hub 登録分
 *
 * MindAR の rotation="90 0 0" はマーカー平面用の補正。
 * 8th Wall（Y-up ワールド）では rootRotation は基本 0 0 0。
 * fox / doomy 系のみ 018th 参考実装の root 90 + model 240 180 を使用。
 */
window.AR_MARKERLESS_CHARACTERS = {
    doomy: {
        title: 'Doomy',
        rootPosition: '0 0 -2',
        rootRotation: '90 0 0',
        rootScale: '1 1 1',
        models: [
            { src: '../3dartensyu3/ar/01/uetanikafe.glb', rotation: '240 180 0', position: '0 0 0', scale: '1 1 1', mixer: true }
        ]
    },
    fox: {
        title: 'Fox',
        rootPosition: '0 0 -2',
        rootRotation: '90 0 0',
        rootScale: '0.3 0.3 0.3',
        models: [
            { src: '../3dartensyu3/ar/03/fox._motion.glb', rotation: '240 180 0', position: '0 0 0', scale: '1 1 1', mixer: true },
            { src: '../3dartensyu3/ar/03/fox._bhindglb.glb', rotation: '240 180 0', position: '0 0.2 0', scale: '1 1 1', mixer: true }
        ]
    },
    higotubaki: {
        title: '肥後 椿',
        rootPosition: '0 0 -2',
        rootRotation: '0 0 0',
        rootScale: '0.5 0.5 0.5',
        models: [
            { src: '../3dartensyu3/ar/05/higotubakikan.glb', rotation: '0 0 0', position: '0 0 0', scale: '1 1 1', mixer: true }
        ]
    },
    sorappe: {
        title: 'そらっぺ',
        rootPosition: '0 0 -2',
        rootRotation: '0 0 0',
        rootScale: '0.2 0.2 0.2',
        models: [
            { src: '../3dartensyu3/ar/04/SorappeAnimation.glb', rotation: '0 0 0', position: '0 0 0', scale: '1 1 1', mixer: true }
        ]
    },
    yui: {
        title: 'ひなつば ゆい',
        rootPosition: '0 0 -2',
        rootRotation: '0 0 0',
        rootScale: '1 1 1',
        models: [
            { src: '../3dartensyu3/ar/02/hunatubayui.glb', rotation: '0 0 0', position: '0 0 0', scale: '1 1 1', mixer: true },
            { src: '../3dartensyu3/ar/02/haikei.glb', rotation: '0 0 0', position: '0 0 0', scale: '1 1 1', mixer: false }
        ]
    },
    leo: {
        title: 'Leo',
        rootPosition: '0 0 -2',
        rootRotation: '0 0 0',
        rootScale: '0.3 0.3 0.3',
        models: [
            { src: '../3dartensyu3/ar/06/Leo.glb', rotation: '0 0 0', position: '0 0 0', scale: '1 1 1', mixer: true }
        ]
    },
    tobio: {
        title: '飛雄・八枝郎',
        rootPosition: '0 0 -2',
        rootRotation: '0 0 0',
        rootScale: '0.3 0.3 0.3',
        models: [
            { src: '../3dartensyu3/ar/07/stage.glb', rotation: '0 0 0', position: '0 -0.18 0', scale: '1 1 1', mixer: false },
            { src: '../3dartensyu3/ar/07/Tobio_Haetarou.glb', rotation: '0 0 0', position: '0 0 0', scale: '1 1 1', mixer: true }
        ]
    },
    tarukichi: {
        title: 'たる吉',
        rootPosition: '0 0 -2',
        rootRotation: '0 0 0',
        rootScale: '1 1 1',
        models: [
            { src: '../3dartensyu3/ar/08/stage.glb', rotation: '0 0 0', position: '0 -0.18 0', scale: '1 1 1', mixer: false },
            { src: '../3dartensyu3/ar/08/たる吉.glb', rotation: '0 0 0', position: '0 0 0', scale: '1 1 1', mixer: true }
        ]
    },
    katanagonn: {
        title: '刀奈権',
        rootPosition: '0 0 -2',
        rootRotation: '0 0 0',
        rootScale: '0.3 0.3 0.3',
        models: [
            { src: '../3dartensyu3/ar/09/sutege.glb', rotation: '0 0 0', position: '0 0 0', scale: '1 1 1', mixer: false },
            { src: '../3dartensyu3/ar/09/katanagonn.glb', rotation: '0 0 0', position: '0 0 0', scale: '1 1 1', mixer: true }
        ]
    },
    mikugyosei: {
        title: 'みく御成ちゃん',
        rootPosition: '0 0 -2',
        rootRotation: '0 0 0',
        rootScale: '0.9 0.9 0.9',
        models: [
            { src: '../3dartensyu3/ar/10/ozyoutyananime3.glb', rotation: '0 0 0', position: '0 0 0', scale: '1 1 1', mixer: true }
        ]
    },
    ichisan: {
        title: 'いちさん',
        rootPosition: '0 0 -2',
        rootRotation: '0 0 0',
        rootScale: '1 1 1',
        models: [
            { src: '../3dartensyu3/ar/11/ichisan.glb', rotation: '0 0 0', position: '0 0 0', scale: '1 1 1', mixer: true }
        ]
    }
};
