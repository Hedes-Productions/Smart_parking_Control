import ParticleBackground from '../components/ParticleBackground';
import NewSlider from '../components/NewSlider';
// import CustomNavBar from '../components/CustomNavBar';
import CustomNavBarNew from '../components/CustomNavBarNew';
import './MainPage.css';
import SmallCustomNavBarNew from '../components/SmallCustomNavBar';
function MainPage() {
  return (
    <div>
      <div className="mainPageEle">
        <SmallCustomNavBarNew />
        {/* <CustomNavBar /> */}
        <NewSlider />
        <ParticleBackground />
      </div>
    </div>
  );
}

export default MainPage;
