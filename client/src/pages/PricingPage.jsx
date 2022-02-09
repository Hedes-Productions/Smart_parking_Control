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

function PricingPage() {
  const { userId } = useParams();
  console.log(userId);
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
    getUserData(setUserData, setLoaded, userId);
  }, [userId]);

  return loaded ? (
    <div className="pricingPageEle">
      {console.log(userData.createdAt.split('-')[2])}
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
      {console.log(
        parseInt(
          userData.createdAt.split('-')[2].split('T')[1].split(':')[1]
        ).toString()
      )}
      <CustomNavBarNew />
      <ParticleBackground />
    </div>
  ) : (
    <LoadingScreen />
  );
}

export default PricingPage;
