//src/components/Animal.jsx
import { useGLTF, useAnimations } from "@react-three/drei";
import { useLayoutEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";

export default function Animal({
  id,
  model,
  position,
  rotation,
  scale,
}) {
  const group = useRef();
  const navigate = useNavigate();
  const { scene: originalScene, animations } = useGLTF(model);
  const scene = useMemo(() => clone(originalScene), [originalScene]);
  const { actions } = useAnimations(animations, group);

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const minY = box.min.y;

    scene.position.set(0, -minY, 0);
  }, [scene]);


  useLayoutEffect(() => {
    if (!actions) return;
    const firstKey = Object.keys(actions)[0];
    actions[firstKey]?.play();
    return () => {
      Object.values(actions).forEach((action) => action?.stop());
    };
  }, [actions]);

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
