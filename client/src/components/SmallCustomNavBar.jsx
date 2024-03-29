import React, { useState } from 'react';

import './CustomNavBarNew.css';

function SmallCustomNavBarNew() {
  const [active, setActive] = useState(false);
  const toggeling = () => {
    setActive(!active);
  };

  return (
    <div onClick={toggeling} className={active ? 'newNav  active' : 'newNav'}>
      {/* <a href="/" className="logo">
        S.P.S
      </a> */}
      <div
        onClick={toggeling}
        className={active ? 'toggle  active' : 'toggle'}
      ></div>
      <div className={active ? 'nLinks  active' : 'nLinks'}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/book">Booking</a>
          </li>
          <li>
            <a href="/adLogin">Admin</a>
          </li>
          {/* <li>
            <a href="/about">About</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default SmallCustomNavBarNew;
