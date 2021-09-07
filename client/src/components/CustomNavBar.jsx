import './CustomNavBar.css';

function CustomNavBar() {
  return (
    <nav className="test">
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
        {/* <li className="myButton">
          <a href="/#">Check parking</a>
        </li> */}
        <li className="myButton">
          <a href="/#">Contact us</a>
        </li>
      </ul>
    </nav>
  );
}

export default CustomNavBar;
