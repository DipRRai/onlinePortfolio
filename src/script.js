import * as THREE from 'https://unpkg.com/three@0.97.0/build/three.module.js';

const element = document.getElementById('displayer');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(element.clientWidth, element.clientHeight);

renderer.setAnimationLoop(animate);
camera.position.x = -13;
camera.position.y = 5;
camera.position.z = 30;


element.appendChild(renderer.domElement);

// Create cube geometry
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial({ color: 'black' });

const cube = new THREE.Mesh(geometry, material);
const loop = new THREE.Mesh(geometry, material);
scene.add(cube);
scene.add(loop)

// Create wireframe geometry based on cube geometry
const wireframeGeometry = new THREE.WireframeGeometry(geometry);
const wire_mat_white = new THREE.LineBasicMaterial({ color: 'white'});
const wire_mat_pink = new THREE.LineBasicMaterial({ color: 'white'});
const wireframe_white = new THREE.LineSegments(wireframeGeometry, wire_mat_white);
const wireframe_pink = new THREE.LineSegments(wireframeGeometry, wire_mat_pink);

// Add wireframe as a child of the cube
cube.add(wireframe_white);
loop.add(wireframe_pink);
loop.position.x = 10;
loop.rotation.x = Math.PI/2

function animate() {
    renderer.setSize(element.clientWidth, element.clientHeight);
    cube.rotation.x += 0.001;
    //cube.rotation.y += 0.001;
    loop.rotation.x += 0.001;
    //loop.rotation.y += 0.001;
    renderer.render(scene, camera);
}
