import React from "react";

function ExperienceInfoForm(props) {

    return (
        <div>
            <h3>¿Quieres añadir <span className="highlight">experiencia laboral?</span></h3>
            <form className="col-2">

                <label>Empresa:
                    <span id="companyNameError" className="ErrorInput"></span>
                    <input
                        type="text"
                        value={props.companyName}
                        name="companyName"
                        onChange={props.handleChange} />
                </label>

                <label>Posición en la empresa:
                    <span id="companyPositionError" className="ErrorInput"></span>
                    <input
                        type="text"
                        value={props.companyPosition}
                        name="companyPosition"
                        onChange={props.handleChange} />
                </label>

                <label>¿Cuando empezaste a trabajar?
                    <span id="startWorkingError" className="ErrorInput"></span>
                    <input
                        type="date"
                        value={props.startWorking}
                        name="startWorking"
                        onChange={props.handleChange}
                    />

                </label>

                <label>¿Cuando terminaste de trabajar?
                    <span id="finishWorkingError" className="ErrorInput"></span>
                    <input
                        type="date"
                        value={props.finishWorking}
                        name="finishWorking"
                        onChange={props.handleChange}
                    />

                </label>

                <label>Describe brevemente tu trabajo
                    <span id="workDescriptionError" className="ErrorInput"></span>
                    <textarea
                        value={props.workDescription}
                        name="workDescription"
                        onChange={props.handleChange}
                    />

                </label>

                <div className="f-e">
                    <button
                        className="btn add"
                        onClick={props.addWorks}>+ Añadir Trabajo
                    </button>

                    <button
                        className="btn add"
                        onClick={props.resetWorks}>Eliminar trabajo
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ExperienceInfoForm