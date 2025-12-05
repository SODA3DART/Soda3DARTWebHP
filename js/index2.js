// Index2 Museum Logic - The White Cube (Upgraded)

// No imports - assumes THREE is loaded globally via script tag

// Configuration
const CONFIG = {
    cameraSpeed: 0.05,
    corridorWidth: 12,
    artSpacing: 10, // Distance between artworks
    viewDistance: 6, // Distance to stop in front of artwork
    turnDuration: 3, // Scroll units to turn
    pauseDuration: 4, // Scroll units to stay facing artwork
    artworks: [
        // Sculpture
        { src: 'images/phi_st.jpeg', title: 'Phi', author: '4th Year Student', type: 'sculpture' },
        { src: 'images/phi_st2.jpeg', title: 'Phi (Detail)', author: '4th Year Student', type: 'sculpture' },
        { src: 'images/kansatu_yu.png', title: 'Observation', author: '3rd Year Student', type: 'sculpture' },
        { src: 'images/phi_MN.jpg', title: 'Sculpture 4', author: '4th Year Student', type: 'sculpture' },
        { src: 'images/negikamoMN.jpg', title: 'Negikamo', author: '4th Year Student', type: 'sculpture' },

        // 3DCG
        { src: 'images/gallery/Kumayuiru.png', title: 'Kumayu', author: '4th Year Student', type: '3dcg' },
        { src: 'images/sendousya.png', title: 'The Guide', author: '3rd Year Student', type: '3dcg' },
        { src: 'images/bos_AY.png', title: 'Melan Lilion', author: '4th Year Student', type: '3dcg' },
        { src: 'images/gallery/Poppy.png', title: 'Poppy', author: '4th Year Student', type: '3dcg' },

        // Faculty
        { src: 'images/prof,kiyoshima/A_woman_holing_a_snake.webp', title: 'A woman holding a snake', author: 'Prof. Kiyoshima', type: 'faculty' },
        { src: 'images/prof,kiyoshima/catch_me_if_you_can.webp', title: 'Catch me if you can', author: 'Prof. Kiyoshima', type: 'faculty' },
        { src: 'images/prof,kiyoshima/Don\'t_go_away.webp', title: 'Don\'t go away', author: 'Prof. Kiyoshima', type: 'faculty' },
        { src: 'images/prof,kiyoshima/Drifting_Angel1.webp', title: 'Drifting Angel', author: 'Prof. Kiyoshima', type: 'faculty' },
        { src: 'images/prof,kiyoshima/Le_Spectre_de_la_rose_Nue.webp', title: 'Le Spectre de la rose Nue', author: 'Prof. Kiyoshima', type: 'faculty' },
        { src: 'images/prof,kiyoshima/Ethemeral_liberata.webp', title: 'Ethemeral liberata', author: 'Prof. Kiyoshima', type: 'faculty' },
        { src: 'images/prof,kiyoshima/LeSpectredelaRose.webp', title: 'Le Spectre de la Rose', author: 'Prof. Kiyoshima', type: 'faculty' },
        { src: 'images/gallery/HarmonyKeys.png', title: 'Harmony Keys', author: 'Akira Sakamoto', type: 'faculty' },
        { src: 'images/gallery/shaderThumb.png', title: 'Shader Gallery', author: 'Akira Sakamoto', type: 'faculty' }
    ]
};

// State
let scrollPos = 0;
let targetScrollPos = 0;
let scene, camera, renderer;
let timeline = []; // Array of keyframes
let maxScroll = 0;

document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
    initRainbowCursor();

    // Remove loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 1000);
        }
    }, 1000);
});

function initThreeJS() {
    const container = document.getElementById('canvas-container');

    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene.fog = new THREE.Fog(0xffffff, 5, 30);

    // Camera
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 0);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Build Corridor
    buildCorridor();

    // Generate Timeline
    generateTimeline();

    // Event Listeners
    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('wheel', onWheel, { passive: false });

    // Animation Loop
    animate();
}

function buildCorridor() {
    const textureLoader = new THREE.TextureLoader();
    const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 });
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.5, metalness: 0.1 });

    // Calculate total length needed
    const totalLength = CONFIG.artworks.length * CONFIG.artSpacing + 50;

    // Floor
    const floorGeo = new THREE.PlaneGeometry(20, totalLength);
    const floor = new THREE.Mesh(floorGeo, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2;
    floor.position.z = -totalLength / 2 + 10;
    floor.receiveShadow = true;
    scene.add(floor);

    // Walls
    const wallGeo = new THREE.PlaneGeometry(totalLength, 10);

    const leftWall = new THREE.Mesh(wallGeo, wallMaterial);
    leftWall.position.set(-CONFIG.corridorWidth / 2, 3, -totalLength / 2 + 10);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.receiveShadow = true;
    scene.add(leftWall);

    const rightWall = new THREE.Mesh(wallGeo, wallMaterial);
    rightWall.position.set(CONFIG.corridorWidth / 2, 3, -totalLength / 2 + 10);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.receiveShadow = true;
    scene.add(rightWall);

    // Artworks
    CONFIG.artworks.forEach((art, index) => {
        const isLeft = index % 2 === 0;
        const zPos = -index * CONFIG.artSpacing - 10; // Start a bit further back

        textureLoader.load(art.src, (texture) => {
            const aspect = texture.image.width / texture.image.height;
            const height = 2.5;
            const width = height * aspect;

            const artGeo = new THREE.PlaneGeometry(width, height);
            const artMat = new THREE.MeshBasicMaterial({ map: texture });
            const mesh = new THREE.Mesh(artGeo, artMat);

            // Frame
            const frameGeo = new THREE.BoxGeometry(width + 0.2, height + 0.2, 0.1);
            const frameMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
            const frame = new THREE.Mesh(frameGeo, frameMat);
            frame.position.z = -0.06;
            mesh.add(frame);

            // Position
            mesh.position.y = 0.5;
            mesh.position.z = zPos;

            if (isLeft) {
                mesh.position.x = -CONFIG.corridorWidth / 2 + 0.1;
                mesh.rotation.y = Math.PI / 2;
            } else {
                mesh.position.x = CONFIG.corridorWidth / 2 - 0.1;
                mesh.rotation.y = -Math.PI / 2;
            }

            mesh.castShadow = true;
            mesh.userData = art;
            scene.add(mesh);

            // Spotlight
            const spotLight = new THREE.SpotLight(0xffffff, 0.8);
            spotLight.position.set(0, 4, zPos + 3);
            spotLight.target = mesh;
            spotLight.angle = Math.PI / 6;
            spotLight.penumbra = 0.5;
            spotLight.castShadow = true;
            scene.add(spotLight);
            scene.add(spotLight.target);
        });
    });
}

