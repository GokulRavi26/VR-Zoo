// src/three/AnimalPreview3D.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useLayoutEffect, useMemo, useState } from "react";
import * as THREE from "three";

function Model({ model, isInteracting }) {
  const groupRef = useRef();
  const { scene: originalScene, animations } = useGLTF(model);
  
  const scene = useMemo(() => originalScene.clone(true), [originalScene]);
  const { actions } = useAnimations(animations, groupRef);

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    scene.position.set(-center.x, -center.y, -center.z);

    const maxAxis = Math.max(size.x, size.y, size.z);
    const scale = 2.5 / maxAxis;
    scene.scale.setScalar(scale);
  }, [scene]);

  useLayoutEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      firstAction?.reset().fadeIn(0.3).play();
    }
  }, [actions]);

  useFrame(() => {
    if (!isInteracting && groupRef.current) {
      groupRef.current.rotation.y += 0.004;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

export default function AnimalPreview3D({ model }) {
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <Canvas camera={{ position: [0, 1.2, 4], fov: 45 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} />

      <Model model={model} isInteracting={isInteracting} />

      <OrbitControls
        enableRotate
        enableZoom={false}
        enablePan={false}
        dampingFactor={0.08}
        onStart={() => setIsInteracting(true)}
        onEnd={() => setIsInteracting(false)}
      />
    </Canvas>
  );
}