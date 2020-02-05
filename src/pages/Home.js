import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header"
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Header />
            <AboutMe />
            <Footer />
        </div>
    )
}

export default Home;