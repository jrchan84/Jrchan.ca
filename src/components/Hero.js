import React, { useCallback } from 'react';
import { loadGradientUpdater } from "tsparticles-updater-gradient";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './Hero.css';

const Hero = () => {
  var mediaQuery = window.matchMedia("(min-width: 768px)");
  var options;
  function resizeParticles(query) {
    if (query.matches) {
      options =
        {
          fpsLimit: 120,
          fullScreen: {
            enable: false
          },
          particles: {
            gradient: [
               {
                 type: "linear",
                 angle: {
                   enable: true,
                   velocity: 50
                 },
                 colors: [
                   {
                     stop: 0.25,
                     value: "#78ffc7"
                   },
                   {
                     stop: 1,
                     value: "#49ffd4",
                     opacity: 0.3
                   }
                 ]
               },
               {
                 type: "linear",
                 colors: [
                   {
                     stop: 0.25,
                     value: "#d1a0fc"
                   },
                   {
                     stop: 1,
                     value: "#8e79fa",
                     opacity: 1
                   }
                 ]
               },
               {
                 type: "linear",
                 colors: [
                   {
                     stop: 0.25,
                     value: "#5ddbff"
                   },
                   {
                     stop: 1,
                     value: "#35bdff",
                     opacity: 1
                   }
                 ]
               },
             ],
            collisions: {
              enable: false,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.7,
              straight: false,
            },
            number: {
              value: 4,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 100, max: 200 },
            },
          },
          detectRetina: true,
        }
    } else {
      options =
      {
        fpsLimit: 120,
        fullScreen: {
          enable: false
        },
        particles: {
          gradient: [
             {
               type: "linear",
               angle: {
                 enable: true,
                 velocity: 50
               },
               colors: [
                 {
                   stop: 0.25,
                   value: "#78ffc7"
                 },
                 {
                   stop: 1,
                   value: "#49ffd4",
                   opacity: 0.3
                 }
               ]
             },
             {
               type: "linear",
               colors: [
                 {
                   stop: 0.25,
                   value: "#d1a0fc"
                 },
                 {
                   stop: 1,
                   value: "#8e79fa",
                   opacity: 1
                 }
               ]
             },
             {
               type: "linear",
               colors: [
                 {
                   stop: 0.25,
                   value: "#5ddbff"
                 },
                 {
                   stop: 1,
                   value: "#35bdff",
                   opacity: 1
                 }
               ]
             },
           ],
          collisions: {
            enable: false,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.7,
            straight: false,
          },
          number: {
            value: 3,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 75, max: 150 },
          },
        },
        detectRetina: true,
      }
    }
  }

  resizeParticles(mediaQuery);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
    loadGradientUpdater(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="hero">
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      />
      <div className="hero-container">
        <div className="hero-portrait-container">
          <img className="hero-portrait" src="/assets/images/about-profile.png" alt="About Images"/>
        </div>
        <div className="hero-content">
          <h1>Hi, I'm Justin, but people like to call me Jrc.</h1>
          <h2>I'm a </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
