import ParticleBackground from '../components/ParticleBackground';
import NewSlider from '../components/NewSlider';
import CustomNavBar from '../components/CustomNavBar';

import './MainPage.css';
function MainPage() {
  return (
    <div>
      <div className="mainPageEle">
        <CustomNavBar />
        <NewSlider />
        <ParticleBackground />
      </div>
    </div>
  );
}

export default MainPage;
