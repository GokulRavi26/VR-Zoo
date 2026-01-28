// src/components/Environment.jsx
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { environmentConfig } from "../config/environmentConfig";

function EnvironmentItem({ model, position, rotation, scale }) {
  const { scene: originalScene } = useGLTF(model);

  // ✅ Clone ONCE (prevents mutation bugs)
  const scene = useMemo(() => originalScene.clone(true), [originalScene]);

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

export default function Environment() {
  return (
    <>
      {environmentConfig.map((env) => (
        <EnvironmentItem key={env.id} {...env} />
      ))}
    </>
  );
}

/* ✅ Preload once */
environmentConfig.forEach((env) => useGLTF.preload(env.model));
