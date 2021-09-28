import React from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from '../config/particle-config.jsx';
import './ParticleBackground.css';

export default function ParticleBackground({ customClassName }) {
  console.log(customClassName + ' particles');
  return (
    <Particles
      className={customClassName + ' particle'}
      params={ParticleConfig}
    ></Particles>
  );
}
