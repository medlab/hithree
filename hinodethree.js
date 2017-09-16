var THREE=require('three')
var Detector=require('Detector')
var scene=new THREE.Scene();

if(Detector.webgl){
    animate();
}else{
    var warning=Detector.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
}
