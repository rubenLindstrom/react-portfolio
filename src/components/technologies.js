import React from "react";

import firebase from "../images/technologies/firebase.png";
import js from "../images/technologies/js.png";
import node from "../images/technologies/node.png";
import react from "../images/technologies/react.png";
import sass from "../images/technologies/sass.png";
import wordpress from "../images/technologies/wordpress.png";

const techs = [
  { img: firebase, name: "Firebase" },
  { img: js, name: "JS" },
  { img: node, name: "Node" },
  { img: react, name: "React" },
  { img: sass, name: "Sass" },
  { img: wordpress, name: "Wordpress" }
];

const technologies = () => {
  return (
    <div id="technologies">
      <h2>Some of the technologies we use</h2>
      <div className="tech-grid">
        {techs.map(({ img, name }) => (
          <figure key={name}>
            <img src={img} alt={name} />
            <figcaption>{name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default technologies;
