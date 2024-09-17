"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Center } from "@react-three/drei";
import { Box3, Vector3 } from "three";
import Model_ from "./utils/stage_/Model_";

// This component adjusts the camera to fit the model
const CameraAdjuster = ({ modelRef }) => {
  const { camera } = useThree();

  useEffect(() => {
    // Ensure the model has been loaded
    if (modelRef.current) {
      const box = new Box3().setFromObject(modelRef.current);
      const size = box.getSize(new Vector3());
      const center = box.getCenter(new Vector3());

      const maxDim = Math.max(size.x, size.y, size.z);
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
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[2.5, 8, 5]}
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
          <Center>
            <Model_ ref={modelRef} />
          </Center>
        </Suspense>
        <CameraAdjuster modelRef={modelRef} />
      </Canvas>

      {/* HTML elements such as div go outside of Canvas */}
      <div className="absolute bottom-0 left-0 text-white">Loading model...</div>
    </div>
  );
};

export default Stage_;
