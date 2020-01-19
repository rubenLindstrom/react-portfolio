import React from "react";

import Slider from "./slider.js";

const hero = () => {
  const rollingTexts = [
    "full stack applications",
    "responsive websites",
    "user interfaces"
  ];

  const renderInnerText = text => (
    <div className="inner-wrapper">
      <h2>I'm Ruben.</h2>
      <h2>
        I build beautiful <span className="rolling-text">{text}</span>
      </h2>
      <div className="buttons">
        <button>View Portfolio</button>
        <button>Hire Me</button>
      </div>
    </div>
  );

  const sliderSettings = {
    slideDuration: 3500,
    slides: [
      {
        bg:
          "linear-gradient(135deg, rgba(222, 0, 63, 0.8),rgba(235, 74, 0, 0.8)),url('./images/nature.jpg')",
        children: renderInnerText(rollingTexts[0])
      },
      {
        bg:
          "linear-gradient(135deg, rgba(148, 0, 222, 0.8),rgba(0, 176, 235, 0.8)),url('./images/hills.jpg')",
        children: renderInnerText(rollingTexts[1])
      },
      {
        bg:
          "linear-gradient(135deg,  rgba(0, 222, 96, 0.8),rgba(0, 188, 235, 0.8)),url('./images/mountain.jpg')",
        children: renderInnerText(rollingTexts[2])
      }
    ]
  };

  return (
    <div className="hero">
      <Slider {...sliderSettings} />
    </div>
  );
};

export default hero;
