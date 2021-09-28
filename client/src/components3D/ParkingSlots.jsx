import React, { useState, useRef } from 'react';
import { a, useSpring, config } from '@react-spring/three';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParkingSlots({ planePosition }) {
  const [flip, set] = useState(false);
  const { x } = useSpring({
    reset: true,
    reverse: flip,
    from: { x: 0.2 },
    x: 1,
    delay: 1,
    // config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <>
      <a.mesh position={planePosition}>
        <boxBufferGeometry args={[1.7, 0.02, 1.2]} />
        {/* <a.meshBasicMaterial attach="material" opacity={x} transparent /> */}
        <a.meshPhongMaterial
          attach="material"
          color="black"
          opacity={x}
          alphaTest={0.5}
          nearPlane={100}
          renderOrder={10}
        />
      </a.mesh>
    </>
  );
}

export default ParkingSlots;
