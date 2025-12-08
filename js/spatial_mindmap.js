import * as THREE from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';
import { XRControllerModelFactory } from 'three/addons/webxr/XRControllerModelFactory.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// --- Global Variables ---
let camera, scene, renderer;
let controls;
let controller1, controller2;
let controllerGrip1, controllerGrip2;
let raycaster;

const intersected = [];
const tempMatrix = new THREE.Matrix4();

let nodes = []; // Array of node objects: { id, parentId, position, data, mesh, line }
let nextId = 1;
let selectedNode = null;

const group = new THREE.Group(); // Holds all mind map elements

// --- Config ---
const NODE_WIDTH = 1.5;
const NODE_HEIGHT = 0.8;
const FONT_SIZE = 40;
const LEVEL_HEIGHT_3D = 1.0; // Vertical distance between levels in 3D
const EXPANSION_RADIUS_2D = 2.5;

// --- Initialization ---

init();
animate();

function init() {
    // 1. Scene Setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);

    // Grid helper for floor reference
    const gridHelper = new THREE.GridHelper(20, 20, 0x333333, 0x222222);
    gridHelper.position.y = -2;
    scene.add(gridHelper);

    scene.add(group);

    // 2. Camera
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 50);
    camera.position.set(0, 1.6, 5); // Stand-height

    // 3. Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true; // IMPORTANT for WebXR
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // 4. Lights
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    // 5. Controls (Desktop)
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1.6, 0);
    controls.update();

    // 6. WebXR Setup
    document.body.appendChild(VRButton.createButton(renderer));

    // Controllers
    controller1 = renderer.xr.getController(0);
    controller1.addEventListener('selectstart', onSelectStart);
    controller1.addEventListener('selectend', onSelectEnd);
    scene.add(controller1);

    controller2 = renderer.xr.getController(1);
    controller2.addEventListener('selectstart', onSelectStart);
    controller2.addEventListener('selectend', onSelectEnd);
    scene.add(controller2);

    const controllerModelFactory = new XRControllerModelFactory();

    controllerGrip1 = renderer.xr.getControllerGrip(0);
    controllerGrip1.add(controllerModelFactory.createControllerModel(controllerGrip1));
    scene.add(controllerGrip1);

    controllerGrip2 = renderer.xr.getControllerGrip(1);
    controllerGrip2.add(controllerModelFactory.createControllerModel(controllerGrip2));
    scene.add(controllerGrip2);

    // Raycaster for interaction
    raycaster = new THREE.Raycaster();

    // Event Listeners
    window.addEventListener('resize', onWindowResize);
    document.getElementById('add-node-btn').addEventListener('click', () => createNode(selectedNode));
    document.getElementById('delete-node-btn').addEventListener('click', deleteSelectedNode);
    document.getElementById('export-btn').addEventListener('click', exportCSV);
    document.getElementById('import-btn').addEventListener('click', () => document.getElementById('file-input').click());
    document.getElementById('file-input').addEventListener('change', importCSV);
    document.getElementById('layout-2d').addEventListener('click', () => updateLayout('2D'));
    document.getElementById('layout-3d').addEventListener('click', () => updateLayout('3D'));

    // Mouse Interaction
    renderer.domElement.addEventListener('click', onMouseClick);

    // Initial Node (Root)
    createRootNode();
}

// --- Node Management ---

function createRootNode() {
    const root = createVisualNode(0, "Root Theme", new THREE.Vector3(0, 1.6, 0));
    nodes.push({
        id: "root",
        parentId: null,
        data: "Root Theme",
        mesh: root,
        line: null,
        children: []
    });
}

function createNode(parentNode) {
    if (!parentNode) {
        // If nothing selected, maybe warn? For now, do nothing or attach to root?
        // Let's attach to root if nothing selected, or if root helps.
        // Actually, better to check if nodes exist.
        if (nodes.length === 0) { createRootNode(); return; }
        if (!selectedNode) parentNode = nodes[0]; // Default to root
    }

    const id = `node_${nextId++}`;
    // Position randomly near parent for now, layout will fix it
    const pos = parentNode.mesh.position.clone().add(new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, 0));

    const mesh = createVisualNode(id, "New Node", pos);

    // Create connection line
    const line = createConnection(parentNode.mesh.position, mesh.position);

    const newNode = {
        id: id,
        parentId: parentNode.id,
        data: "New Node",
        mesh: mesh,
        line: line,
        children: []
    };

    parentNode.children.push(newNode);
    nodes.push(newNode);

    selectNode(newNode);
    updateLayout('2D'); // Auto refresh layout
}

