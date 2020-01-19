import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Nav from "./components/nav";
import Footer from "./components/footer";

// Pages
import SingleProject from "./pages/singleProject";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="content-wrapper">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects/:project" exact component={SingleProject} />
            <Route path="/contact" exact component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