function generateTimeline() {
    let currentScroll = 0;
    let currentZ = 0;

    // Initial segment (Walk to first art)
    timeline.push({
        start: 0,
        end: 10,
        type: 'walk',
        zStart: 5,
        zEnd: 0,
        rotStart: 0,
        rotEnd: 0
    });
    currentScroll = 10;
    currentZ = 0;

    CONFIG.artworks.forEach((art, index) => {
        const isLeft = index % 2 === 0;
        const artZ = -index * CONFIG.artSpacing - 10;
        const stopZ = artZ + CONFIG.viewDistance; // Stop before the art

        // 1. Walk to Art
        const walkDist = Math.abs(stopZ - currentZ);
        const walkDuration = walkDist; // 1 unit scroll = 1 unit world distance

        timeline.push({
            start: currentScroll,
            end: currentScroll + walkDuration,
            type: 'walk',
            zStart: currentZ,
            zEnd: stopZ,
            rotStart: 0,
            rotEnd: 0
        });
        currentScroll += walkDuration;
        currentZ = stopZ;

        // 2. Turn to Face Art
        const targetRot = isLeft ? Math.PI / 2 : -Math.PI / 2;

        timeline.push({
            start: currentScroll,
            end: currentScroll + CONFIG.turnDuration,
            type: 'turn',
            zStart: currentZ,
            zEnd: currentZ, // Stay put
            rotStart: 0,
            rotEnd: targetRot
        });
        currentScroll += CONFIG.turnDuration;

        // 3. Pause (View Art)
        timeline.push({
            start: currentScroll,
            end: currentScroll + CONFIG.pauseDuration,
            type: 'view',
            zStart: currentZ,
            zEnd: currentZ,
            rotStart: targetRot,
            rotEnd: targetRot
        });
        currentScroll += CONFIG.pauseDuration;

        // 4. Turn Back
        timeline.push({
            start: currentScroll,
            end: currentScroll + CONFIG.turnDuration,
            type: 'turn_back',
            zStart: currentZ,
            zEnd: currentZ,
            rotStart: targetRot,
            rotEnd: 0
        });
        currentScroll += CONFIG.turnDuration;
    });

    // Final walk off into distance
    timeline.push({
        start: currentScroll,
        end: currentScroll + 20,
        type: 'walk',
        zStart: currentZ,
        zEnd: currentZ - 20,
        rotStart: 0,
        rotEnd: 0
    });

    maxScroll = currentScroll + 20;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onWheel(event) {
    targetScrollPos += event.deltaY * 0.05;
    targetScrollPos = Math.max(0, Math.min(targetScrollPos, maxScroll));
}

function animate() {
    requestAnimationFrame(animate);

    // Smooth scroll
    scrollPos += (targetScrollPos - scrollPos) * 0.1;

    // Evaluate Timeline
    updateCameraFromTimeline(scrollPos);

    renderer.render(scene, camera);
}

function updateCameraFromTimeline(scroll) {
    // Find active keyframe
    const segment = timeline.find(s => scroll >= s.start && scroll < s.end);

    if (segment) {
        const progress = (scroll - segment.start) / (segment.end - segment.start);

        // Interpolate Z
        camera.position.z = THREE.MathUtils.lerp(segment.zStart, segment.zEnd, progress);

        // Interpolate Rotation
        camera.rotation.y = THREE.MathUtils.lerp(segment.rotStart, segment.rotEnd, progress);
    } else if (scroll >= maxScroll) {
        // End of timeline
        const last = timeline[timeline.length - 1];
        camera.position.z = last.zEnd;
        camera.rotation.y = last.rotEnd;
    }
}

// --- Rainbow Cursor Logic ---
function initRainbowCursor() {
    const canvas = document.getElementById('cursor-canvas');
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const particles = [];
    let mouse = { x: width / 2, y: height / 2 };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;

        // Add particle
        particles.push(new Particle(mouse.x, mouse.y));
    });

    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    });

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 2;
            this.life = 1;
            this.decay = 0.02;
            this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            this.vx = (Math.random() - 0.5) * 1;
            this.vy = (Math.random() - 0.5) * 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.life -= this.decay;
            this.size -= 0.1;
        }

        draw(ctx) {
            ctx.globalAlpha = this.life;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function animateCursor() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw(ctx);

            if (particles[i].life <= 0 || particles[i].size <= 0) {
                particles.splice(i, 1);
                i--;
            }
        }

        requestAnimationFrame(animateCursor);
    }

    animateCursor();
}
