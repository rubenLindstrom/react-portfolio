import React from "react";

import TECHNOLOGIES from "../models/technologies";

import { Technology } from "./atoms";

const techs = [
  TECHNOLOGIES.FIREBASE,
  TECHNOLOGIES.JS,
  TECHNOLOGIES.NODE,
  TECHNOLOGIES.REACT,
  TECHNOLOGIES.SASS,
  TECHNOLOGIES.WORDPRESS,
];

const technologies = () => {
  return (
    <div id="technologies">
      <h2>Some of the technologies we use</h2>
      <div className="tech-grid">
        {techs.map(({ img, name }) => (
          <Technology key={name} img={img} name={name} />
        ))}
      </div>
    </div>
  );
};

export default technologies;
