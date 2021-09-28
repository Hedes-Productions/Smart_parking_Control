import React, { useState } from 'react';
import { BoxBufferGeometry } from 'three';
import { a, useSpring, config } from '@react-spring/three';
import { OrbitControls } from '@react-three/drei';

function HorizontalPlanes({ planePosition, planeRotation, planeSize }) {
  const [hovered, setHovered] = useState(false);
  const props = useSpring({
    opacity: hovered ? 0.2 : 1,
  });

  return (
    <>
      <a.mesh
        position={planePosition}
        rotation={planeRotation}
        onPointerOver={() => {
          setHovered(true);
        }}
        onPointerOut={() => {
          setHovered(false);
        }}
      >
        <boxBufferGeometry args={planeSize} />
        <a.meshPhysicalMaterial
          attach="material"
          color="rgb(9, 159, 247)"
          transparent
          opacity={props.opacity}
        />
        <OrbitControls />
      </a.mesh>
    </>
  );
}

export default HorizontalPlanes;
