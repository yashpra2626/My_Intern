import React from "react";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";



function App() {

  let routes;

    routes = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Redirect to="/" />
      </Switch>
    );
  
 
  return (
   
      <Router>
        <Navbar />
        <main>{routes}</main>
      </Router>
  
  );
}

export default App;
