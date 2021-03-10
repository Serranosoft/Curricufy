import React from "react";

function LangInfoForm(props) {
    return (
        <div>
            <h3>Añade algunos <span className="highlight">idiomas</span></h3>
            <form className="col-2" id="langInfoForm">
                <label> Idioma
                <span id="langNameError" className="ErrorInput"></span>
                    <input
                        type="text"
                        value={props.langName}
                        name="langName"
                        maxLength="15"
                        onChange={props.handleChange} />
                </label>

                <label> Nivel
                    <select value={props.level} onChange={props.handleChange}>
                        <option value="Basico">Bajo</option>
                        <option value="Intermedio (Bajo)">Intermedio-bajo</option>
                        <option value="Intermedio (Alto)">Intermedio-alto</option>
                        <option value="Alto">Alto</option>
                        <option value="Nativo">Nativo</option>
                    </select>
                </label>

                <label> Elige un color
                    <input 
                        type="color" 
                        value={props.langColor} 
                        onChange={props.handleColor} />
                </label>

                <div className="f-e">
                    <button
                        className="btn"
                        onClick={props.addLang}>+ Añadir Idioma
                </button>
                    <button
                        className="btn"
                        onClick={props.resetLang}>Eliminar Idioma
                </button>
                </div>

            </form>
        </div>
    )
}

export default LangInfoForm