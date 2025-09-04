// 最適化された3Dシューティングゲームスクリプト
// パフォーマンス向上とコード最適化

// ゲーム状態管理
const GameState = {
    INIT: 'init',
    PLAYING: 'playing',
    PAUSED: 'paused',
    GAME_OVER: 'gameOver',
    WIN: 'win'
};

// ゲーム設定
const GameConfig = {
    PLAYER_SPEED: 0.15,
    SHOOT_COOLDOWN: 0.5,
    ENEMY_SPEED: 0.05,
    ENEMY_FIRE_RATE: 0.01,
    FIELD_SIZE: 50,
    MAX_ENEMIES: 40,
    MAX_BULLETS: 100,
    MAX_PARTICLES: 50
};

// ゲーム変数
let gameState = GameState.INIT;
let scene, camera, renderer;
let player, playerModel;
let enemies = [], bullets = [], particles = [];
let score = 0;
let isGameActive = false;
let clock;

// プレイヤー制御
let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false;
let canShoot = true;
let lastShootTime = 0;

// パワーアップ状態
let playerPowerups = {
    rapidFire: { active: false, duration: 5, startTime: 0 },
    tripleShot: { active: false, duration: 10, startTime: 0 },
    shield: { active: false, duration: 15, startTime: 0 }
};

// 共有ジオメトリ（パフォーマンス向上）
const sharedGeometries = {
    bullet: new THREE.SphereGeometry(0.2, 6, 6),
    enemy: new THREE.ConeGeometry(0.5, 1, 8),
    powerup: new THREE.OctahedronGeometry(0.5, 0)
};

// 共有マテリアル（パフォーマンス向上）
const sharedMaterials = {
    bullet: new THREE.MeshStandardMaterial({
        color: 0x00ffff,
        emissive: 0x00aaaa,
        metalness: 1,
        roughness: 0
    }),
    enemy: new THREE.MeshStandardMaterial({
        color: 0xff0000,
        emissive: 0x330000,
        metalness: 0.8,
        roughness: 0.2
    })
};

// ゲーム初期化
function initGame() {
    console.log('Game initialization started');
    
    if (gameState !== GameState.INIT) return;
    
    gameState = GameState.PLAYING;
    isGameActive = true;
    score = 0;
    
    // UI更新
    updateUI();
    
    // Three.js初期化
    initThreeJS();
    
    // ゲーム要素作成
    createGameElements();
    
    // イベントリスナー設定
    setupEventListeners();
    
    // アニメーションループ開始
    animate();
}

// Three.js初期化
function initThreeJS() {
    // シーン作成
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.01);
    
    // カメラ設定
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);
    
    // レンダラー設定
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // パフォーマンス向上
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    document.getElementById('game-container').appendChild(renderer.domElement);
    
    // ライト設定
    setupLighting();
    
    // 地面作成
    createGround();
    
    // 星空作成
    createStars();
    
    // クロック初期化
    clock = new THREE.Clock();
}

// ライト設定
function setupLighting() {
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);
    
    // 動的ライト（パフォーマンス向上のため数を削減）
    const pointLight = new THREE.PointLight(0x4285f4, 1, 30);
    pointLight.position.set(0, 15, 0);
    scene.add(pointLight);
}

// 地面作成
function createGround() {
    const groundGeometry = new THREE.PlaneGeometry(GameConfig.FIELD_SIZE, GameConfig.FIELD_SIZE);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x222222,
        metalness: 0.8,
        roughness: 0.2
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);
    
    // グリッド（パフォーマンス向上のため簡素化）
    const gridHelper = new THREE.GridHelper(GameConfig.FIELD_SIZE, 20, 0x444444, 0x222222);
    scene.add(gridHelper);
}

// 星空作成（パフォーマンス向上のため数を削減）
function createStars() {
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.1,
        transparent: true
    });
    
    const starsVertices = [];
    for (let i = 0; i < 2000; i++) { // 10000から2000に削減
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starsVertices.push(x, y, z);
    }
    
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
}

