import React from "react";
import '../styles/Footer.css';
import icon from "../styles/images/favicon.png"

function Footer() {

    return (
        <footer>
            <img src={icon} className="logo"/>
            <span>Diseñado por <a href="twitter.com/ImScholz">Manuel Scholz</a></span>
        </footer>
    )
}


export default Footer;