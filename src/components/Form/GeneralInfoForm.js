import React from "react";
import DefaultAvatar from "../../styles/images/user.png"
import grid1 from "../../styles/images/grid1.png";
import grid2 from "../../styles/images/grid2.png";

function GeneralInfoForm({data, setValues, handleColumns, hoverColumns, unHoverColumns}) {

    return (
        <div>
            <img src={data.avatar === "" ? DefaultAvatar : data.avatar} className="profileImg" />
            <input type="file" name="avatar" className="handleFiles handleAvatar" onChange={setValues}></input>
            <div className="f-b">
                <h3><span className="highlight">Información</span> general sobre ti</h3>
                <div>
                    <img 
                        className="GridOptions" 
                        id="GenGrid1"
                        src={grid1} 
                        onClick={handleColumns}
                        onMouseOver={hoverColumns}
                        onMouseLeave={unHoverColumns}
                    />
                    <img
                        className="GridOptions"
                        id="GenGrid2"
                        src={grid2} 
                        onClick={handleColumns}
                        onMouseOver={hoverColumns}
                        onMouseLeave={unHoverColumns}
                    />
                </div>
            </div>
            
            <form className="col-2">

                <label>Nombre:
                    <input
                        type="text"
                        value={data.name}
                        name="name"
                        maxLength="30"
                        onChange={setValues}
                    />
                </label>

                <label>Email:
                    <input
                        type="text"
                        value={data.email}
                        name="email"
                        maxLength="35"
                        onChange={setValues}
                    />
                </label>

                <label>Número de teléfono:
                    <input
                        type="tel"
                        value={data.phone}
                        name="phone"
                        maxLength="15"
                        pattern="[0-9+ ]*"
                        onChange={setValues} />
                </label>

                <label>Web personal:
                    <input
                        type="text"
                        value={data.web}
                        name="web"
                        maxLength="35"
                        onChange={setValues} />
                </label>

            </form>
        </div>
    )
}


export default GeneralInfoForm