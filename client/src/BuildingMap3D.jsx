import { Canvas, useRender } from '@react-three/fiber';
import { Suspense } from 'react';
import Building from './Building';
import './BuildingMap3D.css';

function BuildingMap3D({ className, parkingSlotNum }) {
  return (
    <div className={className}>
      <Canvas className="canvasEle">
        <Suspense callback={null}>
          <Building slotNumber={parkingSlotNum} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default BuildingMap3D;
