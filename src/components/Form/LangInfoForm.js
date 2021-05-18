import React from "react";

function LangInfoForm({handleChange, addLangs, resetLangs, ...data}) {
    return (
        <div>
            <h3>Añade algunos <span className="highlight">idiomas</span></h3>
            <form className="col-2" id="langInfoForm">
                <label> Idioma
                <span id="langNameError" className="ErrorInput"></span>
                    <input
                        type="text"
                        value={data.langName}
                        name="langName"
                        maxLength="15"
                        onChange={handleChange} />
                </label>

                <label> Nivel
                    <select value={data.level} onChange={handleChange} name="level">
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
                        name="langColor"
                        value={data.langColor} 
                        onChange={handleChange} />
                </label>

                <div className="f-e">
                    <button
                        className="btn"
                        onClick={addLangs}>+ Añadir Idioma
                </button>
                    <button
                        className="btn"
                        onClick={resetLangs}>Eliminar Idioma
                </button>
                </div>

            </form>
        </div>
    )
}

export default LangInfoForm