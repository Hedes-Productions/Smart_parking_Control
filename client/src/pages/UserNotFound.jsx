import React from 'react';
import CardUI from '../components/CardUI';
import CustomContainer from '../components/CustomContainer';
import ParticleBackground from '../components/ParticleBackground';
import { ReactFlashlight } from 'react-flashlight';
import './UserNotFound.css';

function UserNotFound() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = React.useState(true);

  React.useState(() => {
    let id;
    id = setInterval(() => {
      const point = { x: Math.random() * 500, y: Math.random() * 530 };
      setPosition(point);
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const style = {
    height: '100vh',
    width: '100vw',
  };
  return (
    <div>
      <div className="message">
        <h1 className="error">404</h1>
        {/* <p className="upper"></p> */}
        <p className="bottom">Something wrong...</p>
      </div>
      <ParticleBackground />
    </div>
  );
}

export default UserNotFound;