function createVisualNode(id, text, position) {
    // Canvas Texture for text
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 256;

    // Background (Glass effect simulation in texture)
    ctx.fillStyle = 'rgba(0, 229, 255, 0.1)';
    ctx.strokeStyle = 'rgba(0, 229, 255, 0.5)';
    ctx.lineWidth = 10;

    // Rounded Rect
    roundRect(ctx, 10, 10, 492, 236, 40, true, true);

    // Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 60px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 256, 128);

    const texture = new THREE.CanvasTexture(canvas);

    const geometry = new THREE.PlaneGeometry(NODE_WIDTH, NODE_HEIGHT);
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
        depthTest: false // Always visible UI
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(position);
    mesh.userData = { id: id, isNode: true };

    group.add(mesh);
    return mesh;
}

function roundRect(ctx, x, y, w, h, r, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
}

function createConnection(startPos, endPos) {
    const geometry = new THREE.BufferGeometry().setFromPoints([startPos, endPos]);
    const material = new THREE.LineBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.5 });
    const line = new THREE.Line(geometry, material);
    group.add(line);
    return line;
}

function updateConnection(node) {
    if (!node.line || !node.parentId) return;
    const parent = nodes.find(n => n.id === node.parentId);
    if (parent) {
        const positions = node.line.geometry.attributes.position.array;
        positions[0] = parent.mesh.position.x;
        positions[1] = parent.mesh.position.y;
        positions[2] = parent.mesh.position.z;
        positions[3] = node.mesh.position.x;
        positions[4] = node.mesh.position.y;
        positions[5] = node.mesh.position.z;
        node.line.geometry.attributes.position.needsUpdate = true;
    }
}

function deleteSelectedNode() {
    if (!selectedNode || selectedNode.parentId === null) return; // Can't delete root

    // Remove mesh and line
    group.remove(selectedNode.mesh);
    if (selectedNode.line) group.remove(selectedNode.line);

    // Remove from array (simplified, doesn't handle children of deleted node adopting orphans yet)
    nodes = nodes.filter(n => n.id !== selectedNode.id);

    // Clean up connections for children? (Ideally delete children too recursively)
    // For MVP, let's just delete the node and leave ghost children or delete recursively.
    // Recursive delete:
    const deleteRecursive = (node) => {
        node.children.forEach(child => deleteRecursive(child));
        group.remove(node.mesh);
        if (node.line) group.remove(node.line);
        nodes = nodes.filter(n => n.id !== node.id);
    };
    // Re-find in current array to be safe
    const realNode = nodes.find(n => n.id === selectedNode.id);
    if (realNode) deleteRecursive(realNode);

    selectedNode = null;
    document.getElementById('node-editor').classList.remove('active');
}

// --- Interaction ---

function selectNode(node) {
    selectedNode = node;
    const editor = document.getElementById('node-editor');
    const input = document.getElementById('node-text-input');

    if (node) {
        editor.classList.add('active');
        input.value = node.data;
        // Highlight effect could be added here

        input.oninput = (e) => {
            node.data = e.target.value;
            // Refresh texture
            const newMesh = createVisualNode(node.id, node.data, node.mesh.position);
            group.remove(node.mesh);
            group.add(newMesh);
            node.mesh = newMesh;
            // Note: Line update not needed for content change, but needed for position
        };
    } else {
        editor.classList.remove('active');
    }
}


function onMouseClick(event) {
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(group.children);

    if (intersects.length > 0) {
        const object = intersects[0].object;
        if (object.userData.isNode) {
            const node = nodes.find(n => n.id === object.userData.id);
            selectNode(node);
        }
    } else {
        selectNode(null);
    }
}


function onSelectStart(event) {
    const controller = event.target;
    const intersections = getIntersections(controller);

    if (intersections.length > 0) {
        const intersection = intersections[0];
        const object = intersection.object;
        if (object.userData.isNode) {
            object.material.emissive.b = 1;
            controller.attach(object);
            controller.userData.selected = object;
        }
    }
}

function onSelectEnd(event) {
    const controller = event.target;
    if (controller.userData.selected) {
        const object = controller.userData.selected;
        object.material.emissive.b = 0;
        group.attach(object);
        controller.userData.selected = null;

        // Update connections after move
        const node = nodes.find(n => n.id === object.userData.id);
        if (node) updateConnection(node);
        // Also update children connections
        node.children.forEach(child => updateConnection(child));
    }
}

