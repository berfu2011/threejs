import {GLTFLoader} from "./GLTFLoader.js";

let container= document.querySelector(".scene");
//let container2= document.querySelector(".scene2");


var scene= new THREE.Scene();
//var scene2= new THREE.Scene();


var camera=new THREE.PerspectiveCamera(
    40,
    container.clientWidth/ container.clientHeight,
    0.01,
    1000
);

/*var camera2=new THREE.PerspectiveCamera(
    75,
    container2.clientWidth/ container2.clientHeight,
    0.01,
    1000
);*/

var renderer=new THREE.WebGLRenderer();
//var renderer2=new THREE.WebGLRenderer();

renderer.setSize(container.clientWidth,container.clientHeight);
//renderer2.setSize(container.clientWidth,container.clientHeight);

container.appendChild(renderer.domElement);
//container.appendChild(renderer2.domElement);

var loader=new GLTFLoader();
var obj;
loader.load("./apple/scene.gltf" , function(gltf){
    obj=gltf.scene;
    obj.position.y=5;
    obj.position.x=2;
    obj.scale.set(0.5, 0.5, 0.5);
    obj.renderOrder = 0;
    scene.add(gltf.scene);
});



var loader2=new GLTFLoader();
var obj2;
loader2.load("./hands/scene.gltf" , function(gltf){
    obj2=gltf.scene;
    
    obj2.position.x=-8;
    obj2.position.y=10;
    obj2.rotation.y=1.5
    obj2.renderOrder = 1;
    scene.add(gltf.scene);
   
});









var light = new THREE.HemisphereLight(0xffffff,0x000000,10);
//var light2 = new THREE.HemisphereLight(0xffffff,0x000000,10);
scene.add(light);
//scene2.add(light2);


camera.position.set(0,10,60);
//camera2.position.set(-40,0,300);


function animate(){
    requestAnimationFrame(animate);
    obj.rotation.z+=0.01;
    //obj2.rotation.x+=0.01;
    //obj2.rotation.y+=0.01;
    renderer.render(scene,camera);
  
}

function animate2(){
   // requestAnimationFrame(animate);
  
 
}
animate();
animate2();