// ゲーム要素作成
function createGameElements() {
    // プレイヤー作成
    createPlayer();
    
    // 敵作成
    createEnemies();
    
    // パーティクルシステム
    createParticleSystem();
}

// プレイヤー作成
function createPlayer() {
    // 簡易プレイヤー（3Dモデル読み込みを省略してパフォーマンス向上）
    const geometry = new THREE.ConeGeometry(0.5, 1, 8);
    const material = new THREE.MeshStandardMaterial({
        color: 0x00ffff,
        emissive: 0x00aaaa,
        metalness: 0.8,
        roughness: 0.2
    });
    
    player = new THREE.Mesh(geometry, material);
    player.position.set(0, 0, 10);
    player.castShadow = true;
    player.receiveShadow = true;
    scene.add(player);
}

// 敵作成（パフォーマンス向上のため数を削減）
function createEnemies() {
    const rows = 4; // 5から4に削減
    const cols = 6; // 8から6に削減
    const spacing = 3;
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const enemy = new THREE.Mesh(sharedGeometries.enemy, sharedMaterials.enemy);
            
            enemy.position.x = (col - (cols - 1) / 2) * spacing;
            enemy.position.y = 1;
            enemy.position.z = -10 - row * spacing;
            enemy.rotation.x = Math.PI;
            
            enemy.castShadow = true;
            enemy.receiveShadow = true;
            
            // 敵の移動パターン
            enemy.direction = 1;
            enemy.speed = GameConfig.ENEMY_SPEED;
            enemy.amplitude = 0.5;
            enemy.phaseOffset = Math.random() * Math.PI * 2;
            
            scene.add(enemy);
            enemies.push(enemy);
        }
    }
}

