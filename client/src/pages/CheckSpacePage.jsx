import BuildingMap3D from '../BuildingMap3D';
import CustomNavBarNew from '../components/CustomNavBarNew';
import LargePlateCard from '../components/LargePlateCard';
import MapCard from '../components/MapCard';
import ParticleBackground from '../components/ParticleBackground';
import './CheckSpacePage.css';

function CheckSpacePage() {
  return (
    <div className="checkPageEle">
      <CustomNavBarNew />
      <ParticleBackground customClassName="customParticle" />
      <MapCard parkingSlotNum={4} />
    </div>
  );
}

export default CheckSpacePage;
