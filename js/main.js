const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const light = new THREE.AmbientLight( 0xffffff ); // soft white light
scene.add( light );

camera.position.z = 5;

const loader = new THREE.GLTFLoader();

loader.load("../models/scene.gltf", function(gltf){
    scene.add(gltf.scene);
    gltf.scene.scale.set(.4, .4, .4);
})


function animate() {
	renderer.render( scene, camera );

	requestAnimationFrame( animate );

}
animate();

window.addEventListener('resize', onWindowResize, false);

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
