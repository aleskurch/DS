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

      // ЦВЕТ ФОНА
      // (выбрать в css и вставить после 0x )
      scene.background = new THREE.Color( 0x413b36 );

      const loader = new THREE.FontLoader();
      loader.load( 'assets/fonts/helvetiker.json', function ( font ) {

        // ЦВЕТ БУКВЫ
        // (выбрать в css и вставить после 0x )

        const color = 0xc4a041;


        const matLite = new THREE.MeshBasicMaterial( {
          color: color,
          opacity: 1,
      } );

        const matLite2 = new THREE.MeshBasicMaterial( {
          // ЦВЕТ ТЕНИ
          // (выбрать в css и вставить после 0x )

          color: 0xbba9d0,
          opacity: 1,
      } );

        // ВАША БУКВА
        // ЛУчше лытынь, честно
        const geometry = new THREE.TextGeometry( 'K', {
          font: font,
          size: 80,
          height: 20,
          opacity: 1,
          curveSegments: 1,
          edgeColor: color
        } );

        geometry.computeBoundingBox();

        geometry.translate( 50, 50, 50 );

        const text = new THREE.Mesh( geometry, matLite );
        text.position.z = 0;

        const geometry2 = new THREE.BoxGeometry( 0, 80, 20 );
        geometry2.translate( 0, 90, 60 );
        // ЦВЕТ ТЕНИ
        // (выбрать в css и вставить после 0x )
        const material = new THREE.MeshBasicMaterial( {color: 0xbba9d0} );
        const cube = new THREE.Mesh( geometry2, material );
        scene.add( cube );

        // размер проекции на XY
        // (new THREE.BoxGeometry( 80, ...)
        // заменить 80(подобрать опытным путем)

        const geometry3 = new THREE.BoxGeometry( 80, 0, 20 );
        // размер ОТСТУПА проекции на XY
        // geometry3.translate( 93, ...
        // заменить 93(подобрать опытным путем)
        geometry3.translate( 93, 0, 60 );
        // ЦВЕТ ТЕНИ
        // (выбрать в css и вставить после 0x )
        const material3 = new THREE.MeshBasicMaterial( {color: 0xbba9d0} );
        const cube3 = new THREE.Mesh( geometry3, material3 );
        scene.add( cube3 );

        // ВАША БУКВА( для тени)
        // ЛУчше лытынь, честно
        const geometry4 = new THREE.TextGeometry( 'K', {
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


      } );

      renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );

      const controls = new OrbitControls( camera, renderer.domElement );
      controls.target.set( 0, 0, 0 );
      controls.update();

      window.addEventListener( 'resize', onWindowResize );

    }

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
