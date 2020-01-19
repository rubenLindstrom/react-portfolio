import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-regular-svg-icons";

import Slider from "../components/slider";

import Birds from "../images/projects/birds.jpg";
import bridge from "../images/projects/bridge.jpg";
import f_beach from "../images/projects/f_beach.jpg";
import fields from "../images/projects/fields.jpg";
import lake from "../images/projects/lake.jpg";

const projects = {
  castelli: {
    title: "Castelli",
    subtitle: "Realators of luxurious homes in the Swedish archipelago",
    banner: Birds,
    bannerGradient:
      "linear-gradient(135deg, rgba(145, 0, 217, .88), rgba(0, 182, 227, .82))",
    slides: [
      {
        bg: `url(${Birds})`
      },
      {
        bg: `url(${bridge})`
      },
      {
        bg: `url(${f_beach})`
      },
      {
        bg: `url(${fields})`
      },
      {
        bg: `url(${lake})`
      }
    ]
  }
};

const singleProject = props => {
  const projectKey = props.match.params.project;

  const { title, subtitle, banner, bannerGradient, slides } = projects[
    projectKey
  ];

  const sliderSettings = {
    slideDuration: 4000,
    slides,
    arrows: true
  };

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `${bannerGradient}, url(${banner})`
        }}
      >
        <div className="inner-wrapper">
          <div className="go-back">
            <FontAwesomeIcon icon={faHandPointLeft} /> Back to projects
          </div>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
      </div>
      <div className="gray-section">
        <h2>A brand new look</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
          cursus massa. Nullam et mi condimentum, convallis erat a, lobortis
          urna. Aliquam nec sodales metus. Duis in viverra velit, nec cursus
          ipsum. In hac habitasse platea dictumst. Vivamus ex leo, sollicitudin
          a orci sit amet, finibus faucibus urna. Cras magna odio, commodo a sem
        </p>
      </div>
      <div id="project-gallery">
        <h2>Gallery</h2>
        <h3>The brief</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
          cursus massa. Nullam et mi condimentum, convallis erat a, lobortis
          urna. Aliquam nec sodales metus. Duis in viverra velit, nec cursus
          ipsum. In hac habitasse platea dictumst. Vivamus ex leo, sollicitudin
          a orci sit amet, finibus faucibus urna. Cras magna odio, commodo a sem
        </p>
        <h3>Showcase</h3>
        <div className="projects-slider">
          <Slider {...sliderSettings} />
        </div>
      </div>
    </>
  );
};

export default singleProject;
