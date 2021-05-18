import React from "react";

function ExperienceInfoForm({handleChange, addWorks, resetWorks, ...data}) {

    return (
        <div>
            <h3>¿Quieres añadir <span className="highlight">experiencia laboral?</span></h3>
            <form className="col-2">

                <label>Empresa:
                    <span id="companyNameError" className="ErrorInput"></span>
                    <input
                        type="text"
                        value={data.companyName}
                        name="companyName"
                        onChange={handleChange} />
                </label>

                <label>Posición en la empresa:
                    <span id="companyPositionError" className="ErrorInput"></span>
                    <input
                        type="text"
                        value={data.companyPosition}
                        name="companyPosition"
                        onChange={handleChange} />
                </label>

                <label>¿Cuando empezaste a trabajar?
                    <span id="startWorkingError" className="ErrorInput"></span>
                    <input
                        type="date"
                        value={data.startWorking}
                        name="startWorking"
                        onChange={handleChange}
                    />

                </label>

                <label>¿Cuando terminaste de trabajar?
                    <span id="finishWorkingError" className="ErrorInput"></span>
                    <input
                        type="date"
                        value={data.finishWorking}
                        name="finishWorking"
                        onChange={handleChange}
                    />

                </label>

                <label>Describe brevemente tu trabajo
                    <span id="workDescriptionError" className="ErrorInput"></span>
                    <textarea
                        value={data.workDescription}
                        name="workDescription"
                        onChange={handleChange}
                    />

                </label>

                <div className="f-e">
                    <button
                        className="btn add"
                        onClick={addWorks}>+ Añadir Trabajo
                    </button>

                    <button
                        className="btn add"
                        onClick={resetWorks}>Eliminar trabajo
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ExperienceInfoForm