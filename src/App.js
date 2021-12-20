import './App.css';
import React from 'react'
import {useState, useEffect, Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Sky} from '@react-three/drei';
import CustomLoader from './Functional/CustomLoader';
import Desert1 from './GLTFJSX/Desert1.js'
import Desert2 from './GLTFJSX/Desert2.js'


function App() {

  const [GlbComponentName,setGlbComponentName] = useState('')
  const Components = {
    Desert1,
    Desert2
  }

  function Glb(){

    let GLBComponent = Components[GlbComponentName]
    console.log(GlbComponentName)

    if(!GlbComponentName){
    }
    else return(
      <GLBComponent/> 
    )
  }
  

  useEffect(() =>{
    const params = new URLSearchParams(window.location.search)
    const GlbFileNameFromUrl = params.get("fileName")
    setGlbComponentName(GlbFileNameFromUrl)
  },[GlbComponentName])

  

  return (
    <div className = "canvas-container">
   
      <Canvas
        style={{ height: '100%', width: '100%'}}
        camera = {{
          position: [10, 0, 29],
          fov: 25
        }}
      >
        <Suspense fallback = {CustomLoader}>
          <group position={[4.05, 6.31, -1.05]} rotation={[1.89, 0.88, -2.05]}>
            <spotLight intensity={1} angle={3} penumbra={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
            <ambientLight intensity={0.05}/>
          </group>
          <OrbitControls enableZoom={false} enablePan={false}/>
          <Sky azimuth={0.5} inclination={5} />
          <Glb/>
        </Suspense>
      </Canvas>
      <img className = 'getaways-header' src = "/getaways-logo.png" onClick={(e) => {
      e.preventDefault();
      window.open('https://projectgetaways.com', "_blank")
      }}/>
    </div>
  );
}

export default App;
