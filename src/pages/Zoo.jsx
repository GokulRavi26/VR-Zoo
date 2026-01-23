//src/pages/Zoo.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Road from "../components/Road";

import Ground from "../components/Ground";
import Animal from "../components/Animal";
import Habitat from "../components/Habitat";
import Environment from "../components/Environment";


import { environmentConfig } from "../config/environmentConfig";
import { animals } from "../config/animalConfig";
import { habitats } from "../config/habitatConfig";


export default function Zoo() {
  const location = useLocation();

  useEffect(() => {
    console.log("Zoo page loaded");
  }, []);
  animals.forEach(a => {
  if (!a.model) console.error("Missing model:", a.id);
});

environmentConfig.forEach(e => {
  if (!e.model) console.error("Missing env model:", e.id);
});

  return (
    <div style={styles.container}>
      <Canvas
        key={location.pathname} // 🔥 FORCE CLEAN REMOUNT ON BACK NAVIGATION
        camera={{ position: [10, 8, 14], fov: 50 }}
        style={styles.canvas}
      >
        {/* Lights */}
        <ambientLight intensity={2} />
        <directionalLight position={[10, 20, 10]} intensity={3} />

        {/* Controls */}
        <OrbitControls
          enableZoom
          enableRotate
          enablePan={false}
          dampingFactor={0.08}
        />

        {/* Ground */}
        <Ground />
        <Environment/>
        <Road />

        {/* Habitats */}
        {habitats.map((h) => (
          <Habitat key={h.id} {...h} />
        ))}

        {/* Animals */}
        {animals.map((a) => (
          <Animal key={a.id} {...a} />
        ))}
      </Canvas>
    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
  canvas: {
    width: "100%",
    height: "100%",
  },
};
