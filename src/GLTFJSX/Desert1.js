import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations} from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('https://gateway.pinata.cloud/ipfs/QmTcQxMiWfVoC942uicXdtNV6MXbA7gaQoiBbdynBSWwaP')
  const { actions } = useAnimations(animations, group)
  useEffect(()=> actions.float.play());
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Plane077" position={[0, 0.02, -0.05]} rotation={[-0.09, -0.08, -0.3]} scale={0.88}>
        <mesh geometry={nodes.Plane073.geometry} material={materials['Material.042']} />
        <mesh geometry={nodes.Plane073_1.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Plane073_2.geometry} material={materials['Material.003']} />
      </group>
    </group>
  )
}

useGLTF.preload('https://gateway.pinata.cloud/ipfs/QmTcQxMiWfVoC942uicXdtNV6MXbA7gaQoiBbdynBSWwaP')
