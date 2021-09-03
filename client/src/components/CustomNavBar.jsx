import './CustomNavBar.css';

function CustomNavBar() {
  return (
    <nav className="test">
      <ul className="nav-links">
        <li className="myButton">
          <a href="/#" className="custom-underline">
            Directions
          </a>
        </li>
        <li className="myButton">
          <a href="/#">Online Pay</a>
        </li>
        <li className="myButton">
          <a href="/#">Check parking</a>
        </li>
        <li className="myButton">
          <a href="/#">Contact us</a>
        </li>
      </ul>
    </nav>
  );
}

export default CustomNavBar;
