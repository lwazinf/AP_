"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Center, Environment } from "@react-three/drei";
import { Box3, Vector3 } from "three";
import Model_ from "./utils/stage_/Model_";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const GlassMaterial = () => {
  return (
    <mesh>
      <meshPhysicalMaterial
        transmission={1} // Enables glass effect (refraction)
        transparent
        roughness={0} // Smooth glass
        thickness={1}  // Thickness of the material
        envMapIntensity={1} // Strength of the environment map
        metalness={0} // Non-metallic glass
        roughness={0.05} // Slight roughness for realism
      />
    </mesh>
  );
};

// This component adjusts the camera to fit the model
// @ts-expect-error - No type
const CameraAdjuster = ({ modelRef }) => {
  const { camera } = useThree();

  useEffect(() => {
    if (modelRef.current) {
      const box = new Box3().setFromObject(modelRef.current);
      const size = box.getSize(new Vector3());
      const center = box.getCenter(new Vector3());

      const maxDim = Math.max(size.x, size.y, size.z);
      // @ts-expect-error - FOV error
      const fovRadians = (camera.fov * Math.PI) / 180;
      const cameraZ = Math.abs(maxDim / (2 * Math.tan(fovRadians / 2)));

      camera.position.set(cameraZ * 1.5, 0, cameraZ * 1.5);
      camera.lookAt(center);
      camera.updateProjectionMatrix();
    }
  }, [camera, modelRef]);

  return null;
};

const Stage_ = () => {
  const modelRef = useRef();

  return (
    <div className="relative w-full h-screen">
      {/* All 3D content must be inside Canvas */}
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[-9, 0, 9]} />
        <ambientLight intensity={0.8} />
        <directionalLight
          castShadow
          position={[10, 10, 10]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          minPolarAngle={Math.PI / 2 - 0.2}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Infinity}
          maxAzimuthAngle={Infinity}
        />
        <Suspense fallback={null}>
          <GlassMaterial />
          <Environment preset="dawn" environmentIntensity={0.15} />
          <Center>
            {/* @ts-expect-error - ref */}
            <Model_ ref={modelRef} />
          </Center>
        </Suspense>
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        </EffectComposer>
        <CameraAdjuster modelRef={modelRef} />
      </Canvas>

      {/* HTML elements such as div go outside of Canvas */}
      <div className="absolute bottom-0 left-0 text-white">
        Loading model...
      </div>
    </div>
  );
};

export default Stage_;