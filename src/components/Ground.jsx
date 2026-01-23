//src/components/Ground.jsx
export default function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[6, -0.1, -5]}>
      <planeGeometry args={[75, 75]} />
      <meshStandardMaterial color="#d1d6cd" />
    </mesh>
  );
}
