import React from 'react';
import CustomNavBarNew from '../components/CustomNavBarNew';
import LargePlateCard from '../components/LargePlateCard';
import ParticleBackground from '../components/ParticleBackground';
import SmallCustomNavBarNew from '../components/SmallCustomNavBar';
import LargePlateCardAdmin from '../components/LargePlateCardAdmin';
import './AdminLoginPage.css';
import CardUI from '../components/CardUI';
import CustomContainer from '../components/CustomContainer';
import AdminLoginContainer from '../components/AdminLoginContainer';
function AdminLoginPage() {
  return (
    <div className="bookingPageEle">
      <SmallCustomNavBarNew />
      <ParticleBackground />
      <AdminLoginContainer />
    </div>
  );
}

export default AdminLoginPage;
