//src/components/Habitat.jsx
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function Habitat({ texture, position, size, scale = [1, 1, 1] }) {
  const map = useLoader(THREE.TextureLoader, texture);

  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  map.repeat.set(2, 2);

  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={position}
      scale={scale} // ✅ added scale support
    >
      <planeGeometry args={size} />
      <meshStandardMaterial map={map} />
    </mesh>
  );
}
