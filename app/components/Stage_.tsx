"use client";

import React, { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Center } from "@react-three/drei";
import { Box3, Vector3 } from "three";
import Model_ from "./utils/stage_/Model_";

// This component will adjust the camera to fit the model
const CameraAdjuster = () => {
  const { camera, scene } = useThree();

  useEffect(() => {
    // Ensure the scene has been loaded
    if (scene.children.length > 0) {
      const box = new Box3().setFromObject(scene);
      const size = box.getSize(new Vector3());
      const center = box.getCenter(new Vector3());

      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));

      // Set camera to look at center of the model
      camera.position.set(-cameraZ * 1.5, 0, 0); // Changed to position camera on the left
      camera.lookAt(center);
      camera.updateProjectionMatrix();
    }
  }, [camera, scene]);

  return null;
};

const Stage_ = () => {
  return (
    <div className="w-full h-screen absolute top-[-6px] z-[1]">
      <Canvas shadows className="w-[200px] h-[200px]">
        <PerspectiveCamera makeDefault position={[-9, 0, 0]} />{" "}
        {/* Changed initial position */}
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
          minPolarAngle={Math.PI / 2 - 0.2} // Slightly below horizontal
          maxPolarAngle={Math.PI / 2} // Slightly above horizontal
          minAzimuthAngle={-Infinity} // Allow full horizontal rotation
          maxAzimuthAngle={Infinity}
        />
        <Suspense fallback={null}>
          <Center>
            <Model_ />
          </Center>
        </Suspense>
        <CameraAdjuster />
      </Canvas>
    </div>
  );
};

export default Stage_;
