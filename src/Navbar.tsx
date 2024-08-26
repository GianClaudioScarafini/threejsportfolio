import React from "react";
import "./Navbar.css";



function Navbar() {

    const hendelScroll = (event:React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        // click get the li from ul
        const target = event.currentTarget as HTMLAnchorElement;
        const id = target.innerText;       
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
        <div className="Navbar">
            <ul className="ul-Navbar">
                <li className="About"> <a onClick={hendelScroll}>About</a></li>
                <li className="Experience"> <a onClick={hendelScroll}>Experience</a></li>
                <li className="Skills"> <a onClick={hendelScroll}>Skills</a></li>
                <li className="Projects"> <a onClick={hendelScroll}>Projects</a></li>
                <li className="Contact"> <a onClick={hendelScroll}>Contact</a></li>
            </ul>
        </div>

        </>
    )
}

export default Navbar
