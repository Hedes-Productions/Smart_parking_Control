import axios from 'axios';
import React, { useState } from 'react';
import CountDown from '../components/CountDown';
import CustomNavBarNew from '../components/CustomNavBarNew';
import ParticleBackground from '../components/ParticleBackground';
import './PricingPage.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import LoadingScreen from './LoadingPage';

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
  // const getUserData = async () => {
  //   return await axios({
  //     method: 'get',
  //     url: `http://localhost:7000/userInfo/userDataById/${userId}`,
  //   })
  //     .catch((error) => {
  //       console.log('error in getting userId');
  //       console.log(error);
  //     })
  //     .then((response) => {
  //       // this is now called!
  //       setUserData(response.data.userData);
  //       console.log(response);
  //     });
  // };
  useEffect(() => {
    const getUserData = async () => {
      return await axios({
        method: 'get',
        headers: { 'Access-Control-Allow-Origin': '*' },
        url: `http://localhost:7000/userInfo/userDataById/${userId}`,
      })
        .catch((error) => {
          console.log('error in getting userId');
          console.log(error);
        })
        .then((response) => {
          // this is now called!
          setUserData(response.data.userData);
          setLoaded(true);
        });
    };
    getUserData();
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
