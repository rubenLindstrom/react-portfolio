import React from "react";

import { Banner, GoBack } from "../components/atoms";

import sand from "../images/projects/sand.jpg";

const notFound = () => {
  return (
    <Banner
      bg={`linear-gradient(135deg, rgba(145, 0, 217, .88), rgba(0, 182, 227, .82)), url(${sand})`}
    >
      <GoBack to="home" path="/" />
      <h1>404 - Page not found</h1>
    </Banner>
  );
};

export default notFound;
