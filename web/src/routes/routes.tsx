
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/Home";
const Routes = () => {
    return (
      <BrowserRouter>
        <Route name="Home" path="/" exact component={Home} />
      </BrowserRouter>
    );
  };
  
  export default Routes;
  