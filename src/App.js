import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Nav from "./components/nav";
import Hero from "./components/hero";
import Introduction from "./components/introduction";
import ProjectGallery from "./components/projectGallery";
import Contact from "./components/contact";
import Footer from "./components/footer";

// Pages
import SingleProject from "./pages/singleProject";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="content-wrapper">
          <Route
            path="/"
            exact
            render={() => (
              <>
                <Hero />
                <Introduction />
                <ProjectGallery />
                <Contact />
              </>
            )}
          />
          <Route path="/:project" exact component={SingleProject} />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
