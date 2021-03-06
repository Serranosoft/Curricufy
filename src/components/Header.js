import React from "react";
import '../styles/Header.css';
import logo from "../styles/images/logo.png"
function Header() {
    return (
        <header>
            <img src={logo} className="logo"/>
        </header>
    )
}


export default Header;