import React from "react";
import grid1 from "../../styles/images/grid1.png";
import grid2 from "../../styles/images/grid2.png";
import grid3 from "../../styles/images/grid3.png";

function EducationInfoForm({handleChange, addStudies, resetStudies, hoverColumns, unHoverColumns, handleColumns, ...data}) {

    return (
        <div>
            <div className="f-b">
                <h3>Tus <span className="highlight">estudios</span> academicos</h3>
                <div>
                    <img 
                        className="GridOptions" 
                        id="EducGrid1" 
                        src={grid1} 
                        onClick={handleColumns}
                        onMouseOver={hoverColumns}
                        onMouseLeave={unHoverColumns}
                    />
                    <img
                        className="GridOptions"
                        id="EducGrid2"
                        src={grid2} 
                        onClick={handleColumns}
                        onMouseOver={hoverColumns}
                        onMouseLeave={unHoverColumns}
                    />
                    <img 
                        className="GridOptions"
                        id="EducGrid3" 
                        src={grid3} 
                        onClick={handleColumns}
                        onMouseOver={hoverColumns}
                        onMouseLeave={unHoverColumns}
                    />
                </div>
            </div>
            <form className="col-2">
                <label>Escuela:
                    <span id="schoolError" className="ErrorInput"></span>
                    <input
                        type="text"
                        value={data.schoolName}
                        name="schoolName"
                        maxLength="35"
                        onChange={handleChange} />
                </label>

                <label>Título:
                    <span id="titleError" className="ErrorInput"></span>
                    <input
                        type="text"
                        value={data.datatitleName}
                        name="titleName"
                        maxLength="40"
                        onChange={handleChange} />
                </label>

                <label>Fecha a finalizar
                    <span id="dateStudyError" className="ErrorInput"></span>
                    <input
                        type="date"
                        value={data.dateStudy}
                        name="dateStudy"
                        onChange={handleChange}
                    />

                    <span>Estoy estudiando actualmente
                    <input
                            id="studying"
                            type="checkbox"
                            checked={data.finishStudy}
                            value={data.finishStudy}
                            name="finishStudy"
                            onChange={handleChange}
                        />
                    </span>
                </label>

                <div className="f-e">
                    <button
                        type="submit"
                        value="+ Add a Study"
                        className="btn add"
                        onClick={addStudies}> Añadir Estudio
                    </button>

                    <button
                        className="btn add"
                        value="Reset Studies"
                        onClick={resetStudies}> Eliminar Estudio
                    </button>
                </div>

            </form>
        </div>

    )
}


export default EducationInfoForm