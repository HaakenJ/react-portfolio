import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header"
import AboutMe from "./components/AboutMe";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