// パーティクルシステム（パフォーマンス向上のため数を削減）
function createParticleSystem() {
    for (let i = 0; i < GameConfig.MAX_PARTICLES; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 5px;
            height: 5px;
            background-color: #4285f4;
            border-radius: 50%;
            pointer-events: none;
            animation: particle-glow 2s infinite;
        `;
        
        document.body.appendChild(particle);
        
        const position = {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
        };
        
        const velocity = {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
        };
        
        particle.style.left = position.x + 'px';
        particle.style.top = position.y + 'px';
        
        particles.push({
            element: particle,
            position: position,
            velocity: velocity
        });
    }
}

// 弾作成（最適化版）
function createBullet(isPlayerBullet, offsetX = 0, offsetZ = 0) {
    if (bullets.length >= GameConfig.MAX_BULLETS) return; // 弾数制限
    
    const bullet = new THREE.Mesh(sharedGeometries.bullet, sharedMaterials.bullet);
    
    if (isPlayerBullet) {
        bullet.position.copy(player.position);
        bullet.position.y += 0.5;
        bullet.position.x += offsetX;
        bullet.position.z += offsetZ;
        bullet.velocity = new THREE.Vector3(0, 0, -1);
        bullet.isPlayerBullet = true;
    } else {
        // 敵の弾（簡素化）
        const enemy = enemies[Math.floor(Math.random() * enemies.length)];
        bullet.position.copy(enemy.position);
        bullet.velocity = new THREE.Vector3(0, 0, 1);
        bullet.isPlayerBullet = false;
    }
    
    scene.add(bullet);
    bullets.push(bullet);
    
    return bullet;
}

// 射撃処理
function shoot() {
    if (!canShoot || !isGameActive) return;
    
    if (playerPowerups.tripleShot.active) {
        createBullet(true, -0.5, 0);
        createBullet(true);
        createBullet(true, 0.5, 0);
    } else {
        createBullet(true);
    }
    
    canShoot = false;
    lastShootTime = clock.getElapsedTime();
}

// 衝突判定（最適化版）
function checkCollisions() {
    // プレイヤーの弾と敵の衝突
    bullets.forEach((bullet, bulletIndex) => {
        if (!bullet.isPlayerBullet) return;
        
        enemies.forEach((enemy, enemyIndex) => {
            const distance = bullet.position.distanceTo(enemy.position);
            if (distance < 1) {
                // 衝突処理
                scene.remove(bullet);
                bullets.splice(bulletIndex, 1);
                
                scene.remove(enemy);
                enemies.splice(enemyIndex, 1);
                
                score += 100;
                updateUI();
                
                // 全ての敵を倒したらゲームクリア
                if (enemies.length === 0) {
                    gameWin();
                }
                return;
            }
        });
    });
    
    // 敵の弾とプレイヤーの衝突
    bullets.forEach((bullet, bulletIndex) => {
        if (bullet.isPlayerBullet) return;
        
        const distance = bullet.position.distanceTo(player.position);
        if (distance < 1) {
            if (playerPowerups.shield.active) {
                // シールドで防御
                scene.remove(bullet);
                bullets.splice(bulletIndex, 1);
                return;
            }
            
            // ゲームオーバー
            gameOver();
            return;
        }
    });
}

// パワーアップ効果の更新
function updatePowerupEffects(currentTime) {
    Object.keys(playerPowerups).forEach(key => {
        const powerup = playerPowerups[key];
        if (powerup.active && currentTime - powerup.startTime > powerup.duration) {
            powerup.active = false;
            
            if (key === 'rapidFire') {
                // 射撃速度を元に戻す
            }
        }
    });
}

// パワーアップUI更新
function updatePowerupUI() {
    const powerupUI = document.getElementById('powerupUI');
    if (!powerupUI) return;
    
    powerupUI.innerHTML = '';
    
    if (playerPowerups.rapidFire.active) {
        const icon = document.createElement('div');
        icon.className = 'powerup-icon';
        icon.innerHTML = '🔥';
        icon.title = '連射モード';
        powerupUI.appendChild(icon);
    }
    
    if (playerPowerups.tripleShot.active) {
        const icon = document.createElement('div');
        icon.className = 'powerup-icon';
        icon.innerHTML = '🔱';
        icon.title = '3連射モード';
        powerupUI.appendChild(icon);
    }
    
    if (playerPowerups.shield.active) {
        const icon = document.createElement('div');
        icon.className = 'powerup-icon';
        icon.innerHTML = '🛡️';
        icon.title = 'シールド';
        powerupUI.appendChild(icon);
    }
}

// ゲームオーバー処理
function gameOver() {
    gameState = GameState.GAME_OVER;
    isGameActive = false;
    
    document.getElementById('finalScore').textContent = score;
    document.getElementById('gameOver').style.display = 'block';
}

// ゲームクリア処理
function gameWin() {
    gameState = GameState.WIN;
    isGameActive = false;
    
    document.getElementById('gameOver').querySelector('div:first-child').textContent = 'ゲームクリア！';
    document.getElementById('finalScore').textContent = score;
    document.getElementById('gameOver').style.display = 'block';
}

// UI更新
function updateUI() {
    const scoreDisplay = document.getElementById('scoreDisplay');
    if (scoreDisplay) {
        scoreDisplay.textContent = score;
    }
}

// イベントリスナー設定
function setupEventListeners() {
    // キーボードイベント
    document.addEventListener('keydown', function(event) {
        switch(event.code) {
            case 'KeyW': moveForward = true; break;
            case 'KeyS': moveBackward = true; break;
            case 'KeyA': moveLeft = true; break;
            case 'KeyD': moveRight = true; break;
            case 'Space': shoot(); break;
        }
    });
    
    document.addEventListener('keyup', function(event) {
        switch(event.code) {
            case 'KeyW': moveForward = false; break;
            case 'KeyS': moveBackward = false; break;
            case 'KeyA': moveLeft = false; break;
            case 'KeyD': moveRight = false; break;
        }
    });
    
    // ウィンドウリサイズ対応
    window.addEventListener('resize', onWindowResize);
}

// ウィンドウリサイズ対応
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// ゲームリセット
function resetGame() {
    // 既存のオブジェクトをクリア
    while(scene.children.length > 0) { 
        scene.remove(scene.children[0]); 
    }
    
    // 配列をクリア
    enemies = [];
    bullets = [];
    
    // パーティクルを削除
    particles.forEach(particle => {
        if (particle.element.parentNode) {
            document.body.removeChild(particle.element);
        }
    });
    particles = [];
    
    // ゲーム状態をリセット
    gameState = GameState.INIT;
    score = 0;
    isGameActive = false;
    
    // UIをリセット
    document.getElementById('gameTitle').style.display = 'block';
    document.getElementById('startButton').style.display = 'block';
    document.getElementById('gameInstructions').style.display = 'none';
    document.getElementById('gameUI').style.display = 'none';
    document.getElementById('gameOver').style.display = 'none';
    
    // ゲームを再初期化
    initGame();
}

// アニメーションループ
function animate() {
    requestAnimationFrame(animate);
    
    if (!isGameActive) return;
    
    const delta = clock.getDelta();
    const time = clock.getElapsedTime();
    
    // プレイヤーの移動
    if (player) {
        if (moveForward) player.position.z -= GameConfig.PLAYER_SPEED;
        if (moveBackward) player.position.z += GameConfig.PLAYER_SPEED;
        if (moveLeft) player.position.x -= GameConfig.PLAYER_SPEED;
        if (moveRight) player.position.x += GameConfig.PLAYER_SPEED;
        
        // 移動範囲の制限
        player.position.x = Math.max(-20, Math.min(20, player.position.x));
        player.position.z = Math.max(-20, Math.min(20, player.position.z));
        
        // カメラをプレイヤーに追従
        camera.position.x = player.position.x;
        camera.position.y = player.position.y + 2;
        camera.position.z = player.position.z + 2;
        camera.lookAt(player.position.x, player.position.y, player.position.z - 5);
    }
    
    // 射撃クールダウン
    if (!canShoot && time - lastShootTime > GameConfig.SHOOT_COOLDOWN) {
        canShoot = true;
    }
    
    // 敵のランダム射撃（頻度を下げてパフォーマンス向上）
    if (enemies.length > 0 && Math.random() < GameConfig.ENEMY_FIRE_RATE * 0.5) {
        createBullet(false);
    }
    
    // 敵の移動
    let needsDirectionChange = false;
    enemies.forEach(enemy => {
        enemy.position.x += enemy.speed * enemy.direction;
        enemy.position.y = 1 + Math.sin(time + enemy.phaseOffset) * enemy.amplitude;
        
        if (enemy.position.x > 20 || enemy.position.x < -20) {
            needsDirectionChange = true;
        }
        
        enemy.rotation.z += 0.01;
    });
    
    // 敵の方向転換
    if (needsDirectionChange) {
        enemies.forEach(enemy => {
            enemy.direction *= -1;
            enemy.position.z += 0.5;
            
            if (enemy.position.z > player.position.z - 2) {
                gameOver();
            }
        });
    }
    
    // 弾の移動
    bullets.forEach((bullet, index) => {
        bullet.position.add(bullet.velocity);
        
        if (bullet.position.z < -50 || bullet.position.z > 50) {
            scene.remove(bullet);
            bullets.splice(index, 1);
        }
    });
    
    // パワーアップ効果の更新
    updatePowerupEffects(time);
    
    // パワーアップUIの更新
    updatePowerupUI();
    
    // 衝突判定
    checkCollisions();
    
    // レンダリング
    renderer.render(scene, camera);
}

// グローバル関数として公開
window.initGame = initGame;
window.resetGame = resetGame;
