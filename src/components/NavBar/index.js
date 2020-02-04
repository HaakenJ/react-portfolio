import React from "react";

export function NavBar({
    logo,
    children 
}) {
    return (
        <nav className="clearfix border-bottom border-light-gray">
            <div className="left">
                <a href="/" className="button py2 button-transparent nav-button caps">Kramer Haaken Johnson</a>
            </div>
            <a href="/" className="nav-toggle" aria-hidden="true">Menu</a>
            <ul className="right list-reset m0 nav-collapse nav-collapse nav-collapse-0 closed" aria-hidden="false">
                <li className="inline-block m0">
                    <a  href="sass.html" className="button button-transparent py2 h6 nav-button caps">Sass</a>
                </li>
                <li className="inline-block m0">
                    <a  href="badges.html" className="button button-transparent py2 h6 nav-button caps">Components</a>
                </li>
                <li className="inline-block m0">
                    <a  href="collapsible.html" className="button button-transparent py2 h6 nav-button caps">JavaScript</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;