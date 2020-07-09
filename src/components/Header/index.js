import React from "react";

function Header() {
    return (
        <header className="bg-splash-gray px3 py3 border-bottom border-light-gray">
            <div className="center">
                <a href="https://haakenjportfolio.herokuapp.com">
                    <img data-src={process.env.PUBLIC_URL + "kramer-johnson.png"} 
                        alt="Kramer Johnson" 
                        className=" border bg-white p1 border-light-gray circle square-100 lazyloaded" 
                        src={process.env.PUBLIC_URL + "kramer-johnson.png"} />
                </a>
                <div className="clearfix">
                    <a href="/">
                        <h1 className="page-title mt0 mb1">
                            Kramer Haaken Johnson
                        </h1>
                    </a>
                </div>
                <h2 className="sub-title body-font gray mt0 h3 regular">
                    <div>Full-Stack Software Developer,</div>
                    <div> Outdoorsman, and Avid Record Collector</div>
                </h2>
            </div>
        </header>
    )
}


export default Header;

