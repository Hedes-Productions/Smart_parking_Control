import React, { useState, useRef } from 'react';
import { Box, OrbitControls, TransformControls } from '@react-three/drei';
import { DoubleSide, MeshBasicMaterial } from 'three';
import { useSpring, animated, a } from '@react-spring/three';
import { useFrame } from '@react-three/fiber';

function VerticalPlanes({ planePosition }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    opacity: hovered ? 0.2 : 1,
  });

  // useFrame(({ clock }) => {
  //   meshRef.current.rotation.y += 0.01;
  // });
  return (
    <>
      <a.mesh
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        position={planePosition}
        // ref={meshRef}
        // onPointerOver={() => {
        //   setHovered(true);
        // }}
        // onPointerOut={() => {
        //   setHovered(false);
        // }}
        onClick={() => {
          setActive(!active);
        }}
      >
        {/* <TransformControls> */}
        {/* <mesh>
            <planeBufferGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="red" side={DoubleSide} />
          </mesh> */}
        {/* <mesh position={[0, -6, 0]} rotation={[Math.PI / -2, 0, 0]}>
          <planeBufferGeometry args={[200, 200, 75, 75]} />
          <meshBasicMaterial wireframe color="red" />
        </mesh> */}
        {/* <Box>
            <meshBasicMaterial attach="material" wireframe></meshBasicMaterial>
          </Box> */}
        {/* </TransformControls> */}
        {/* <TransformControls> */}
        <boxGeometry args={[4, 4, 0.1]} />
        {/* </TransformControls> */}
        <spotLight position={[2, 2, -5]} />
        <spotLight position={[2, 2, 5]} />
        <ambientLight intensity={0.2} />
        <a.meshPhysicalMaterial
          roughness={0.5}
          attach="material"
          color="rgb(9, 159, 247)"
          transparent
          opacity={props.opacity}
          side={DoubleSide}
        />
        {/* <OrbitControls /> */}
      </a.mesh>
    </>
  );
}

export default VerticalPlanes;
