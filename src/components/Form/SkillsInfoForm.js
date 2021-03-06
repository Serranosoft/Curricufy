import React from "react";
import RoundImg from "../../styles/images/round.png"

function SkillsInfoForm(props) {

    return (
        <div>
            <div className="f-b">
                <h3>Añade unos logos para <span className="highlight">tus habilidades</span></h3>
                <img 
                        className="GridOptions" 
                        id="roundImg" 
                        src={RoundImg} 
                        onClick={props.handleRound}
                    />
            </div>
            <form className="f-a" id="skillsInfoForm">
            
                <input 
                    type="file"
                    className="handleFiles" 
                    ref={props.skillInput} />
                <button
                    className="btn"
                    onClick={props.addSkills}>+ Añadir Habilidad
                </button>
                <button
                    className="btn"
                    onClick={props.resetSkills}>Eliminar Habilidades
                </button>
            </form>
        </div>
    )

}


export default SkillsInfoForm