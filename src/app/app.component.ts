import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    let camera, scene, renderer;

    init();
    animate();

    function init( ) {

      camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
      camera.position.set( 0, - 400, 600 );

      scene = new THREE.Scene();
      scene.background = new THREE.Color( 0xf0f0f0 );

      const loader = new THREE.FontLoader();
      loader.load( 'assets/fonts/helvetiker.json', function ( font ) {

        const color = 0x6e1b2d;


        const matLite = new THREE.MeshBasicMaterial( {
          color: color,
          //transparent: true,
          opacity: 1,
          //side: THREE.DoubleSide,
          // wireframe: true,
          edgeColor: 0x006699
      } );

        const matLite2 = new THREE.MeshBasicMaterial( {
          color: 0xa9d0cd,
          //transparent: true,
          opacity: 1,
          //side: THREE.DoubleSide,
          // wireframe: true,
          edgeColor: 0x006699
      } );

        const message = "K";

        const shapes = font.generateShapes( message, 100 );

        const geometry = new THREE.TextGeometry( 'M', {
          font: font,
          size: 80,
          height: 20,
          opacity: 1,
          curveSegments: 1,
          edgeColor: color
        } );

        geometry.computeBoundingBox();

        const xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );

        geometry.translate( 50, 50, 50 );

        // make shape ( N.B. edge view not visible )

        const text = new THREE.Mesh( geometry, matLite );
        text.position.z = 0;

        const geometry2 = new THREE.BoxGeometry( 0, 80, 20 );
        geometry2.translate( 0, 90, 60 );
        const material = new THREE.MeshBasicMaterial( {color: 0xa9d0cd} );
        const cube = new THREE.Mesh( geometry2, material );
        scene.add( cube );

        const geometry3 = new THREE.BoxGeometry( 86, 0, 20 );
        geometry3.translate( 93, 0, 60 );
        const material3 = new THREE.MeshBasicMaterial( {color: 0xa9d0cd} );
        const cube3 = new THREE.Mesh( geometry3, material3 );
        scene.add( cube3 );

        const geometry4 = new THREE.TextGeometry( 'M', {
          font: font,
          size: 80,
          height: 1,
          opacity: 1,
          curveSegments: 1,
          edgeColor: color
        } );
        geometry4.translate( 50, 50, 0);

        geometry.computeBoundingBox();

        const text2 = new THREE.Mesh( geometry4, matLite2 );


        scene.add( text2 );
        scene.add( text );

        var sphereAxis = new THREE.AxesHelper(200);
        text.add(sphereAxis);

        // make line shape ( N.B. edge view remains visible )

      } ); //end load function

      renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );

      const controls = new OrbitControls( camera, renderer.domElement );
      controls.target.set( 0, 0, 0 );
      controls.update();

      window.addEventListener( 'resize', onWindowResize );

    } // end init

    function onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function animate() {

      requestAnimationFrame( animate );

      render();

    }

    function render() {

      renderer.render( scene, camera );

    }
  }
}
