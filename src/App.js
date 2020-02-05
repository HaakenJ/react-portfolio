import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header"
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Header />
        <AboutMe />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
