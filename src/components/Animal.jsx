//src/components/Animal.jsx
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";

export default function Animal({
  id,
  model,
  position,
  rotation,
  scale,
}) {
  const group = useRef();
  const navigate = useNavigate();
  const { scene, animations } = useGLTF(model);
  const { actions } = useAnimations(animations, group);

  // Center model
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);
  }, [scene]);

  // Play first animation safely
  useEffect(() => {
    if (!actions) return;
    const firstKey = Object.keys(actions)[0];
    actions[firstKey]?.play();
  }, [actions]);
  console.log(id, position);
  return (
    <group
      ref={group}
      position={position}
      rotation={rotation}
      scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/animal/${id}`);
      }}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "default")}
    >
      <primitive object={scene} />
    </group>
  );
}


