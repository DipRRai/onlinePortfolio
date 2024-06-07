// import * as THREE from 'three';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
// import { GLTFLoader } from './js/libs/GLTFLoader.js';
// import { TextureLoader } from './js/libs/TextureLoader.js';
import * as THREE from './node_modules/three/build/three.module.js';
// import { FontLoader } from './node_modules/three/examples/jsm/loaders/FontLoader.js';
// import { TextGeometry } from './node_modules/three/examples/jsm/geometries/TextGeometry.js';
// import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';
// import { TextureLoader } from './node_modules/three/src/loaders/TextureLoader.js';

const element = document.getElementById('displayer');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(element.clientWidth, element.clientHeight);

renderer.setAnimationLoop(animate);
camera.position.z = 30;

element.appendChild(renderer.domElement);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const loader = new FontLoader();
// let text;
// const textureLoader = new TextureLoader();
// const texture = textureLoader.load('./assets/Splotch.jpg', () => {
//     // Texture loaded, create the material with the texture
//     const material = new THREE.MeshBasicMaterial({ map: texture });

//     // Load the font and create the text geometry
//     loader.load('./node_modules/three/examples/fonts/helvetiker_regular.typeface.json', function (font) {
//         const textGeometry = new TextGeometry("Welcome to Dip's portfolio", {
//             font: font,
//             size: 5,
//             height: 0.1,
//             curveSegments: 12,
//             bevelEnabled: true,
//             bevelThickness: 0.1,
//             bevelSize: 0.5,
//             bevelOffset: 0,
//             bevelSegments: 5
//         });
//         // Center the geometry
//         textGeometry.computeBoundingBox();
//         const centerOffset = -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
//         textGeometry.translate(centerOffset, 0, 0);
//         text = new THREE.Mesh(textGeometry, material);
//         text.position.x = 0;
//         text.position.y = 0;
//         text.position.z = 0;
//         scene.add(text);
//     });
// });

function animate() {
    // if (text) {
    //     text.rotation.y += 0.01;  // Rotate the text
    // }
    renderer.render(scene, camera);
}
