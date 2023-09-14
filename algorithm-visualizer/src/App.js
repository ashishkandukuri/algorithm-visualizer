import React, { Component } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./homeComponents/home";
import Seive from "./primeComponents/seive";
import Sort from "./sortComponents/sort";

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prime" element={<Seive />} />
          <Route path="/sort" element={<Sort />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
