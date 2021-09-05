import Loading from '../components/Loading';
import ParticleBackground from '../components/ParticleBackground';

import './LoadingPage.css';
function LoadingScreen() {
  return (
    <div className="loadingPageEle">
      {/* <ParticleBackground /> */}
      <Loading />
    </div>
  );
}

export default LoadingScreen;
