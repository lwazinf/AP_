import React from 'react';
import { useGLTF } from "@react-three/drei";

function Model_() {
  const { scene } = useGLTF('/assets/media/Mclaren.glb');
  return <primitive object={scene} />;
}

export default Model_;