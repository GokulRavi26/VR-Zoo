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

// import { useGLTF, useAnimations } from "@react-three/drei";
// import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import * as THREE from "three";

// export default function Animal({ id, model, position, rotation, scale }) {
//   const groupRef = useRef();
//   const navigate = useNavigate();
  
//   const { scene: originalScene, animations } = useGLTF(model);
  
//   // ✅ CRITICAL: Clone to prevent corruption
//   const scene = useMemo(() => originalScene.clone(true), [originalScene]);
  
//   const { actions } = useAnimations(animations, groupRef);

//   // Center model in local space
//   useLayoutEffect(() => {
//     const box = new THREE.Box3().setFromObject(scene);
//     const center = box.getCenter(new THREE.Vector3());
    
//     scene.traverse((child) => {
//       if (child.isMesh) {
//         child.position.sub(center);
//       }
//     });
//   }, [scene]);

//   // Play animation
//   useEffect(() => {
//     if (actions && Object.keys(actions).length > 0) {
//       const firstAction = actions[Object.keys(actions)[0]];
//       firstAction?.reset().play();
//     }
//   }, [actions]);

//   const handleClick = (e) => {
//     e.stopPropagation();
//     navigate(`/animal/${id}`);
//   };

//   return (
//     <group
//       ref={groupRef}
//       position={position}
//       rotation={rotation}
//       scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
//       onClick={handleClick}
//       onPointerOver={(e) => {
//         e.stopPropagation();
//         document.body.style.cursor = "pointer";
//       }}
//       onPointerOut={(e) => {
//         e.stopPropagation();
//         document.body.style.cursor = "default";
//       }}
//     >
//       <primitive object={scene} />
//     </group>
//   );
// }