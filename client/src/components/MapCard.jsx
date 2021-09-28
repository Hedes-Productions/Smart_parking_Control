import BuildingMap3D from '../BuildingMap3D';
import './MapCard.css';

function MapCard({ parkingSlotNum }) {
  return (
    <div className="mapCardBody">
      <BuildingMap3D className="map3D" parkingSlotNum={parkingSlotNum} />
    </div>
  );
}

export default MapCard;
