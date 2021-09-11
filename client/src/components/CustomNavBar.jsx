import { useState } from 'react';
import './CustomNavBar.css';

function CustomNavBar() {
  const [displayVal, setDisplayVal] = useState(false);
  const displayValShow = () => setDisplayVal(!displayVal);
  return (
    <nav className={displayVal ? 'test goUp' : 'test goDown'}>
      <ul className="nav-links">
        <li className="myButton">
          <a href="/main" className="custom-underline">
            Main Page
          </a>
        </li>
        <li className="myButton">
          <a href="/book" className="custom-underline">
            Booking
          </a>
        </li>
        <li className="myButton">
          <a href="/#">Check parking</a>
        </li>
        <li className="myButton">
          <a href="/pricing">Pricing</a>
        </li>
        {/* <li className="myButton">
          <a href="/#">Check parking</a>
        </li> */}
        <li className="myButton">
          <a href="/#">Contact us</a>
        </li>
        <li className="slideButton" onClick={displayValShow}>
          Slide
        </li>
      </ul>
    </nav>
  );
}

export default CustomNavBar;
