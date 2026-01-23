import { useGLTF } from "@react-three/drei";
import { environmentConfig } from "../config/environmentConfig";

function EnvironmentItem({ model, position, rotation, scale }) {
  const { scene } = useGLTF(model);

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
