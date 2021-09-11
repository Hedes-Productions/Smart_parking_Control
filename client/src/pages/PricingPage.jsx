import React from 'react';
import CardUI from '../components/CardUI';
import CustomNavBar from '../components/CustomNavBar';
import ParticleBackground from '../components/ParticleBackground';
import './PricingPage.css';

function PricingPage() {
  return (
    <div className="pricingPageEle">
      <ParticleBackground />
      <CustomNavBar />
    </div>
  );
}

export default PricingPage;
