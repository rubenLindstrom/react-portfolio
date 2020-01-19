import React, { useState, useEffect } from "react";

const SLIDE_DURATION = 4500;

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const backgroundClasses = ["nature", "hills", "mountains"];
  const rollingTexts = [
    "full stack applications",
    "responsive websites",
    "user interfaces"
  ];

  let interval;

  const doSetInterval = () => {
    interval = setInterval(() => {
      setCurrentIndex(prevState => (prevState + 1) % backgroundClasses.length);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    doSetInterval();
    return () => clearInterval(interval);
  });

  const renderInnerText = text => (
    <div className="inner-wrapper">
      <h2>I'm Ruben.</h2>
      <h2>
        I build beautiful <span class="rolling-text">{text}</span>
      </h2>
      <div className="buttons">
        <button>View Portfolio</button>
        <button>Hire Me</button>
      </div>
    </div>
  );
  return (
    <div class="hero">
      <div
        className={`slide ${currentIndex === 0 ? "active" : ""}`}
        id="slide-nature"
      >
        {renderInnerText(rollingTexts[0])}
      </div>
      <div
        className={`slide ${currentIndex === 1 ? "active" : ""}`}
        id="slide-hills"
      >
        {renderInnerText(rollingTexts[1])}
      </div>
      <div
        className={`slide ${currentIndex === 2 ? "active" : ""}`}
        id="slide-mountain"
      >
        {renderInnerText(rollingTexts[2])}
      </div>
      <div className="controllers">
        <div
          className={currentIndex === 0 ? "active" : ""}
          onClick={() => {
            setCurrentIndex(0);
            clearInterval(interval);
            doSetInterval();
          }}
        ></div>
        <div
          className={currentIndex === 1 ? "active" : ""}
          onClick={() => {
            setCurrentIndex(1);
            clearInterval(interval);
            doSetInterval();
          }}
        ></div>
        <div
          className={currentIndex === 2 ? "active" : ""}
          onClick={() => {
            setCurrentIndex(2);
            clearInterval(interval);
            doSetInterval();
          }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
