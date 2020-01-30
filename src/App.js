import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

// Components
import Nav from "./components/nav";
import Footer from "./components/footer";

// Pages
import SingleProject from "./pages/singleProject";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";
import Home from "./pages/home";

const App = props => {
  useEffect(() => window.scrollTo(0, 0), [props.location.pathname]);
  return (
    <div className="App">
      <Nav />
      <div className="content-wrapper">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects/:project" exact component={SingleProject} />
          <Route path="/contact" exact component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(App);
