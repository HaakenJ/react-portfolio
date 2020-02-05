import React from "react";

function AboutMe() {
    return (
        <main className="container block p3">
            <div className="clearfix mxn2">
                <div className="col sm-col-9 px2">
                    <h3 className="mb2">About me</h3>
                    <p>
                        
                    </p>
                </div>
                <div className="col sm-col-3 px2">
                    <h3 className="mb2">Contact</h3>
                    <div className="clearfix">
                        <a href="https://www.linkedin.com/in/jbrikman" target="_blank" className="col dark-gray width-120">
                            <i className="fa-fw fab fa-linkedin fa-2x valign-middle m1"></i>
                            <span className="h5 header-font">LinkedIn</span>
                        </a>
                        <a href="https://github.com/brikis98/" target="_blank" className="col dark-gray width-120">
                            <i class="fa-fw fab fa-github-square fa-2x valign-middle m1"></i>
                            <span className="h5 header-font">GitHub</span>
                        </a>
                        <a href="mailto:jim@ybrikman.com" target="_blank" className="col dark-gray width-120">
                            <i class="fas fa-fw fa-2x fa-envelope-square valign-middle m1"></i>
                            <span className="h5 header-font">Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutMe;