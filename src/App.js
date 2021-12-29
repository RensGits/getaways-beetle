import './App.css';
import React, {Suspense, useState, useEffect} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei';
import CustomLoader from './Functional/CustomLoader';
import logo from './Images/getaways-logo.png'
import LogPusher from './GLTFJSX/LogPusher.js';
import PetalFolder from './GLTFJSX/PetalFolder.js';
import TreasureKeeper from './GLTFJSX/TreasureKeeper.js';
import LightfootDaybreaker from './GLTFJSX/LightfootDaybreaker.js';
import GoldbackTrapper from './GLTFJSX/GoldbackTrapper.js';
import ForestDefender from './GLTFJSX/ForestDefender.js';
import DesertCrawler from './GLTFJSX/DesertCrawler.js';
import CloudHopper from './GLTFJSX/CloudHopper.js';
import CherryNibbler from './GLTFJSX/CherryNibbler.js';


function App() {

  const [GlbComponentName,setGlbComponentName] = useState('')  // state object for setting name of what should be returned in Glb component 
  const Components = { // Components object necessary for setting component below
    LogPusher,
    PetalFolder,
    TreasureKeeper,
    LightfootDaybreaker,
    GoldbackTrapper,
    ForestDefender,
    DesertCrawler,
    CloudHopper,
    CherryNibbler
  }


  useEffect(() =>{   
    const params = new URLSearchParams(window.location.search)
    const GlbFileNameFromUrl = params.get("beetle")
    setGlbComponentName(GlbFileNameFromUrl)
  },[GlbComponentName])

  
  function Glb(){ 

    let GLBComponent = Components[GlbComponentName]
 
    if(!GlbComponentName){  
      return null
    }
    else return(
      <GLBComponent/> 
    )
  }
  
  
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
          <Glb/> 
        </Suspense>
      </Canvas>
      <img className = 'getaways-header' src = {logo} alt="" />
    </div>
  );
}

export default App;
