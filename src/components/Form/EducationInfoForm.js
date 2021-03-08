import React from "react";
import grid1 from "../../styles/images/grid1.png";
import grid2 from "../../styles/images/grid2.png";
import grid3 from "../../styles/images/grid3.png";

function EducationInfoForm(props) {

    return (
        <div>
            <div className="f-b">
                <h3>Tus <span className="highlight">estudios</span> academicos</h3>
                <div>
                    <img 
                        className="GridOptions" 
                        id="EducGrid1" 
                        src={grid1} 
                        onClick={props.handleColumns}
                        onMouseOver={props.hoverColumns}
                        onMouseLeave={props.unHoverColumns}
                    />
                    <img
                        className="GridOptions"
                        id="EducGrid2"
                        src={grid2} 
                        onClick={props.handleColumns}
                        onMouseOver={props.hoverColumns}
                        onMouseLeave={props.unHoverColumns}
                    />
                    <img 
                        className="GridOptions"
                        id="EducGrid3" 
                        src={grid3} 
                        onClick={props.handleColumns}
                        onMouseOver={props.hoverColumns}
                        onMouseLeave={props.unHoverColumns}
                    />
                </div>
            </div>
            <form className="col-2">
                <label>Escuela:
                    <span id="schoolError" className="ErrorInput"></span>
                    <input
                        type="text"
                        value={props.school}
                        name="school"
                        maxLength="35"
                        onChange={props.handleChange} />
                </label>

                <label>Título:
                    <span id="titleError" className="ErrorInput"></span>
                    <input
                        type="text"
                        value={props.title}
                        name="title"
                        maxLength="40"
                        onChange={props.handleChange} />
                </label>

                <label>Fecha a finalizar
                    <span id="dateStudyError" className="ErrorInput"></span>
                    <input
                        type="date"
                        value={props.dateStudy}
                        name="dateStudy"
                        onChange={props.handleChange}
                    />

                    <span>Estoy estudiando actualmente
                    <input
                            type="checkbox"
                            checked={props.finishStudy}
                            value={props.finishStudy}
                            name="finishStudy"
                            onChange={props.handleChange}
                        />
                    </span>
                </label>

                <div className="f-e">
                    <button
                        value="+ Add a Study"
                        className="btn add"
                        onClick={props.addStudies}> Añadir Estudio
                    </button>

                    <button
                        className="btn add"
                        value="Reset Studies"
                        onClick={props.resetStudies}> Eliminar Estudio
                    </button>
                </div>

            </form>
        </div>

    )
}


export default EducationInfoForm