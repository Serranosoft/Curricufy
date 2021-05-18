import React from "react";
import RoundImg from "../../styles/images/round.png"

function SkillsInfoForm({addSkills, resetSkills, handleRound, skillInput}) {

    return (
        <div>
            <div className="f-b">
                <h3>Añade unos logos para <span className="highlight">tus habilidades</span></h3>
                <img
                    className="GridOptions"
                    id="roundImg"
                    src={RoundImg}
                    onClick={handleRound}
                />
            </div>
            <span className="ErrorInput" id="skillsError"></span>
            <form className="f-a" id="skillsInfoForm">

                <input
                    type="file"
                    className="handleFiles"
                    ref={skillInput}
                    multiple />
                <button
                    className="btn"
                    onClick={addSkills}>+ Añadir Habilidad
                </button>
                <button
                    className="btn"
                    onClick={resetSkills}>Eliminar Habilidades
                </button>
            </form>
        </div>
    )

}


export default SkillsInfoForm