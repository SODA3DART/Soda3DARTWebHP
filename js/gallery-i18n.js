/**
 * Gallery page language switcher (ja / en)
 */
(function () {
    const languageData = {
        ja: {
            'meta-title': 'ギャラリー | 九州 崇城大学 3DCG・VR・Vtuber・ゲーム・彫刻作品集',
            'meta-description': '九州・熊本の崇城大学3Dアートコースの学生作品ギャラリー。3DCG、VR/AR、Vtuber、ゲーム、美術、芸術、VFX、彫刻など多様な作品を展示。デジタルとフィジカル両方の創作活動をご覧いただけます。',
            'logo-main': '崇城大学 芸術学部',
            'logo-sub': '3Dアートコース',
            'nav-home': 'ホーム',
            'nav-features': 'コース紹介',
            'nav-gallery': 'ギャラリー',
            'nav-news': 'ニュース',
            'nav-events': 'イベント',
            'nav-contact': 'お問い合わせ',
            'page-title': '学生作品ギャラリー',
            'page-subtitle': '3Dアートコースの学生たちが制作した作品をご紹介します',
            'filter-all': 'すべて',
            'filter-sculpture': '彫刻',
            'filter-3dmodel': '3Dモデリング',
            'filter-animation': 'アニメーション',
            'filter-vr': 'VR/AR',
            'filter-concept': 'コンセプトアート',
            'filter-print': '3Dプリント',
            'filter-faculty': '教員作品',
            'section-sculpture': '彫刻作品',
            'section-3dcg': '3DCG作品',
            'section-animation': 'アニメーション作品',
            'section-vr': 'VR/AR作品',
            'section-faculty': '教員作品',
            'author-4th': '4年生',
            'author-3rd': '3年生',
            'author-2nd': '2年生',
            'author-group': 'グループ製作',
            'author-sakamoto': '坂元　旭',
            'tag-sculpture': '彫刻',
            'tag-art': '美術',
            'tag-fine-art': '芸術',
            'tag-3d-form': '立体造形',
            'tag-acrylic': 'アクリル',
            'tag-char-design': 'キャラクターデザイン',
            'tag-3d-modeling': '3Dモデリング',
            'tag-digital-sculpture': 'デジタル彫刻',
            'tag-product-design': 'プロダクトデザイン',
            'tag-game': 'ゲーム',
            'tag-3dcg': '3DCG',
            'tag-animation': 'アニメーション',
            'tag-ue': 'UnrealEngine',
            'tag-char-animation': 'キャラクターアニメーション',
            'tag-blender': 'Blender',
            'tag-xr': 'XR',
            'tag-unity': 'Unity',
            'tag-interactive': 'インタラクティブ',
            'tag-ar': 'AR',
            'tag-mindar': 'MindAR',
            'tag-aframe': 'A-Frame',
            'tag-webar': 'WebAR',
            'tag-vtuber': 'Vtuber',
            'tag-python': 'Python',
            'tag-shader': 'Shader',
            'tag-zbrush': 'ZBrush',
            'tag-maya': 'Maya',
            'sculp-1-title': '彫刻作品',
            'sculp-2-title': '彫刻作品',
            'sculp-3-title': '観察',
            'sculp-4-title': '彫刻作品4',
            'sculp-5-title': 'ネギカモ',
            'cg-1-title': 'くまゆ',
            'cg-1-desc': '「熊本のコンシェルジュキャラクター」をテーマにデザインからモデリングまで製作<br>工学部建築学科との共同研究にてAIコンシェルジュとして活躍',
            'cg-2-title': '先導者',
            'cg-2-desc': 'ZBrushを使用したデジタル彫刻作品。3DCGの技術を活かした芸術表現。',
            'cg-3-title': 'メラン・リリオン',
            'cg-3-desc': 'キャラクターデザインの課題として作成したラスボス',
            'cg-4-title': 'ポピー',
            'cg-4-desc': 'キャラクターデザインの課題として作成したオリジナルゲームのキャラクター',
            'anim-1-title': '氷の美術館',
            'anim-1-desc': 'Unreal Editor for Fortnite (UEFN)を用いて作成された自身のデジタル作品を彩る空間と映像作品',
            'anim-2-title': '静謐のミューズたち',
            'anim-2-desc': 'Unreal Editor for Fortnite (UEFN)を用いて作成された自身のデジタル作品を彩る空間と映像作品',
            'anim-3-title': 'けん玉',
            'anim-3-desc': 'さまざまなキャラクターモーションを集めたアニメーションリール。歩行、走行、戦闘モーションなど。',
            'vr-1-desc': 'スカルプティングをXR空間で実現するための新たしいアプローチを行ったアプリケーション。最新のVR技術と芸術表現を融合させた創造型コンテンツ。<br>Meta Quest 3を使用し2025年夏にリリース予定。',
            'vr-2-title': '飛び出すARキャラクター',
            'vr-2-desc': 'ゲームキャラクターをテーマに制作したAR作品群。専用マーカーをスマートフォンで読み取ると、キャラクターが立体表示されます。ポスターモードやステージ配置など、作品ごとに体験を切り替えられます。',
            'fac-harmony-desc': '楽譜から鍵盤を奏でる3Dアニメーション制作ツールとピアノモデル',
            'fac-shader-desc': '描画プログラミングであるシェーダーを用いて表現する様々な作品群です。',
            'footer-university': '崇城大学',
            'footer-about': '大学について',
            'footer-faculty': '学部・学科紹介',
            'footer-examination': '入試情報',
            'footer-campus-life': 'キャンパスライフ',
            'footer-career': '就職・進路',
            'footer-art-faculty': '芸術学部',
            'footer-art-department': '美術学科',
            'footer-professors': '教員紹介',
            'footer-facilities': '施設・設備',
            'footer-student-works': '学生作品',
            'footer-gallery': 'ギャラリー',
            'footer-projects': '講義紹介・プロジェクト',
            'footer-contact': 'お問い合わせ',
            'footer-access': 'アクセス',
            'footer-course-contact': '3Dアートコースへのお問い合わせ',
            'footer-open-campus': 'オープンキャンパス',
            'footer-faq': 'よくある質問',
            'footer-copyright': '© 2025 崇城大学芸術学部美術学科 3Dアートコース All Rights Reserved.'
        },
        en: {
            'meta-title': 'Gallery | Sojo University 3DCG, VR, Vtuber, Game & Sculpture Works',
            'meta-description': 'Student works gallery from the Sojo University 3D Art Course in Kumamoto, Kyushu. Explore 3DCG, VR/AR, Vtuber, game, fine art, VFX, sculpture, and more in both digital and physical media.',
            'logo-main': 'Sojo University Faculty of Art',
            'logo-sub': '3D Art Course',
            'nav-home': 'Home',
            'nav-features': 'Courses',
            'nav-gallery': 'Gallery',
            'nav-news': 'News',
            'nav-events': 'Events',
            'nav-contact': 'Contact',
            'page-title': 'Student Works Gallery',
            'page-subtitle': 'A showcase of works created by students in the 3D Art Course',
            'filter-all': 'All',
            'filter-sculpture': 'Sculpture',
            'filter-3dmodel': '3D Modeling',
            'filter-animation': 'Animation',
            'filter-vr': 'VR/AR',
            'filter-concept': 'Concept Art',
            'filter-print': '3D Print',
            'filter-faculty': 'Faculty Works',
            'section-sculpture': 'Sculpture',
            'section-3dcg': '3DCG Works',
            'section-animation': 'Animation',
            'section-vr': 'VR/AR Works',
            'section-faculty': 'Faculty Works',
            'author-4th': '4th-year student',
            'author-3rd': '3rd-year student',
            'author-2nd': '2nd-year student',
            'author-group': 'Group project',
            'author-sakamoto': 'Akira Sakamoto',
            'tag-sculpture': 'Sculpture',
            'tag-art': 'Fine Art',
            'tag-fine-art': 'Art',
            'tag-3d-form': '3D Form',
            'tag-acrylic': 'Acrylic',
            'tag-char-design': 'Character Design',
            'tag-3d-modeling': '3D Modeling',
            'tag-digital-sculpture': 'Digital Sculpture',
            'tag-product-design': 'Product Design',
            'tag-game': 'Game',
            'tag-3dcg': '3DCG',
            'tag-animation': 'Animation',
            'tag-ue': 'Unreal Engine',
            'tag-char-animation': 'Character Animation',
            'tag-blender': 'Blender',
            'tag-xr': 'XR',
            'tag-unity': 'Unity',
            'tag-interactive': 'Interactive',
            'tag-ar': 'AR',
            'tag-mindar': 'MindAR',
            'tag-aframe': 'A-Frame',
            'tag-webar': 'WebAR',
            'tag-vtuber': 'Vtuber',
            'tag-python': 'Python',
            'tag-shader': 'Shader',
            'tag-zbrush': 'ZBrush',
            'tag-maya': 'Maya',
            'sculp-1-title': 'Sculpture Work',
            'sculp-2-title': 'Sculpture Work',
            'sculp-3-title': 'Observation',
            'sculp-4-title': 'Sculpture Work 4',
            'sculp-5-title': 'Negikamo',
            'cg-1-title': 'Kumayu',
            'cg-1-desc': 'Designed and modeled around the theme of Kumamoto\'s concierge character.<br>Deployed as an AI concierge through a joint research project with the Faculty of Engineering, Architecture.',
            'cg-2-title': 'Pioneer',
            'cg-2-desc': 'A digital sculpture created with ZBrush, exploring artistic expression through 3DCG techniques.',
            'cg-3-title': 'Melan Lilion',
            'cg-3-desc': 'A final boss character created for a character design assignment.',
            'cg-4-title': 'Poppy',
            'cg-4-desc': 'A character created for an original game as part of a character design assignment.',
            'anim-1-title': 'Museum of Ice',
            'anim-1-desc': 'A spatial and video work created with Unreal Editor for Fortnite (UEFN) to showcase the student\'s digital creations.',
            'anim-2-title': 'Muses of Stillness',
            'anim-2-desc': 'A spatial and video work created with Unreal Editor for Fortnite (UEFN) to showcase the student\'s digital creations.',
            'anim-3-title': 'Kendama',
            'anim-3-desc': 'An animation reel collecting various character motions including walking, running, and combat.',
            'vr-1-desc': 'An application exploring a new approach to sculpting in XR space, blending the latest VR technology with artistic expression.<br>Planned for release in summer 2025 using Meta Quest 3.',
            'vr-2-title': 'Pop-Out AR Characters',
            'vr-2-desc': 'A collection of AR works themed on game characters. Scan dedicated markers with a smartphone to view characters in 3D, with poster mode and stage layouts varying by work.',
            'fac-harmony-desc': 'A 3D animation production tool that plays a keyboard from sheet music, plus a piano model',
            'fac-shader-desc': 'A collection of works created with shader programming techniques.',
            'footer-university': 'Sojo University',
            'footer-about': 'About',
            'footer-faculty': 'Faculties',
            'footer-examination': 'Admissions',
            'footer-campus-life': 'Campus Life',
            'footer-career': 'Career',
            'footer-art-faculty': 'Faculty of Art',
            'footer-art-department': 'Department of Fine Arts',
            'footer-professors': 'Faculty Members',
            'footer-facilities': 'Facilities',
            'footer-student-works': 'Student Works',
            'footer-gallery': 'Gallery',
            'footer-projects': 'Projects',
            'footer-contact': 'Contact',
            'footer-access': 'Access',
            'footer-course-contact': 'Inquiries to 3D Art Course',
            'footer-open-campus': 'Open Campus',
            'footer-faq': 'FAQ',
            'footer-copyright': '© 2025 Sojo University Faculty of Art, Department of Fine Arts, 3D Art Course. All Rights Reserved.'
        }
    };

    function applyTranslations(lang) {
        const data = languageData[lang];
        if (!data) return;

        document.documentElement.lang = lang;

        document.title = data['meta-title'];
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', data['meta-description']);

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (data[key] !== undefined) {
                el.textContent = data[key];
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            const key = el.getAttribute('data-i18n-html');
            if (data[key] !== undefined) {
                el.innerHTML = data[key];
            }
        });

        document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
            const key = el.getAttribute('data-i18n-alt');
            if (data[key] !== undefined) {
                el.setAttribute('alt', data[key]);
            }
        });

        const logoText = document.querySelector('.logo-text');
        if (logoText) {
            logoText.innerHTML = `${data['logo-main']}<span>${data['logo-sub']}</span>`;
        }

        const footerColumns = document.querySelectorAll('.footer-column');
        if (footerColumns.length >= 4) {
            footerColumns[0].querySelector('h3').textContent = data['footer-university'];
            const uLinks = footerColumns[0].querySelectorAll('a');
            if (uLinks[0]) uLinks[0].textContent = data['footer-about'];
            if (uLinks[1]) uLinks[1].textContent = data['footer-faculty'];
            if (uLinks[2]) uLinks[2].textContent = data['footer-examination'];
            if (uLinks[3]) uLinks[3].textContent = data['footer-campus-life'];
            if (uLinks[4]) uLinks[4].textContent = data['footer-career'];

            footerColumns[1].querySelector('h3').textContent = data['footer-art-faculty'];
            const aLinks = footerColumns[1].querySelectorAll('a');
            if (aLinks[0]) aLinks[0].textContent = data['footer-art-department'];
            if (aLinks[1]) aLinks[1].textContent = data['footer-professors'];
            if (aLinks[2]) aLinks[2].textContent = data['footer-facilities'];

            footerColumns[2].querySelector('h3').textContent = data['footer-student-works'];
            const wLinks = footerColumns[2].querySelectorAll('a');
            if (wLinks[0]) wLinks[0].textContent = data['footer-gallery'];
            if (wLinks[1]) wLinks[1].textContent = data['footer-projects'];

            footerColumns[3].querySelector('h3').textContent = data['footer-contact'];
            const cLinks = footerColumns[3].querySelectorAll('a');
            if (cLinks[0]) cLinks[0].textContent = data['footer-access'];
            if (cLinks[1]) cLinks[1].textContent = data['footer-course-contact'];
            if (cLinks[2]) cLinks[2].textContent = data['footer-open-campus'];
            if (cLinks[3]) cLinks[3].textContent = data['footer-faq'];
        }

        const copyright = document.querySelector('.footer-bottom p');
        if (copyright) copyright.textContent = data['footer-copyright'];
    }

    function changeLanguage(lang) {
        applyTranslations(lang);
    }

    document.addEventListener('DOMContentLoaded', function () {
        const languageButtons = document.querySelectorAll('.language-btn');

        languageButtons.forEach((button) => {
            button.addEventListener('click', function () {
                const lang = this.getAttribute('data-lang');
                languageButtons.forEach((btn) => btn.classList.remove('active'));
                this.classList.add('active');
                changeLanguage(lang);
                localStorage.setItem('preferredLanguage', lang);
            });
        });

        const savedLanguage = localStorage.getItem('preferredLanguage');
        if (savedLanguage === 'en') {
            languageButtons.forEach((btn) => {
                if (btn.getAttribute('data-lang') === 'en') {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            changeLanguage('en');
        }
    });

    window.galleryChangeLanguage = changeLanguage;
})();
