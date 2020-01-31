import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Components
import Slider from "../components/slider";
import { Banner, GoBack } from "../components/atoms";

import projects from "../models/projects";

const singleProject = props => {
  const projectKey = props.match.params.project;

  // TODO: Project not found
  const {
    title,
    subtitle,
    banner,
    bannerGradient,
    slides,
    text,
    link,
    prev,
    next
  } = projects[projectKey];

  const sliderSettings = {
    slideDuration: 4000,
    slides: slides.map(slide => ({
      bg: `url(${slide})`
    })),
    arrows: true
  };

  return (
    <>
      <Banner bg={`${bannerGradient}, url(${banner})`}>
        <GoBack to="projects" path="/#projects" />
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </Banner>
      <div className="gray-section">
        <div className="container">{text}</div>
      </div>
      <div id="project-gallery">
        <div className="padded container">
          <h2>Gallery</h2>
        </div>
        <div className="projects-slider">
          <Slider {...sliderSettings} />
        </div>
        {link && (
          <button className="button-primary inverted filled center spaced">
            <a href={link} target="_blank" rel="noopener noreferrer">
              See the website
            </a>
          </button>
        )}
      </div>
      <div className="projects-navigator">
        <div className="navigation-container">
          <a href={prev} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faArrowLeft} /> Prev Project
          </a>
        </div>
        <div className="navigation-container">
          <a href={next} target="_blank" rel="noopener noreferrer">
            Next Project <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        <div className="gray-section">
          <button
            id="hire-me-button"
            className="button-primary inverted center"
          >
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
};

export default singleProject;
