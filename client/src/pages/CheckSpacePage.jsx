import BuildingMap3D from '../BuildingMap3D';
import CustomNavBarNew from '../components/CustomNavBarNew';
import LargePlateCard from '../components/LargePlateCard';
import MapCard from '../components/MapCard';
import ParticleBackground from '../components/ParticleBackground';
import './CheckSpacePage.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getOfflineUsersData } from '../redux/actions/getDataOfflineUsers';
import LoadingScreen from '../components/Loading';

function CheckSpacePage() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    address: '',
    cardName: '',
    cardNo: '',
    expDate: '',
    cvv: '',
    carParkNum: null,
  });
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    dispatch(getOfflineUsersData(setUserData, setLoaded, userId));
  }, [dispatch, userId]);
  const parkingLotNumber = useSelector((state) => state.offlineUsers);
  console.log(parkingLotNumber);
  if (parkingLotNumber.parkingLotNum === undefined) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="checkPageEle">
        <CustomNavBarNew userId={localStorage.getItem('userId')} />
        <ParticleBackground customClassName="customParticle" />
        <MapCard parkingSlotNum={parkingLotNumber.parkingLotNum} />
      </div>
    );
  }
}

export default CheckSpacePage;
