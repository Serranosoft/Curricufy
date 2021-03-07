import React from "react";
import { Link } from "react-router-dom"
import exampleCv from "../styles/images/exampleCv.png"
import "../styles/Home.css"
import Header from "./Header"
import Footer from "./Footer"


function Home() {
    return (
        <div id="homeContainer">
            <Header />
            <div id="homeWrapper">
                <h1>Construye fácilmente un CV bonito y moderno</h1>
                <Link to="/crear" className="linkHome">Crear Cv</Link>
                <img
                    src={exampleCv}
                    className="exampleCv roll-in-top"
                    draggable="false" />
            </div>
            <Footer />
        </div>
    )
}

export default Home;