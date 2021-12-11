import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('https://gateway.pinata.cloud/ipfs/QmVZbEjd5MpxpekLVEqxG9EKX8P1Kgkv6xjYcp93vRNFyo')
  const { actions } = useAnimations(animations, group)
  useEffect(()=> actions.float.play());
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Cube036" position={[0.01, 0.02, 0.01]} rotation={[-2.57, -0.59, 0.36]} scale={[1.27, 0.64, 0.96]}>
        <mesh geometry={nodes.Cube016.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube016_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Cube016_2.geometry} material={materials['Material.045']} />
        <mesh geometry={nodes.Cube016_3.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('https://gateway.pinata.cloud/ipfs/QmVZbEjd5MpxpekLVEqxG9EKX8P1Kgkv6xjYcp93vRNFyo')
