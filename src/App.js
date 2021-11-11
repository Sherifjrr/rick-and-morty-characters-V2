import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Details from "./Details";
import Footer from "./Footer";
import Page404 from "./404";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/character/:id" component={Details} />
        <Route exact path="/404" component={Page404} />
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
