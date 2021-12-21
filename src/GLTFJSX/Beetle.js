import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations, softShadows } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./beetle.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=> actions.idleanimations.play());
  softShadows({
    frustum: 3.1,
    size: 0.003,
    near: 6.1,
    samples: 100,
    rings: 11,
  });
  return (
    <group ref={group} {...props} dispose={null} scale = {0.4} position={[0,-1,1]} >
      <group name="Armature" rotation={[0.06, 0, 0]}>
        <primitive object={nodes.root} />
        <primitive object={nodes.IKtargetL} />
        <primitive object={nodes.arm1upL005} />
        <primitive object={nodes.IKtarget2L} />
        <primitive object={nodes.IKpole2L} />
        <primitive object={nodes.IKtarget3L} />
        <primitive object={nodes.IKTarget3L} />
        <primitive object={nodes.IKTargetM} />
        <primitive object={nodes.IKtargetR} />
        <primitive object={nodes.arm1upR005} />
        <primitive object={nodes.IKtarget2R} />
        <primitive object={nodes.IKpole2R} />
        <primitive object={nodes.IKtarget3R} />
        <primitive object={nodes.IKTarget3R} />
        <skinnedMesh
          castShadow
          geometry={nodes.Cube002.geometry}
          material={materials.Material}
          skeleton={nodes.Cube002.skeleton}
        />
        <skinnedMesh
        castShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials['Material.001']}
          skeleton={nodes.Cube002_1.skeleton}
        />
        <skinnedMesh
        castShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials['Material.002']}
          skeleton={nodes.Cube002_2.skeleton}
        />
        <directionalLight
              castShadow
              position={[10, 10, 0]}
              intensity={6}
              shadow-mapSize-Width={1024}
              shadow-mapSize-Height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-15}
              shadow-camera-right={10}
              shadow-camera-top={15}
              shadow-camera-bottom={-15}
            />
        
      
      </group>
      
      <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 1]}
              position={[0, 0, 0]}
              
            >
              <planeBufferGeometry args={[200, 200]} />
              <shadowMaterial attach='material' opacity={0.3} />
            </mesh>

    </group>
  )
}

useGLTF.preload('./beetle.glb')