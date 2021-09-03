import React from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from '../config/particle-config.jsx';
import './ParticleBackground.css';

export default function ParticleBackground() {
  return <Particles className="particle" params={ParticleConfig}></Particles>;
}
