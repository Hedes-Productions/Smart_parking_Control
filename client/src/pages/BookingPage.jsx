import CustomNavBarNew from '../components/CustomNavBarNew';
import LargePlateCard from '../components/LargePlateCard';
import ParticleBackground from '../components/ParticleBackground';
import SmallCustomNavBarNew from '../components/SmallCustomNavBar';
import './BookingPage.css';

function CheckParkingPage() {
  return (
    <div className="bookingPageEle">
      <SmallCustomNavBarNew />
      <ParticleBackground />
      <LargePlateCard />
      {/* <LargePlateCard />
      <div className="cardDiv">
        <CardUI name={'How to use this?'} />
        <CardUI name={'Our pricing system?'} />
      </div>
      <button type="button" className="customButton">
        Place my booking
      </button> */}
      {/* <div className="left">fdfdasdddddd</div>
      <div className="right"></div> */}
    </div>
  );
}

export default CheckParkingPage;
