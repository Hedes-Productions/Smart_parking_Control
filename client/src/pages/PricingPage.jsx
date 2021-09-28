import React from 'react';
import CountDown from '../components/CountDown';
import CustomNavBarNew from '../components/CustomNavBarNew';
import ParticleBackground from '../components/ParticleBackground';
import './PricingPage.css';

function PricingPage() {
  return (
    <div className="pricingPageEle">
      <CountDown
        bookedYear={2021}
        bookedMonth={9}
        bookedDate={28}
        bookedHour={15}
        bookedMinute={33}
        priceForHour={80}
        priceForMinute={5}
        priceForSecond={0}
      />
      <CustomNavBarNew />
      <ParticleBackground />
    </div>
  );
}

export default PricingPage;
