import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('desert2.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=> actions.float.play());
  return (
    <group ref={group} {...props} dispose={null} position={[0,-1.8,0]}>
      <group name="Cube036" position={[0.01, 0.02, 0.01]} rotation={[-2.57, -0.59, 0.36]} scale={[1.27, 0.64, 0.96]}>
        <mesh geometry={nodes.Cube016.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube016_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Cube016_2.geometry} material={materials['Material.045']} />
        <mesh geometry={nodes.Cube016_3.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('desert2.glb')
