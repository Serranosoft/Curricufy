import React from "react";

function ExtraInfoForm(props) {

    return (
        <div>
            <h3>¿Quieres agregar <span className="highlight">otras habilidades y/o proyectos?</span></h3>
            <form>
                <label>
                    Describe
                <span id="extraInfoError" className="ErrorInput"></span>
                    <input
                        id="extraInfoInput"
                        type="text"
                        name="extraInfoName"
                        value={props.extraInfoName}
                        onChange={props.handleChange}
                        maxLength="78"
                    />
                </label>

                <div className="f-a">
                    <button
                        className="btn"
                        onClick={props.addExtraInfos}>+ Añadir Información
                        </button>

                    <button
                        className="btn"
                        onClick={props.resetExtraInfo}>Eliminar Información
                        </button>
                </div>

            </form>
        </div>
    )

}

export default ExtraInfoForm