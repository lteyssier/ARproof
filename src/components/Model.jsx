/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


const Model = () => {
  const gnome = useGLTF("./models/gnomr/scene.gltf");

  return (
    <primitive object={gnome.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const GnomeCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-1, 1, 1],
      }}
    >
      <Suspense fallback={false}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default GnomeCanvas;