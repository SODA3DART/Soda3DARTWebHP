// Index2 Museum Logic - The White Cube

// import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'; // Removed for local compatibility

// Configuration
const CONFIG = {
    cameraSpeed: 0.05,
    corridorWidth: 10,
    corridorHeight: 6,
    artSpacing: 8,
    artworks: [
        { src: 'images/Fight.jpeg', title: 'Fight!', author: '4th Year Student' },
        { src: 'images/bos_AY.png', title: 'Melan Lilion', author: '4th Year Student' },
        { src: 'images/ahiru_fh.jpg', title: 'Duck', author: '2nd Year Student' },
        { src: 'images/Coffee_mil_FH.jpg', title: 'Coffee Mill', author: '2nd Year Student' },
        { src: 'images/kansatu_yu.png', title: 'Observation', author: '3rd Year Student' },
        { src: 'images/edi＿AK.jpg', title: 'Edi', author: '3rd Year Student' },
        { src: 'images/phi_st.jpeg', title: 'Phi', author: '4th Year Student' },
        { src: 'images/3df945078f042c64037441d1d08d241d33e59ec4.jpg', title: 'Untitled', author: '3rd Year Student' }
    ]
};

// State
let scrollPos = 0;
let targetScrollPos = 0;
let scene, camera, renderer;
let artworks = [];

document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
    initRainbowCursor();

    // Remove loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 1000);
    }, 1000);
});

function initThreeJS() {
    const container = document.getElementById('canvas-container');

    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene.fog = new THREE.Fog(0xffffff, 10, 40);

    // Camera
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 5);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Build Corridor
    buildCorridor();

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

    // Floor
    const floorGeo = new THREE.PlaneGeometry(20, 200);
    const floor = new THREE.Mesh(floorGeo, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2;
    floor.position.z = -50;
    floor.receiveShadow = true;
    scene.add(floor);

    // Walls (Left & Right)
    // We'll just make long walls
    const wallGeo = new THREE.PlaneGeometry(200, 10);

    const leftWall = new THREE.Mesh(wallGeo, wallMaterial);
    leftWall.position.set(-CONFIG.corridorWidth / 2, 3, -50);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.receiveShadow = true;
    scene.add(leftWall);

    const rightWall = new THREE.Mesh(wallGeo, wallMaterial);
    rightWall.position.set(CONFIG.corridorWidth / 2, 3, -50);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.receiveShadow = true;
    scene.add(rightWall);

    // Artworks
    CONFIG.artworks.forEach((art, index) => {
        const isLeft = index % 2 === 0;
        const zPos = -index * CONFIG.artSpacing - 5;

        textureLoader.load(art.src, (texture) => {
            // Adjust aspect ratio
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
            mesh.position.y = 0.5; // Eye level-ish
            mesh.position.z = zPos;

            if (isLeft) {
                mesh.position.x = -CONFIG.corridorWidth / 2 + 0.1;
                mesh.rotation.y = Math.PI / 2;
            } else {
                mesh.position.x = CONFIG.corridorWidth / 2 - 0.1;
                mesh.rotation.y = -Math.PI / 2;
            }

            mesh.castShadow = true;
            mesh.userData = art; // Store info
            scene.add(mesh);
            artworks.push(mesh);

            // Spotlight for this art
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

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onWheel(event) {
    // Determine scroll direction
    // DeltaY is positive when scrolling down (moving forward in our case)
    targetScrollPos += event.deltaY * 0.05;

    // Clamp scroll
    const maxScroll = CONFIG.artworks.length * CONFIG.artSpacing + 10;
    targetScrollPos = Math.max(0, Math.min(targetScrollPos, maxScroll));
}

function animate() {
    requestAnimationFrame(animate);

    // Smooth scroll
    scrollPos += (targetScrollPos - scrollPos) * 0.05;

    // Update camera Z
    camera.position.z = 5 - scrollPos;

    // Subtle camera sway based on mouse
    // (Optional, keeps it alive)

    renderer.render(scene, camera);
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
