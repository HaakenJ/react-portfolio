import React from "react";

function AboutMe() {
    return (
        <main className="container block p3">
            <div className="clearfix mxn2">
                <div className="col sm-col-9 px2">
                    <h3 className="mb2">About me</h3>
                    <p>
                        Hi I'm Kramer, a full-stack devleloper who is never short on enthusiasm for learning about 
                        computer science.  When I'm not programming I love to ski, rock climb, and play classical guitar.  
                        I excel in the use of the MERN stack 
                        (MongoDB, Express, React, and Node.js), and am also experienced with MySQL. I have developed 
                        multiple projects in Python and Java and am comfortable working in object-oriented Design.
                         In the past I have worked as an accountant building the
                        <a href="https://southport.life/"> Southport On Lake Washington</a> complex, an English teacher 
                        in South Korea, and I even got to get paid to take dogs on hikes for a while.  As an accountant 
                        I have gained ample experience working on large datasets and projects with teams from with a wide 
                        variety of priorities and backgrounds. I earned my two Bachelor's degrees from Western Washington University 
                        in Economics and Philosophy which provided me with the logical and analyitical skills that have
                        turned me into the developer I am now.
                    </p>
                </div>
                <div className="col sm-col-3 px2">
                    <h3 className="mb2">Contact</h3>
                    <div className="clearfix">
                        <a href="https://www.linkedin.com/in/kramerhjohnson" target="_blank" rel="noopener noreferrer" className="col dark-gray width-120">
                            <i className="fa-fw fab fa-linkedin fa-2x valign-middle m1"></i>
                            <span className="h5 header-font">LinkedIn</span>
                        </a>
                        <a href="https://github.com/HaakenJ/" target="_blank" rel="noopener noreferrer" className="col dark-gray width-120">
                            <i class="fa-fw fab fa-github-square fa-2x valign-middle m1"></i>
                            <span className="h5 header-font">GitHub</span>
                        </a>
                        <a href="mailto:kramerhjohnson@gmail.com" target="_blank" rel="noopener noreferrer" className="col dark-gray width-120">
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