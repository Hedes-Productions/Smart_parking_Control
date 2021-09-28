const particlesConfig = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
      },
    },
    color: {
      value: '#2196f3',
    },
    shape: { options: {}, type: 'circle' },
    size: {
      value: 7,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.3,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 10,
      direction: 'top',
      out_mode: 'out',
      bounce: false,
    },
  },
  // interactivity: {
  //   events: {
  //     onhover: {
  //       enable: true,
  //       mode: 'bubble',
  //     },
  //     onclick: {
  //       enable: true,
  //       mode: 'repulse',
  //     },
  //   },
  //   modes: {
  //     bubble: {
  //       distance: 250,
  //       duration: 2,
  //       size: 0,
  //       opacity: 0,
  //     },
  //     repulse: {
  //       distance: 400,
  //       duration: 4,
  //     },
  //   },
  // },
};

export default particlesConfig;
