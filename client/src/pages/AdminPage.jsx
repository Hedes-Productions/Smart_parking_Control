import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import SmallCustomNavBarNew from '../components/SmallCustomNavBar';
import './AdminPage.css';

function AdminPage() {
  return (
    <div className="adminPageEle">
      <SmallCustomNavBarNew />
      <div className="adminContainer">
        <div className="myform">
          <form>
            <h2>Register User</h2>
            <input type="text" name="" id="" placeholder="Full Name" />
            <input type="text" name="" id="" placeholder="Email" />
            <input type="text" name="" id="" placeholder="Address" />
            <input type="text" name="" id="" placeholder="Name on Card" />
            <input type="text" name="" id="" placeholder="Credit Card" />
            <input type="text" name="" id="" placeholder="Exp Month" />
            <input type="text" name="" id="" placeholder="CVV" />
            <button type="submit">Confirm Details</button>
          </form>
        </div>
        {/* <div className="image">hghghj</div> */}
      </div>
      <ParticleBackground />
    </div>
  );
}

export default AdminPage;
