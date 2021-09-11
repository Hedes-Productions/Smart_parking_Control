import './CardUI.css';
import Tilt from 'react-tilt';

function CardUI({ name, description, backgroundImage, topNumber, pageURL }) {
  return (
    <Tilt
      className="Tilt"
      options={{
        reverse: false, // reverse the tilt direction
        max: 28, // max tilt rotation (degrees)
        perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
        speed: 300, // Speed of the enter/exit transition
        transition: true, // Set a transition on enter/exit.
        axis: null, // What axis should be disabled. Can be X or Y.
        reset: true, // If the tilt effect has to be reset on exit.
        easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
      }}
    >
      <a className="cardm" href={pageURL}>
        <img src={backgroundImage} alt="" className="backImage" />
        <div></div>
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <div className="date">{topNumber}</div>
          <div className="tags">{/* <div className="tag">HTML</div> */}</div>
        </div>
      </a>
    </Tilt>
  );
}
// background-image: url('https://www.hdnicewallpapers.com/Walls/Normal/Lamborghini/4K_Car_Wallpaper_of_2019_Lamborghini_SC18_Alston.jpg');
// background-repeat: no-repeat;
// background-size: cover;

export default CardUI;
