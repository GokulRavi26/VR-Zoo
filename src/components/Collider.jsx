//src/components/Collider.jsx
import * as THREE from "three";

export default function ColliderCube({
  position,
  rotation,
  size,
  visible = false,
}) {
  return (
    <mesh
      position={position}
      rotation={rotation}
      userData={{collider: true }}
    >
      <boxGeometry args={size} />

      <meshStandardMaterial
        transparent
        opacity={visible ? 0.3 : 0}
        color={visible ? "red" : "white"}
        depthWrite={false}
      />
    </mesh>
  );
}
