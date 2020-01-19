import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Slider = ({ slideDuration, slides, arrows }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex(prevState => (prevState + 1) % slides.length);
    }, slideDuration);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="slider">
      {arrows && (
        <div className="navigation-arrows">
          <FontAwesomeIcon icon={faArrowLeft} />
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      )}
      {slides.map(({ bg, children }, index) => (
        <div
          key={index}
          style={{ backgroundImage: bg }}
          className={`slide ${currentIndex === index ? "active" : ""}`}
        >
          {children}
        </div>
      ))}
      <div className="controllers">
        {slides.map((_, index) => (
          <div
            key={index}
            className={currentIndex === index ? "active" : ""}
            onClick={() => {
              setCurrentIndex(index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
