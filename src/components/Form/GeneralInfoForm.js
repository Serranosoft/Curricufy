import React from "react";
import DefaultAvatar from "../../styles/images/user.png"
import grid1 from "../../styles/images/grid1.png";
import grid2 from "../../styles/images/grid2.png";

function GeneralInfoForm(props) {

    return (
        <div>
            <img src={props.avatar === "" ? DefaultAvatar : props.avatar} className="profileImg" />
            <input type="file" className="handleFiles handleAvatar" onChange={props.handleAvatar}></input>
            <div className="f-b">
                <h3><span className="highlight">Información</span> general sobre ti</h3>
                <div>
                    <img 
                        className="GridOptions" 
                        id="GenGrid1"
                        src={grid1} 
                        onClick={props.handleColumns}
                        onMouseOver={props.hoverColumns}
                        onMouseLeave={props.unHoverColumns}
                    />
                    <img
                        className="GridOptions"
                        id="GenGrid2"
                        src={grid2} 
                        onClick={props.handleColumns}
                        onMouseOver={props.hoverColumns}
                        onMouseLeave={props.unHoverColumns}
                    />
                </div>
            </div>
            
            <form className="col-2">

                <label>Nombre:
                    <input
                        type="text"
                        value={props.name}
                        name="name"
                        maxLength="30"
                        onChange={props.handleChange} />
                </label>

                <label>Email:
                    <input
                        type="text"
                        value={props.email}
                        name="email"
                        maxLength="35"
                        onChange={props.handleChange} />
                </label>

                <label>Número de teléfono:
                    <input
                        type="tel"
                        value={props.phone}
                        name="phone"
                        maxLength="15"
                        pattern="[0-9+ ]*"
                        onChange={props.handleChange} />
                </label>

            </form>
        </div>
    )
}


export default GeneralInfoForm