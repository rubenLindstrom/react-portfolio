import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Components
import Slider from "../components/slider";
import { Banner, GoBack, Technology } from "../components/atoms";

import projects from "../models/projects";

const singleProject = (props) => {
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
    next,
    technologies,
  } = projects[projectKey];

  const sliderSettings = {
    slideDuration: 4000,
    slides: slides.map((slide) => ({
      bg: `url(${slide})`,
    })),
    arrows: true,
  };

  return (
    <>
      <Banner bg={`${bannerGradient}, url(${banner})`}>
        <GoBack to="projects" path="/#projects" />
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </Banner>
      <div className="gray-section">
        <div className="container padded">
          {text}
          <h2 className="mt">Technologies used</h2>
          <div style={{ display: "flex", alignItems: "center" }}>
            {technologies.map(({ img, name }) => (
              <Technology img={img} key={name} name={name} />
            ))}
          </div>
        </div>
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
          <Link to={`/projects/${prev}`} rel="noopener noreferrer">
            <FontAwesomeIcon icon={faArrowLeft} /> Prev Project
          </Link>
        </div>
        <div className="navigation-container">
          <Link to={`/projects/${next}`} rel="noopener noreferrer">
            Next Project <FontAwesomeIcon icon={faArrowRight} />
          </Link>
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
