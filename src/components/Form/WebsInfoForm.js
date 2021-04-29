import React from "react";

function WebsInfoForm(props) {

    return (
        <div>
            <h3>¿Quieres agregar <span className="highlight">tus páginas web?</span></h3>
            <form>
                <label>
                    URL de la página web
                <span id="webInfoError" className="ErrorInput"></span>
                    <input
                        id="webUrlInput"
                        type="text"
                        name="webUrl"
                        value={props.webUrl}
                        onChange={props.handleChange}
                        maxLength="50"
                    />
                </label>

                <label>
                    Descripción de la página web
                <span id="webInfoError" className="ErrorInput"></span>
                    <textarea
                        name="webDescription"
                        value={props.webDescription}
                        onChange={props.handleChange}
                    />
                </label>

                <div className="f-e">
                    <button
                        className="btn"
                        onClick={props.addWeb}>+ Añadir página web 
                        </button>

                    <button
                        className="btn"
                        onClick={props.resetWeb}>Eliminar página web
                        </button>
                </div>

            </form>
        </div>
    )

}

export default WebsInfoForm