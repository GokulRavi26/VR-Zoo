// src/components/Player.jsx
import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function Player() {
  const { camera, scene } = useThree();

  // --------------------
  // KEY STATES
  // --------------------
  const keys = useRef({
    w: false,
    a: false,
    s: false,
    d: false,
    left: false,
    right: false,
    up: false,
    down: false,
  });

  // --------------------
  // PLAYER STATE
  // --------------------
  const position = useRef(new THREE.Vector3(5, 6.5, 30));
  const rotationY = useRef(0);

  // --------------------
  // SETTINGS
  // --------------------
  const MOVE_SPEED = 10;
  const ROTATE_SPEED = 2.0;
  const HEIGHT_SPEED = 1.2;

  const MIN_HEIGHT = 1.6;
  const MAX_HEIGHT = 6.0;

  const COLLISION_DISTANCE = 0.6;
  const raycaster = new THREE.Raycaster();

  // --------------------
  // KEYBOARD EVENTS
  // --------------------
  useEffect(() => {
    const down = (e) => {
      if (e.code === "KeyW") keys.current.w = true;
      if (e.code === "KeyA") keys.current.a = true;
      if (e.code === "KeyS") keys.current.s = true;
      if (e.code === "KeyD") keys.current.d = true;
      if (e.code === "ArrowLeft") keys.current.left = true;
      if (e.code === "ArrowRight") keys.current.right = true;
      if (e.code === "ArrowUp") keys.current.up = true;
      if (e.code === "ArrowDown") keys.current.down = true;
    };

    const up = (e) => {
      if (e.code === "KeyW") keys.current.w = false;
      if (e.code === "KeyA") keys.current.a = false;
      if (e.code === "KeyS") keys.current.s = false;
      if (e.code === "KeyD") keys.current.d = false;
      if (e.code === "ArrowLeft") keys.current.left = false;
      if (e.code === "ArrowRight") keys.current.right = false;
      if (e.code === "ArrowUp") keys.current.up = false;
      if (e.code === "ArrowDown") keys.current.down = false;
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  // --------------------
  // COLLISION CHECK
  // --------------------
  const canMove = (dir) => {
    raycaster.set(position.current, dir);
    raycaster.far = COLLISION_DISTANCE;

    const hits = raycaster
      .intersectObjects(scene.children, true)
      .filter(hit => hit.object.userData?.collider);

    return hits.length === 0;
  };

  // --------------------
  // FRAME LOOP
  // --------------------
  useFrame((_, delta) => {
    /* -------- ROTATION -------- */
    if (keys.current.left) rotationY.current += ROTATE_SPEED * delta;
    if (keys.current.right) rotationY.current -= ROTATE_SPEED * delta;
    camera.rotation.set(0, rotationY.current, 0);

    /* -------- INPUT VECTOR -------- */
    const input = new THREE.Vector3(
      (keys.current.d ? 1 : 0) - (keys.current.a ? 1 : 0),
      0,
      (keys.current.s ? 1 : 0) - (keys.current.w ? 1 : 0)
    );

    if (input.length() > 0) {
      input.normalize();
      input.applyAxisAngle(
        new THREE.Vector3(0, 1, 0),
        rotationY.current
      );

      const moveStep = input.clone().multiplyScalar(MOVE_SPEED * delta);

      // ---- SLIDING COLLISION ----
      const moveX = new THREE.Vector3(moveStep.x, 0, 0);
      const moveZ = new THREE.Vector3(0, 0, moveStep.z);

      if (moveX.length() && canMove(moveX.clone().normalize())) {
        position.current.x += moveX.x;
      }

      if (moveZ.length() && canMove(moveZ.clone().normalize())) {
        position.current.z += moveZ.z;
      }
    }

    /* -------- CAMERA HEIGHT -------- */
    if (keys.current.up) position.current.y += HEIGHT_SPEED * delta;
    if (keys.current.down) position.current.y -= HEIGHT_SPEED * delta;

    position.current.y = THREE.MathUtils.clamp(
      position.current.y,
      MIN_HEIGHT,
      MAX_HEIGHT
    );

    /* -------- APPLY CAMERA -------- */
    camera.position.copy(position.current);
  });

  return null;
}



// import { useRef, useEffect } from "react";
// import { useFrame, useThree } from "@react-three/fiber";
// import * as THREE from "three";

// export default function Player() {
//   const { camera, scene } = useThree();

//   // --------------------
//   // KEY STATES
//   // --------------------
//   const keys = useRef({
//     w: false,
//     a: false,
//     s: false,
//     d: false,
//     left: false,
//     right: false,
//     up: false,
//     down: false,
//   });

//   // --------------------
//   // PLAYER STATE
//   // --------------------
//   const position = useRef(new THREE.Vector3(0, 1.75, 0));
//   const rotationY = useRef(0);

//   // --------------------
//   // SETTINGS
//   // --------------------
//   const MOVE_SPEED = 10;
//   const ROTATE_SPEED = 2.0;
//   const HEIGHT_SPEED = 1.2;

//   const MIN_HEIGHT = 1.6;
//   const MAX_HEIGHT = 6.0;

//   const COLLISION_DISTANCE = 0.6; // how close before stopping

//   const raycaster = new THREE.Raycaster();

//   // --------------------
//   // KEYBOARD EVENTS
//   // --------------------
//   useEffect(() => {
//     const onKeyDown = (e) => {
//       if (e.code === "KeyW") keys.current.w = true;
//       if (e.code === "KeyA") keys.current.a = true;
//       if (e.code === "KeyS") keys.current.s = true;
//       if (e.code === "KeyD") keys.current.d = true;
//       if (e.code === "ArrowLeft") keys.current.left = true;
//       if (e.code === "ArrowRight") keys.current.right = true;
//       if (e.code === "ArrowUp") keys.current.up = true;
//       if (e.code === "ArrowDown") keys.current.down = true;
//     };

//     const onKeyUp = (e) => {
//       if (e.code === "KeyW") keys.current.w = false;
//       if (e.code === "KeyA") keys.current.a = false;
//       if (e.code === "KeyS") keys.current.s = false;
//       if (e.code === "KeyD") keys.current.d = false;
//       if (e.code === "ArrowLeft") keys.current.left = false;
//       if (e.code === "ArrowRight") keys.current.right = false;
//       if (e.code === "ArrowUp") keys.current.up = false;
//       if (e.code === "ArrowDown") keys.current.down = false;
//     };

//     window.addEventListener("keydown", onKeyDown);
//     window.addEventListener("keyup", onKeyUp);

//     return () => {
//       window.removeEventListener("keydown", onKeyDown);
//       window.removeEventListener("keyup", onKeyUp);
//     };
//   }, []);

//   // --------------------
//   // FRAME LOOP
//   // --------------------
//   useFrame((_, delta) => {
//     // ---- ROTATION ----
//     if (keys.current.left) rotationY.current += ROTATE_SPEED * delta;
//     if (keys.current.right) rotationY.current -= ROTATE_SPEED * delta;

//     camera.rotation.set(0, rotationY.current, 0);

//     // ---- MOVEMENT VECTOR ----
//     const direction = new THREE.Vector3();

//     if (keys.current.w) direction.z -= 1;
//     if (keys.current.s) direction.z += 1;
//     if (keys.current.a) direction.x -= 1;
//     if (keys.current.d) direction.x += 1;

//     let canMove = true;

//     if (direction.length() > 0) {
//       direction.normalize();
//       direction.applyAxisAngle(
//         new THREE.Vector3(0, 1, 0),
//         rotationY.current
//       );

//       // ---- COLLISION RAYCAST ----
//       raycaster.set(position.current, direction);
//       raycaster.far = COLLISION_DISTANCE;

//       const hits = raycaster
//         .intersectObjects(scene.children, true)
//         .filter((hit) => hit.object.userData?.collider);

//       if (hits.length > 0) {
//         canMove = false; // ❌ STOP movement
//       }

//       if (canMove) {
//         position.current.addScaledVector(direction, MOVE_SPEED * delta);
//       }
//     }

//     // ---- CAMERA HEIGHT ----
//     if (keys.current.up) position.current.y += HEIGHT_SPEED * delta;
//     if (keys.current.down) position.current.y -= HEIGHT_SPEED * delta;

//     position.current.y = THREE.MathUtils.clamp(
//       position.current.y,
//       MIN_HEIGHT,
//       MAX_HEIGHT
//     );

//     // ---- APPLY CAMERA ----
//     camera.position.copy(position.current);
//   });

//   return null;
// }
