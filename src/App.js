import React from "react";

// Components
import Nav from "./components/nav";
import Hero from "./components/hero";
import Introduction from "./components/introduction";
import ProjectGallery from "./components/projectGallery";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content-wrapper">
        <Hero />
        <Introduction />
        <ProjectGallery />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
