import React from "react";

import birds from "../images/projects/birds.jpg";
import bridge from "../images/projects/bridge.jpg";
import f_beach from "../images/projects/f_beach.jpg";
import fields from "../images/projects/fields.jpg";
import lake from "../images/projects/lake.jpg";
import oceans from "../images/projects/oceans.jpg";
import rayban from "../images/projects/rayban.jpg";
import sand from "../images/projects/sand.jpg";
import sunrise from "../images/projects/sunrise.jpg";

const projects = [
  { img: birds, name: "Birds", widthClass: "quarter" },
  { img: bridge, name: "bridge", widthClass: "half" },
  { img: f_beach, name: "Beach", widthClass: "quarter" },
  { img: fields, name: "fields", widthClass: "half" },
  { img: lake, name: "lake", widthClass: "half" },
  { img: oceans, name: "oceans", widthClass: "two-thirds" },
  { img: rayban, name: "rayban", widthClass: "third" },
  { img: sand, name: "sand", widthClass: "third" },
  { img: sunrise, name: "sunrise", widthClass: "two-thirds" }
];

const projectGallery = () => {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(({ img, name, widthClass }) => (
          <a
            key={name}
            href={`/${name.toLowerCase()}`}
            className={`project ${widthClass}`}
            rel="noopener noreferrer"
            style={{ backgroundImage: `url(${img})` }}
          >
            <h3 className="project-title">{name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default projectGallery;
