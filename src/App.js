import './App.css';
import React from 'react'
import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei';
import CustomLoader from './Functional/CustomLoader';
import Beetle from './GLTFJSX/Beetle.js'
import logo from './Images/getaways-logo.png'


function App() {

  return (
    <div className = "canvas-container">
   
      <Canvas
        style={{ height: '100%', width: '100%'}}
        camera = {{
          position: [10, 0, 29],
          fov: 25
        }}
        shadows
        
      >
        <Suspense fallback = {CustomLoader}>
          <group position={[4.05, 6.31, -1.05]} rotation={[1.89, 0.88, -2.05]}>
            <spotLight intensity={1} angle={3} penumbra={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
            <ambientLight intensity={0.05}/>
          </group>
          <OrbitControls enableZoom={false} enablePan={false}/>
          <Beetle/>
        </Suspense>
      </Canvas>
      <a href="https://projectgetaways.com" target = "_blank" rel="noopener noreferrer">
      <img className = 'getaways-header' src = {logo} alt="" />
      </a>
    </div>
  );
}

export default App;
