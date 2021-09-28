import React from 'react';
import VerticalPlanes from './components3D/VerticalPlanes';
import HorizontalPlanes from './components3D/HorizontalPlanes';
import ParkingSlots from './components3D/ParkingSlots';
import { Html, Text } from '@react-three/drei';
import './Building.css';

function Building({ slotNumber }) {
  let parkingSlot = null;
  switch (slotNumber) {
    case 1:
      parkingSlot = <ParkingSlots planePosition={[1, -1.9, 0]} />;
      break;
    case 2:
      parkingSlot = <ParkingSlots planePosition={[1, -1.9, -1.3]} />;
      break;

    case 3:
      parkingSlot = <ParkingSlots planePosition={[-1, -1.9, 0]} />;
      break;
    case 4:
      parkingSlot = <ParkingSlots planePosition={[-1, -1.9, -1.3]} />;
      break;

    case 5:
      parkingSlot = <ParkingSlots planePosition={[1, 0.05, 0]} />;
      break;
    case 6:
      parkingSlot = <ParkingSlots planePosition={[1, 0.05, -1.3]} />;
      break;
    case 7:
      parkingSlot = <ParkingSlots planePosition={[-1, 0.05, 1.3]} />;
      break;
    case 8:
      parkingSlot = <ParkingSlots planePosition={[-1, 0.05, 0]} />;
      break;
    case 9:
      parkingSlot = <ParkingSlots planePosition={[-1, 0.05, -1.3]} />;
      break;
    default:
    // code block
  }
  return (
    <>
      {/* <HorizontalPlanes
        planePosition={[-1.95, -1, 0]}
        planeRotation={[0, 0, 0]}
        planeSize={[0.1, 1.9, 4]}
      /> */}
      <HorizontalPlanes
        planePosition={[0, -1, -1.95]}
        planeRotation={[0, Math.PI / 2, 0]}
        planeSize={[0.1, 1.9, 4]}
      />
      {/* <HorizontalPlanes
        planePosition={[0, 1, 1.95]}
        planeRotation={[0, Math.PI / 2, 0]}
        planeSize={[0.1, 1.9, 4]}
      /> */}
      <HorizontalPlanes
        planePosition={[0, 1, -1.95]}
        planeRotation={[0, Math.PI / 2, 0]}
        planeSize={[0.1, 1.9, 4]}
      />

      <HorizontalPlanes
        planePosition={[0, -1, 1.3]}
        planeRotation={[0, 0, -Math.PI / 4]}
        planeSize={[0.1, 2.8, 1]}
      />

      <VerticalPlanes planePosition={[0, 2, 0]} />
      <VerticalPlanes planePosition={[0, 0, 0]} />
      <VerticalPlanes planePosition={[0, -2, 0]} />
      {parkingSlot}
      <Text
        fontSize={0.3}
        outlineWidth={'4%'}
        outlineColor="rgb(1, 61, 100)"
        outlineOpacity={1}
        position-x={4}
        maxWidth={200}
        // lineHeight={1}
        letterSpacing={0.02}
        textAlign={'center'}
        // font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        // anchorX="left"
        // anchorY="middle"
        // color="rgb(1, 61, 100)"
        fillOpacity={0}
        // strokeWidth={'2.5%'}
        // strokeColor="#000"
      >
        Use mouse or drag {'\n'} finger on screen {'\n'}to rotate this
      </Text>
      <Text
        fontSize={0.3}
        outlineWidth={'4%'}
        outlineColor="rgb(1, 61, 100)"
        outlineOpacity={1}
        position-x={-4}
        maxWidth={200}
        letterSpacing={0.02}
        textAlign={'center'}
        fillOpacity={0}
      >
        Scroll or use two fingers {'\n'} and then pinch to {'\n'} zoom in or out
      </Text>
      <Text
        fontSize={0.3}
        outlineWidth={'4%'}
        outlineColor="rgb(1, 61, 100)"
        outlineOpacity={1}
        position-y={3}
        maxWidth={200}
        letterSpacing={0.02}
        textAlign={'center'}
        fillOpacity={0}
      >
        Blinking spot is your parking location
      </Text>

      {/* <ToolTip2 />
      <ToolTip3 /> */}
    </>
  );
}

// function ToolTip2() {
//   return (
//     <Html center position={[0, 0, -5]}>
//       <p>Scroll to zoom in and out</p>
//     </Html>
//   );
// }

// function ToolTip3() {
//   return (
//     <Html center position={[0, 0, 1]}>
//       <p>{"<== Code's on the left, with details in the comments"}</p>
//     </Html>
//   );
// }

export default Building;
