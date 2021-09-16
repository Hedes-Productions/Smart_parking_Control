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
        bookedMonth={8}
        bookedDate={15}
        bookedHour={19}
        bookedMinute={33}
        priceForHour={3000}
        priceForMinute={200}
        priceForSecond={10}
      />
      <CustomNavBarNew />
      <ParticleBackground />
    </div>
  );
}

export default PricingPage;
