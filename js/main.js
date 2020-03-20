let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );
    
    renderer = new THREE.WebGLRenderer( {antialias: true} );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    window.addEventListener( 'resize', function() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        renderer.setSize( width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    })

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    
    const geometry = new THREE.BoxGeometry(20, 20, 20);
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    
    camera.position.set( 0, 20, 100);
    controls.update();
}

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );
}

// window.addEventListener('resize', onWindowResize, false);
init();
animate();