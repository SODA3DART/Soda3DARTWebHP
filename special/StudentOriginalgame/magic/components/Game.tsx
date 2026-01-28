
import React, { useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import * as THREE from 'three';
import { GRAVITY, PLAYER_SPEED, PLAYER_FRICTION, PLAYER_ATTACK_COOLDOWN, PROJECTILE_SPEED, PROJECTILE_MAX_DISTANCE, PLAYER_JUMP_FORCE_PRIMARY, PLAYER_JUMP_FORCE_SECONDARY } from '../game/constants';

interface GameProps {
  onWin: () => void;
  onLoseLife: () => void;
  onGainLife: () => void;
  isPaused: boolean;
  input: {
    get: (code: string) => boolean;
    setKey: (code: string, isPressed: boolean) => void;
  };
}

interface Enemy {
    mesh: THREE.Mesh;
    direction: number;
    speed: number;
    patrolRange: [number, number];
    isDefeated: boolean;
}

const Game: React.FC<GameProps> = ({ onWin, onLoseLife, onGainLife, isPaused, input }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const gameStateRef = useRef({
      player: null as THREE.Mesh | null,
      platforms: [] as THREE.Mesh[],
      enemies: [] as Enemy[],
      goal: null as THREE.Mesh | null,
      healthItems: [] as THREE.Mesh[],
      projectiles: [] as THREE.Mesh[],
      playerVelocity: new THREE.Vector3(0, 0, 0),
      isPlayerGrounded: false,
      hasDoubleJumped: false,
      jumpKeyWasDown: false,
      isGameWon: false,
      lastLifeLossTime: 0,
      camera: null as THREE.OrthographicCamera | null,
      scene: null as THREE.Scene | null,
      renderer: null as THREE.WebGLRenderer | null,
      animationFrameId: 0,
      lastAttackTime: 0,
      playerDirection: 1, // 1 for right, -1 for left
      cameraTargetX: 0,
  });

  const handlePlayerRespawn = useCallback(() => {
    const now = performance.now();
    if (now - gameStateRef.current.lastLifeLossTime < 1000) {
      return;
    }
    gameStateRef.current.lastLifeLossTime = now;
    onLoseLife();

    const { player, playerVelocity } = gameStateRef.current;
    if (player) {
      player.position.set(0, 2, 0);
      playerVelocity.set(0, 0, 0);
    }
  }, [onLoseLife]);

  const createLevel = useCallback((scene: THREE.Scene) => {
    const platformMaterial = new THREE.MeshStandardMaterial({ color: 0x8BC34A, roughness: 0.8 });
    
    const platformPositions = [
        [0, -2, 0], [7, 0, 0], [14, 2, 0], [25, 0, 0], [38, 2, 0],
        [46, 0, 0], [58, 4, 0], [70, 2, 0], [83, 0, 0], [90, -2, 0],
        [103, 0, 0], [110, 2, 0], [123, 4, 0], [135, 2, 0], [145, 0, 0],
        [158, 2, 0], [170, 4, 0],
    ];

    const enemyData: { position: THREE.Vector3; patrolRange: [number, number] }[] = [
        { position: new THREE.Vector3(38, 3.5, 0), patrolRange: [36, 40] },
        { position: new THREE.Vector3(58, 5.5, 0), patrolRange: [56, 60] },
        { position: new THREE.Vector3(83, 1.5, 0), patrolRange: [81, 85] },
        { position: new THREE.Vector3(123, 5.5, 0), patrolRange: [121, 125] },
        { position: new THREE.Vector3(158, 3.5, 0), patrolRange: [156, 160] },
        { position: new THREE.Vector3(170, 5.5, 0), patrolRange: [168, 172] },
    ];
    const enemyPlatformXCoords = new Set(enemyData.map(data => data.position.x));
    
    const platforms: THREE.Mesh[] = [];
    const DEFAULT_PLATFORM_WIDTH = 6;
    const ENEMY_PLATFORM_WIDTH = 10;

    platformPositions.forEach((pos, index) => {
        let platformWidth;
        if (index === 0) { platformWidth = 5; } 
        else if (index === 9) { platformWidth = 4; } 
        else if (enemyPlatformXCoords.has(pos[0])) { platformWidth = ENEMY_PLATFORM_WIDTH; } 
        else { platformWidth = DEFAULT_PLATFORM_WIDTH; }

        const platformGeometry = new THREE.BoxGeometry(platformWidth, 1, 5);
        const platform = new THREE.Mesh(platformGeometry, platformMaterial);
        platform.position.set(pos[0], pos[1], pos[2]);
        platform.receiveShadow = true;
        scene.add(platform);
        platforms.push(platform);
    });
    
    gameStateRef.current.platforms = platforms;

    const enemyGeometry = new THREE.BoxGeometry(1, 1, 1);
    const enemyMaterial = new THREE.MeshStandardMaterial({ color: 0xcc0000, emissive: 0x330000, roughness: 0.5 });
    
    gameStateRef.current.enemies = enemyData.map(data => {
        const enemyMesh = new THREE.Mesh(enemyGeometry.clone(), enemyMaterial.clone());
        enemyMesh.position.copy(data.position);
        enemyMesh.castShadow = true;
        scene.add(enemyMesh);
        return {
            mesh: enemyMesh,
            direction: 1,
            speed: 0.015,
            patrolRange: data.patrolRange,
            isDefeated: false,
        };
    });

    const goalGeometry = new THREE.CylinderGeometry(0.7, 0.7, 2.5, 16);
    const goalMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00, emissive: 0xffff00, emissiveIntensity: 0.7, transparent: true, opacity: 0.6, roughness: 0.2 });
    const goal = new THREE.Mesh(goalGeometry, goalMaterial);
    goal.position.set(175, 5.8, 0);
    goal.castShadow = true;
    scene.add(goal);
    gameStateRef.current.goal = goal;

    const heartShape = new THREE.Shape();
    heartShape.moveTo(0.25, 0.25);
    heartShape.bezierCurveTo(0.25, 0.25, 0.2, 0, 0, 0);
    heartShape.bezierCurveTo(-0.3, 0, -0.3, 0.35, -0.3, 0.35);
    heartShape.bezierCurveTo(-0.3, 0.55, -0.1, 0.77, 0.25, 0.95);
    heartShape.bezierCurveTo(0.6, 0.77, 0.8, 0.55, 0.8, 0.35);
    heartShape.bezierCurveTo(0.8, 0.35, 0.8, 0, 0.5, 0);
    heartShape.bezierCurveTo(0.35, 0, 0.25, 0.25, 0.25, 0.25);

    const healthItemGeometry = new THREE.ExtrudeGeometry(heartShape, { depth: 0.1, bevelEnabled: false });
    healthItemGeometry.center();
    healthItemGeometry.scale(0.7, 0.7, 0.7);
    const healthItemMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0xcc3333, emissiveIntensity: 0.8, roughness: 0.3 });
    const healthItemPositions = [new THREE.Vector3(25, 1.0, 0), new THREE.Vector3(110, 3.0, 0)];

    healthItemPositions.forEach(pos => {
        const healthItem = new THREE.Mesh(healthItemGeometry.clone(), healthItemMaterial.clone());
        healthItem.position.copy(pos);
        healthItem.castShadow = true;
        scene.add(healthItem);
        healthItem.userData.originalY = healthItem.position.y;
        gameStateRef.current.healthItems.push(healthItem);
    });

  }, []);

  const updateEnemies = useCallback(() => {
    gameStateRef.current.enemies = gameStateRef.current.enemies.filter(enemy => {
        if (enemy.isDefeated) {
            enemy.mesh.scale.multiplyScalar(0.95);
            const material = enemy.mesh.material as THREE.MeshStandardMaterial;
            if (material.opacity > 0) { material.opacity -= 0.05; }
            if (enemy.mesh.scale.x < 0.05) {
                gameStateRef.current.scene?.remove(enemy.mesh);
                enemy.mesh.geometry.dispose();
                (enemy.mesh.material as THREE.Material).dispose();
                return false;
            }
            return true;
        }
        enemy.mesh.position.x += enemy.speed * enemy.direction;
        if (enemy.mesh.position.x > enemy.patrolRange[1] || enemy.mesh.position.x < enemy.patrolRange[0]) {
            enemy.direction *= -1;
        }
        return true;
    });
  }, []);

  const updateProjectiles = useCallback(() => {
    const { projectiles, enemies, scene } = gameStateRef.current;
    gameStateRef.current.projectiles = projectiles.filter(projectile => {
        projectile.position.x += PROJECTILE_SPEED * projectile.userData.direction;
        const projectileBox = new THREE.Box3().setFromObject(projectile);
        for (const enemy of enemies) {
            if (!enemy.isDefeated) {
                const enemyBox = new THREE.Box3().setFromObject(enemy.mesh);
                if (projectileBox.intersectsBox(enemyBox)) {
                    enemy.isDefeated = true;
                    (enemy.mesh.material as THREE.MeshStandardMaterial).transparent = true;
                    scene?.remove(projectile);
                    projectile.geometry.dispose();
                    (projectile.material as THREE.Material).dispose();
                    return false;
                }
            }
        }
        if (Math.abs(projectile.position.x - projectile.userData.startX) > PROJECTILE_MAX_DISTANCE) {
            scene?.remove(projectile);
            projectile.geometry.dispose();
            (projectile.material as THREE.Material).dispose();
            return false;
        }
        return true;
    });
  }, []);

  const updatePlayer = useCallback(() => {
    const { player, playerVelocity, isPlayerGrounded, platforms, goal, isGameWon, enemies, scene } = gameStateRef.current;
    if (!player || isGameWon) return;

    if (input.get('ArrowLeft') || input.get('KeyA')) {
      playerVelocity.x = -PLAYER_SPEED;
    } else if (input.get('ArrowRight') || input.get('KeyD')) {
      playerVelocity.x = PLAYER_SPEED;
    }
    
    playerVelocity.x *= PLAYER_FRICTION;

    if (Math.abs(playerVelocity.x) > 0.01) {
        gameStateRef.current.playerDirection = Math.sign(playerVelocity.x);
    }

    const isJumpKeyDown = input.get('Space') || input.get('ArrowUp') || input.get('KeyW');
    const jumpPressed = isJumpKeyDown && !gameStateRef.current.jumpKeyWasDown;

    if (jumpPressed) {
      if (isPlayerGrounded) {
        playerVelocity.y = PLAYER_JUMP_FORCE_PRIMARY;
        gameStateRef.current.isPlayerGrounded = false;
        gameStateRef.current.hasDoubleJumped = false;
      } else if (!gameStateRef.current.hasDoubleJumped) {
        playerVelocity.y = PLAYER_JUMP_FORCE_SECONDARY;
        gameStateRef.current.hasDoubleJumped = true;
      }
    }
    gameStateRef.current.jumpKeyWasDown = isJumpKeyDown;
    
    playerVelocity.y -= GRAVITY;
    
    const now = performance.now();
    if ((input.get('KeyF')) && now - gameStateRef.current.lastAttackTime > PLAYER_ATTACK_COOLDOWN) {
        gameStateRef.current.lastAttackTime = now;
        const { player, scene, playerDirection } = gameStateRef.current;
        if (player && scene) {
            const projectileGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 8);
            const projectileMaterial = new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x00ffff, emissiveIntensity: 1 });
            const projectile = new THREE.Mesh(projectileGeometry, projectileMaterial);
            projectile.rotation.z = Math.PI / 2;
            const playerBox = new THREE.Box3().setFromObject(player);
            const playerSize = new THREE.Vector3();
            playerBox.getSize(playerSize);
            const startPosition = player.position.clone().add(new THREE.Vector3(playerDirection * (playerSize.x / 2 + 0.2), 0, 0));
            projectile.position.copy(startPosition);
            projectile.userData = { direction: playerDirection, startX: startPosition.x };
            scene.add(projectile);
            gameStateRef.current.projectiles.push(projectile);
        }
    }

    player.position.x += playerVelocity.x;
    player.position.y += playerVelocity.y;

    gameStateRef.current.isPlayerGrounded = false;
    const playerBox = new THREE.Box3().setFromObject(player);

    platforms.forEach(platform => {
        const platformBox = new THREE.Box3().setFromObject(platform);
        if (playerBox.intersectsBox(platformBox)) {
            const penetration = new THREE.Vector3();
            playerBox.getCenter(penetration).sub(platformBox.getCenter(new THREE.Vector3()));
            const playerSize = new THREE.Vector3();
            playerBox.getSize(playerSize);
            const platformSize = new THREE.Vector3();
            platformBox.getSize(platformSize);
            const overlapX = (playerSize.x + platformSize.x) / 2 - Math.abs(penetration.x);
            const overlapY = (playerSize.y + platformSize.y) / 2 - Math.abs(penetration.y);

            if (overlapY < overlapX) {
                 if (player.position.y > platform.position.y && playerVelocity.y <= 0) {
                     player.position.y = platform.position.y + platformSize.y / 2 + playerSize.y / 2 - 0.001;
                     playerVelocity.y = 0;
                     gameStateRef.current.isPlayerGrounded = true;
                     gameStateRef.current.hasDoubleJumped = false;
                 } else if (player.position.y < platform.position.y) {
                     player.position.y = platform.position.y - platformSize.y / 2 - playerSize.y / 2 + 0.001;
                     playerVelocity.y *= -0.5;
                 }
            } else {
                 if(penetration.x > 0) { player.position.x += overlapX; } 
                 else { player.position.x -= overlapX; }
                 playerVelocity.x = 0;
            }
        }
    });

    gameStateRef.current.healthItems = gameStateRef.current.healthItems.filter(item => {
        if(playerBox.intersectsBox(new THREE.Box3().setFromObject(item))) {
            onGainLife();
            scene?.remove(item);
            item.geometry.dispose();
            (item.material as THREE.Material).dispose();
            return false;
        }
        return true;
    });
    
    if (player.position.y < -20) { handlePlayerRespawn(); return; }
    for (const enemy of enemies) {
        if (!enemy.isDefeated && playerBox.intersectsBox(new THREE.Box3().setFromObject(enemy.mesh))) {
            handlePlayerRespawn();
            return;
        }
    }
    if (goal && playerBox.intersectsBox(new THREE.Box3().setFromObject(goal))) {
        gameStateRef.current.isGameWon = true;
        onWin();
    }
  }, [input, onWin, onGainLife, handlePlayerRespawn]);
  
  const updateCamera = useCallback(() => {
    const { camera, player, playerDirection } = gameStateRef.current;
    if (camera && player) {
      const lookAheadOffset = 3;
      const desiredTargetX = player.position.x + (playerDirection * lookAheadOffset);
      const targetSmoothingFactor = 0.04;
      gameStateRef.current.cameraTargetX += (desiredTargetX - gameStateRef.current.cameraTargetX) * targetSmoothingFactor;
      const cameraMoveSmoothingFactor = 0.02;
      camera.position.x += (gameStateRef.current.cameraTargetX - camera.position.x) * cameraMoveSmoothingFactor;
      camera.lookAt(camera.position.x, camera.position.y, 0);
    }
  }, []);

  const animate = useCallback(() => {
    const { renderer, scene, camera, goal, isGameWon, healthItems } = gameStateRef.current;
    if (!renderer || !scene || !camera) {
      gameStateRef.current.animationFrameId = requestAnimationFrame(animate);
      return;
    }
    if (!isPausedRef.current) {
        if (!isGameWon) { updatePlayer(); updateEnemies(); updateProjectiles(); }
        updateCamera();
        if (goal) goal.rotation.y += 0.02;
        const time = performance.now() * 0.002;
        healthItems.forEach(item => {
            item.rotation.y += 0.03;
            item.position.y = item.userData.originalY + Math.sin(time + item.position.x) * 0.15;
        });
    }
    renderer.render(scene, camera);
    gameStateRef.current.animationFrameId = requestAnimationFrame(animate);
  }, [updatePlayer, updateCamera, updateEnemies, updateProjectiles]);

  useLayoutEffect(() => {
    if (!mountRef.current) return;
    const currentMount = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);
    scene.fog = new THREE.Fog(0x87ceeb, 10, 50);
    gameStateRef.current.scene = scene;

    const gridSize = 200, gridDivisions = 200;
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions);
    gridHelper.rotation.x = Math.PI / 2;
    gridHelper.position.set(80, 0, -10);
    (gridHelper.material as THREE.Material).opacity = 0.2;
    (gridHelper.material as THREE.Material).transparent = true;
    scene.add(gridHelper);

    const aspect = currentMount.clientWidth / currentMount.clientHeight;
    const frustumSize = 25;
    const camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 0.1, 1000);
    camera.position.set(0, 2, 20);
    gameStateRef.current.camera = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);
    gameStateRef.current.renderer = renderer;

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 20, 15);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);
    
    const player = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 0xff4444, roughness: 0.6 }));
    player.position.set(0, 2, 0);
    player.castShadow = true;
    scene.add(player);
    gameStateRef.current.player = player;
    gameStateRef.current.cameraTargetX = player.position.x;
    gameStateRef.current.lastLifeLossTime = -1000;
    gameStateRef.current.lastAttackTime = -PLAYER_ATTACK_COOLDOWN;

    createLevel(scene);

    const handleResize = () => {
        const { camera, renderer } = gameStateRef.current;
        if (camera && renderer && currentMount) {
            const aspect = currentMount.clientWidth / currentMount.clientHeight;
            camera.left = frustumSize * aspect / -2; camera.right = frustumSize * aspect / 2;
            camera.top = frustumSize / 2; camera.bottom = frustumSize / -2;
            camera.updateProjectionMatrix();
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        }
    };
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      cancelAnimationFrame(gameStateRef.current.animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (currentMount && gameStateRef.current.renderer) { currentMount.removeChild(gameStateRef.current.renderer.domElement); }
      scene.traverse((object: any) => {
        if (object.isMesh) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) { (Array.isArray(object.material) ? object.material : [object.material]).forEach((m: any) => m.dispose()); }
        }
      });
      if (gameStateRef.current.renderer) { gameStateRef.current.renderer.dispose(); }
    };
  }, [animate, createLevel]);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default Game;
