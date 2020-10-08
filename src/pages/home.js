import React, { useEffect } from "react";

import Hero from "../components/hero";
import Introduction from "../components/introduction";
import ProjectGallery from "../components/projectGallery";
import ContactMe from "../components/contact";

const Home = props => {
  useEffect(() => {
    if (props.location.hash) window.location.href = props.location.hash;
  }, [props.location.hash]);

  return (
    <>
      <Hero />
      <Introduction />
      <ProjectGallery />
      <ContactMe />
    </>
  );
};

export default Home;
