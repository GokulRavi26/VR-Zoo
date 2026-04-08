import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function UniversalCameraController({ enabled = true }) {
  const { camera, scene } = useThree();

  const MOVE_SPEED = 10;
  const ROTATE_SPEED = 2;

  const SMOOTH_MOVE = 8;
  const SMOOTH_LOOK = 10;

  const CAMERA_RADIUS = 0.35;
  const CAMERA_HEIGHT = 3;
  const CAMERA_EYE_LEVEL = 6;

  const MAX_PITCH = THREE.MathUtils.degToRad(5);

  const MOUSE_SENSITIVITY = 0.003;
  const SCROLL_SPEED = 0.12;

  const DEAD_ZONE = 0.15;

  const velocity = useRef(new THREE.Vector3());
  const targetVelocity = useRef(new THREE.Vector3());

  const rotation = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  const keys = useRef({});
  const colliders = useRef([]);

  const scrollStep = useRef(0);

  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    camera.position.y = CAMERA_EYE_LEVEL;

    colliders.current = [];

    scene.traverse((obj) => {
      if (!obj.userData?.collider) {
        return;
      }

      const box = new THREE.Box3().setFromObject(obj);
      colliders.current.push({ object: obj, box });
    });
  }, [camera, scene]);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const down = (e) => {
      keys.current[e.code] = true;
    };

    const up = (e) => {
      keys.current[e.code] = false;
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) {
      isDragging.current = false;
      return undefined;
    }

    const onMouseDown = (e) => {
      if (e.button !== 0) {
        return;
      }

      isDragging.current = true;
      lastMouse.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging.current = false;
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) {
        return;
      }

      const dx = e.clientX - lastMouse.current.x;
      const dy = e.clientY - lastMouse.current.y;

      lastMouse.current = { x: e.clientX, y: e.clientY };

      targetRotation.current.y -= dx * MOUSE_SENSITIVITY;
      targetRotation.current.x -= dy * MOUSE_SENSITIVITY;

      targetRotation.current.x = THREE.MathUtils.clamp(
        targetRotation.current.x,
        -MAX_PITCH,
        MAX_PITCH
      );
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) {
      scrollStep.current = 0;
      return undefined;
    }

    const onWheel = (e) => {
      scrollStep.current = -e.deltaY * SCROLL_SPEED;
    };

    window.addEventListener("wheel", onWheel);

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, [enabled]);

  useEffect(() => {
    if (enabled) {
      return;
    }

    keys.current = {};
    targetVelocity.current.set(0, 0, 0);
    velocity.current.set(0, 0, 0);
    scrollStep.current = 0;
    isDragging.current = false;
  }, [enabled]);

  const canMoveTo = (position) => {
    const camBox = new THREE.Box3(
      new THREE.Vector3(
        position.x - CAMERA_RADIUS,
        position.y - CAMERA_HEIGHT * 0.5,
        position.z - CAMERA_RADIUS
      ),
      new THREE.Vector3(
        position.x + CAMERA_RADIUS,
        position.y + CAMERA_HEIGHT * 0.5,
        position.z + CAMERA_RADIUS
      )
    );

    for (const collider of colliders.current) {
      collider.box.setFromObject(collider.object);

      if (camBox.intersectsBox(collider.box)) {
        return false;
      }
    }

    return true;
  };

  useFrame((_, delta) => {
    if (!enabled) {
      return;
    }

    camera.position.y = CAMERA_EYE_LEVEL;

    const gamepad = navigator.getGamepads?.()[0];

    let joyMoveZ = 0;
    let joyLookX = 0;

    if (gamepad) {
      joyMoveZ = Math.abs(gamepad.axes[1]) > DEAD_ZONE ? gamepad.axes[1] : 0;
      joyLookX = Math.abs(gamepad.axes[2]) > DEAD_ZONE ? gamepad.axes[2] : 0;
    }

    const rotateInput =
      (keys.current.KeyD ? 1 : 0) -
      (keys.current.KeyA ? 1 : 0) +
      (keys.current.ArrowRight ? 1 : 0) -
      (keys.current.ArrowLeft ? 1 : 0) +
      joyLookX;

    targetRotation.current.y -= rotateInput * ROTATE_SPEED * delta;

    const forwardInput =
      (keys.current.KeyW ? 1 : 0) -
      (keys.current.KeyS ? 1 : 0) +
      (keys.current.ArrowUp ? 1 : 0) -
      (keys.current.ArrowDown ? 1 : 0);

    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();

    const moveVector = new THREE.Vector3();
    moveVector.add(forward.clone().multiplyScalar(forwardInput));
    moveVector.add(forward.clone().multiplyScalar(-joyMoveZ));
    moveVector.add(forward.clone().multiplyScalar(scrollStep.current));

    if (moveVector.length() > 0) {
      moveVector.normalize();
      targetVelocity.current.copy(moveVector).multiplyScalar(MOVE_SPEED);
    } else {
      targetVelocity.current.set(0, 0, 0);
    }

    velocity.current.lerp(targetVelocity.current, SMOOTH_MOVE * delta);

    const deltaMove = velocity.current.clone().multiplyScalar(delta);

    const nextX = camera.position.clone();
    nextX.x += deltaMove.x;

    if (canMoveTo(nextX)) {
      camera.position.x = nextX.x;
    }

    const nextZ = camera.position.clone();
    nextZ.z += deltaMove.z;

    if (canMoveTo(nextZ)) {
      camera.position.z = nextZ.z;
    }

    scrollStep.current = 0;

    rotation.current.x = THREE.MathUtils.lerp(
      rotation.current.x,
      targetRotation.current.x,
      SMOOTH_LOOK * delta
    );

    rotation.current.y = THREE.MathUtils.lerp(
      rotation.current.y,
      targetRotation.current.y,
      SMOOTH_LOOK * delta
    );

    camera.rotation.set(rotation.current.x, rotation.current.y, 0);
  });

  return null;
}
