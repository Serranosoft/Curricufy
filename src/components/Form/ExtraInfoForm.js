import React from "react";

function ExtraInfoForm({handleChange, addExtraInfos, resetExtraInfo, extraInfoName}) {

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
                        value={extraInfoName}
                        onChange={handleChange}
                        maxLength="78"
                    />
                </label>

                <div className="f-a">
                    <button
                        className="btn"
                        onClick={addExtraInfos}>+ Añadir Información
                        </button>

                    <button
                        className="btn"
                        onClick={resetExtraInfo}>Eliminar Información
                        </button>
                </div>

            </form>
        </div>
    )

}

export default ExtraInfoForm