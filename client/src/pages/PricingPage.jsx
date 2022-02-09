import axios from 'axios';
import React, { useState } from 'react';
import CountDown from '../components/CountDown';
import CustomNavBarNew from '../components/CustomNavBarNew';
import ParticleBackground from '../components/ParticleBackground';
import './PricingPage.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import LoadingScreen from './LoadingPage';
import { getUserData } from '../functions/dataFetch';
import { useDispatch } from 'react-redux';
import { getOfflineUsersData } from '../redux/actions/getDataOfflineUsers';

function PricingPage() {
  const { userId } = useParams();
  const dispatch = useDispatch();
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

  localStorage.setItem('userId', userId);
  // const userDataOff = useSelector((state) => state.offlineUsers);
  return loaded ? (
    <div className="pricingPageEle">
      {console.log('This is pricing page -1')}
      {console.log(userData, loaded)}
      {console.log('This is pricing page -2')}
      <CountDown
        bookedYear={userData.createdAt.split('-')[0]}
        bookedMonth={userData.createdAt.split('-')[1]}
        bookedDate={userData.createdAt.split('-')[2].split('T')[0]}
        bookedHour={(
          parseInt(
            userData.createdAt.split('-')[2].split('T')[1].split(':')[0]
          ) + 5
        ).toString()}
        bookedMinute={(
          parseInt(
            userData.createdAt.split('-')[2].split('T')[1].split(':')[1]
          ) + 30
        ).toString()}
        priceForHour={80}
        priceForMinute={5}
        priceForSecond={0}
        userData={userData}
      />
      <CustomNavBarNew userId={localStorage.getItem('userId')} />
      <ParticleBackground />
    </div>
  ) : (
    <LoadingScreen />
  );
}

export default PricingPage;
