import React from "react";

function ProjectList() {
    return (
        <main className="container block p3">
            <div className="mxn2 clearfix mb2 py3 border-bottom border-light-gray circle-line ">
                <div className="col sm-col-4 px2 mb2">
                    <a href="https://github.com/HaakenJ/AdoptAPlant" target="_blank" rel="noopener noreferrer">
                        <img data-src={process.env.PUBLIC_URL + "adoptaplant.png"} 
                            alt="WhatsMyData" className="lazyloaded" 
                            src={process.env.PUBLIC_URL + "adoptaplant.png"} />
                    </a>
                </div>
                <div className="col sm-col-8 px2">
                    <a href="https://github.com/HaakenJ/AdoptAPlant" 
                        target="_blank" rel="noopener noreferrer" 
                        name="gruntwork">
                        <h2 className="mt0 mb0">
                            In Progress: AdopAPlant
                        </h2>
                    </a>
                    <a href="https://github.com/HaakenJ/AdoptAPlant" 
                        target="_blank" rel="noopener noreferrer" 
                        className="block h6 mb2">https://github.com/HaakenJ/AdoptAPlant
                    </a>
                    <p className="left-align">
                        This project is currently in progress and I am very excited about it.  My team and I 
                        are creating a MERN stack application that is connected with a Raspberry Pi automatic 
                        plant care system.  Users can sign up for our website and 'Adopt a Plant'.  The user will 
                        be able to log in, see a live stream video of their plant, see data such as temperature, 
                        amibient humidity, soil humidity, and light levels.  The user is presented with a button that 
                        allows them to water their plant whenever they feel necessary and watch it happen!
                    </p>
                    <p>
                        Feel free to follow us on the Github repo to see the final result!
                    </p>
                </div>
            </div>
            <div className="mxn2 clearfix mb2 py3 border-bottom border-light-gray circle-line ">
                <div className="col sm-col-4 px2 mb2">
                    <a href="https://whatsmydata.herokuapp.com" target="_blank" rel="noopener noreferrer">
                        <img data-src={process.env.PUBLIC_URL + "whatsmydata.png"} 
                            alt="WhatsMyData" className="lazyloaded" 
                            src={process.env.PUBLIC_URL + "whatsmydata.png"} />
                    </a>
                </div>
                <div className="col sm-col-8 px2">
                    <a href="https://whatsmydata.herokuapp.com" 
                        target="_blank" rel="noopener noreferrer" 
                        name="gruntwork">
                        <h2 className="mt0 mb0">
                            WhatsMyData?
                        </h2>
                    </a>
                    <a href="https://whatsmydata.herokuapp.com" 
                        target="_blank" rel="noopener noreferrer" 
                        className="block h6 mb2">https://whatsmydata.herokuapp.com
                    </a>
                    <a href="https://github.com/HaakenJ/WhatsMyData" 
                        target="_blank" rel="noopener noreferrer" 
                        className="block h6 mb2">https://github.com/HaakenJ/WhatsMyData
                    </a>
                    <p className="left-align">What's My Data? is an education website to teach users about what basic 
                        info every website they visit is able to gather on them.  I was inspired to build this site after 
                        seeing news articles telling people that their data is being used by so-and-so companies.  I realized 
                        most people who see these articles are most likely asking themselves, "What's my data?".  The website 
                        also logs basic info about the visitors and displays the info in charts.
                    </p>
                    <p>
                        I designed the front end using jQuery and Materialize. Designed the back end using Node.js, Express, MySQL, and Sequelize. This was a highly educational project where I 
                        got to learn about data gathering techniques using user-agent strings along with a few tricks to get data such as what social media sites a user is logged 
                        into or how to check if a user has visited certain websites.
                    </p>
                </div>
            </div>
            <div className="mxn2 clearfix mb2 py3 border-bottom border-light-gray circle-line ">
                <div className="col sm-col-4 px2 mb2">
                    <a href="https://HaakenJ.github.io/Light-Snow/" target="_blank" rel="noopener noreferrer">
                        <img data-src={process.env.PUBLIC_URL + "lightsnow.png"} 
                            alt="LightSnow" className="lazyloaded" 
                            src={process.env.PUBLIC_URL + "lightsnow.png"} />
                    </a>
                </div>
                <div className="col sm-col-8 px2">
                    <a href="https://HaakenJ.github.io/Light-Snow/" target="_blank" rel="noopener noreferrer">
                        <h2 className="mt0 mb0">LightSnow</h2>
                    </a>
                    <a href="https://HaakenJ.github.io/Light-Snow/" 
                        target="_blank" rel="noopener noreferrer" 
                        className="block h6 mb2">
                            https://HaakenJ.github.io/Light-Snow
                    </a>
                    <a href="https://github.com/HaakenJ/Light-Snow/" 
                        target="_blank" rel="noopener noreferrer" 
                        className="block h6 mb2">
                            https://github.com/HaakenJ/Light-Snow
                    </a>
                    <a href="https://imgur.com/gallery/czgMh7R" 
                        target="_blank" rel="noopener noreferrer" 
                        className="block h6 mb2">
                            Click to See the Light Show!
                    </a>
                    <p className="left-align">
                        Light-Snow is a web application built for skiers and snowboarders. Users can check the weather at their favorite ski resorts 
                        quickly getting only the most important info. The app has integration with LIFX color changing light bulbs so the user can 
                        have a light in their bedroom change color depending on the weather at the resort.
                    </p>
                    <p>
                        To create the site I used jQuery AJAX calls to the OpenWeather API, Google Maps API, and the LIFX Color Changing Lightbulb API.  
                        For the database I used Firebase Realtime Database.  Users are able to log in with the Google accounts using Firebase Authentication 
                        then add their own resorts or save their favorites.
                    </p>
                </div>
            </div>
            <div className="mxn2 clearfix mb2 py3 border-bottom border-light-gray circle-line ">
                <div className="col sm-col-4 px2 mb2">
                    <a href="https://friendfinder-12345.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img data-src={process.env.PUBLIC_URL + "friendfinder.png"} 
                            alt="FriendFinder" className="  lazyloaded" 
                            src={process.env.PUBLIC_URL + "friendfinder.png"} />
                    </a>
                </div>
                <div className="col sm-col-8 px2">
                    <a href="https://friendfinder-12345.herokuapp.com/" 
                        target="_blank" rel="noopener noreferrer" 
                        name="terraform:-up-&amp;-running">
                        <h2 className="mt0 mb0">
                            FriendFinder
                        </h2>
                    </a>
                    <a href="https://friendfinder-12345.herokuapp.com/" 
                        target="_blank" rel="noopener noreferrer" 
                        className="block h6 mb2">https://friendfinder-12345.herokuapp.com/
                    </a>
                    <a href="https://github.com/HaakenJ/FriendFinder" 
                        target="_blank" rel="noopener noreferrer" 
                        className="block h6 mb2">https://github.com/HaakenJ/FriendFinder
                    </a>
                    <p className="left-align">
                        FriendFinder is a web app for finding new friends and love interests. 
                        Users enter their name, a photo url, choose their gender and gender 
                        preference, answer ten questions about themselves, and hit submit 
                        to see who their closest match is.
                    </p>
                </div>
            </div>
        </main>
    )
}


export default ProjectList;