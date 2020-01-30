import React from "react";
import { Link } from "react-router-dom";

import amitieiMain from "../images/projects/amitie/main.jpg";
import amitieImg from "../images/projects/amitie/1.png";

import castelliMain from "../images/projects/castelli/main.jpg";
import castelliImg from "../images/projects/castelli/1.png";

import dageniMain from "../images/projects/dageni/main.jpg";
import dageniImg from "../images/projects/dageni/1.png";

import iareMain from "../images/projects/iare/main.jpg";
import iareImg from "../images/projects/iare/1.png";

import resortsMain from "../images/projects/resorts/main.jpg";
import resortsImg from "../images/projects/resorts/1.png";

import n0llanMain from "../images/projects/n0llan/main.jpg";
import n0llanImg from "../images/projects/n0llan/1.png";

import soccioMain from "../images/projects/soccio/main.jpg";
import soccioImg from "../images/projects/soccio/1.png";

const projects = [
  {
    bg: amitieiMain,
    img: amitieImg,
    title: "Amitié",
    subtitle: "React application with 16.8 custom hooks-api"
  },
  {
    bg: soccioMain,
    img: soccioImg,
    title: "Soccio",
    subtitle:
      "Fullstack React / Node app with hosting and cloudfunctions from Firebase"
  },

  {
    bg: resortsMain,
    img: resortsImg,
    title: "Resorts",
    subtitle: "React site integrated with headless CMS"
  },
  {
    bg: castelliMain,
    img: castelliImg,
    title: "Castelli",
    subtitle: "Wordpress-site for showcase of luxurious homes"
  },
  {
    bg: n0llanMain,
    img: n0llanImg,
    title: "n0llan",
    subtitle: "Wordpress site with custom backend for event management"
  },
  {
    bg: dageniMain,
    img: dageniImg,
    title: "Dagen-I",
    subtitle: "Wordpress site for company/student-event"
  },
  {
    bg: iareMain,
    img: iareImg,
    title: "Iare",
    subtitle: "Wordpress site for a big organisation"
  }
];

const projectGallery = () => {
  return (
    <div id="projects">
      <h2 className="spaced">Recent Projects</h2>
      <div className="clearfix projects-grid">
        {projects.map(({ bg, title, subtitle }, index) => (
          <Link
            key={title}
            to={`/projects/${title.toLowerCase()}`}
            className={`project after-${index % 3}`}
            rel="noopener noreferrer"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="project-labels">
              <h3 className="project-title">{title}</h3>
              <p className="project-subtitle">{subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default projectGallery;