function getIntersections(controller) {
    tempMatrix.identity().extractRotation(controller.matrixWorld);
    raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
    raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);
    return raycaster.intersectObjects(group.children, false);
}

// --- Layout Engine ---

function updateLayout(mode) {
    // Simple recursive layout
    const root = nodes.find(n => !n.parentId);
    if (!root) return;

    if (mode === '2D') {
        const resetRoot = new THREE.Vector3(0, 1.6, 0);
        root.mesh.position.copy(resetRoot);
        // Reset rotation for 2D
        root.mesh.rotation.set(0, 0, 0);

        layoutRecursive2D(root, 0, 0, Math.PI * 2);
    } else if (mode === '3D') {
        // Spiral / Sphere layout?
        layoutRecursive3D(root, 0, 0, 0);
    }

    // Update lines
    nodes.forEach(n => updateConnection(n));
}

function layoutRecursive2D(node, depth, startAngle, angleRange) {
    const children = node.children;
    if (children.length === 0) return;

    const angleStep = angleRange / children.length;
    let currentAngle = startAngle;

    children.forEach(child => {
        const radius = EXPANSION_RADIUS_2D * (depth + 1);
        const x = Math.cos(currentAngle + angleStep / 2) * radius;
        const y = node.mesh.position.y; // Keep flat Y
        const z = Math.sin(currentAngle + angleStep / 2) * radius;

        // Animate to position? For now snap.
        child.mesh.position.set(x, y, z);
        child.mesh.lookAt(0, y, 0); // Face center

        layoutRecursive2D(child, depth + 1, currentAngle, angleStep);
        currentAngle += angleStep;
    });
}

function layoutRecursive3D(node, depth, angle, heightOffset) {
    const children = node.children;
    if (children.length === 0) return;

    // Helix layout
    const radius = 2 + depth * 0.5;
    const heightStep = 0.5;

    children.forEach((child, i) => {
        const theta = angle + (i * 0.5);
        const y = 1.6 + (i - children.length / 2) * heightStep + (depth * 0.5);

        const x = Math.cos(theta) * radius;
        const z = Math.sin(theta) * radius;

        child.mesh.position.set(x, y, z);
        child.mesh.lookAt(0, 1.6, 0);

        layoutRecursive3D(child, depth + 1, theta + 0.2, 0);
    });
}


// --- Import/Export ---

function exportCSV() {
    // Format: ID, ParentID, Content, X, Y, Z
    let csv = "ID,ParentID,Content,X,Y,Z\n";
    nodes.forEach(n => {
        csv += `${n.id},${n.parentId || ''},"${n.data}",${n.mesh.position.x},${n.mesh.position.y},${n.mesh.position.z}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mindmap.csv';
    a.click();
}

function importCSV(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const text = e.target.result;
        const lines = text.split('\n');

        // Clear existing
        nodes.forEach(n => { group.remove(n.mesh); if (n.line) group.remove(n.line); });
        nodes = [];

        // Map to store for parent reconstruction
        const loadedNodes = {};

        for (let i = 1; i < lines.length; i++) {
            if (!lines[i].trim()) continue;
            const cols = lines[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
            // Simple regex split might break on quotes, better CSV parser needed ideally simple split:
            // Let's assume simple CSV for now: ID,Parent,Content,X,Y,Z
            const [id, parentId, contentRaw, x, y, z] = lines[i].split(',');
            const content = contentRaw.replace(/"/g, ''); // strip quotes

            const pos = new THREE.Vector3(parseFloat(x), parseFloat(y), parseFloat(z));
            const mesh = createVisualNode(id, content, pos);

            const node = {
                id: id,
                parentId: parentId === '' ? null : parentId,
                data: content,
                mesh: mesh,
                line: null,
                children: []
            };

            nodes.push(node);
            loadedNodes[id] = node;
        }

        // Rebuild connections
        nodes.forEach(n => {
            if (n.parentId && loadedNodes[n.parentId]) {
                n.line = createConnection(loadedNodes[n.parentId].mesh.position, n.mesh.position);
                loadedNodes[n.parentId].children.push(n);
            }
        });

    };
    reader.readAsText(file);
}

// --- Animation Loop ---

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // UI resize logic if needed
}

function animate() {
    renderer.setAnimationLoop(render);
}

function render() {
    // Optional: Slow rotation of layout or floating animation
    // group.rotation.y += 0.001; 

    // Controller visual update

    renderer.render(scene, camera);
}
