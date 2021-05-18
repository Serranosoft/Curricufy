import React, { useEffect, useState } from "react";
import GeneralInfoForm from "../Form/GeneralInfoForm";
import grid1Hover from "../../styles/images/grid1Hover.png";
import grid2Hover from "../../styles/images/grid2Hover.png";
import grid1 from "../../styles/images/grid1.png";
import grid2 from "../../styles/images/grid2.png";

export function GeneralInfoContainer({setValues, data}) {

    const [column, changeColumn] = useState(true)

    function handleColumns(event) {
        switch (event.target.id) {
            case "GenGrid1":
                changeColumn(true);
                break;
            case "GenGrid2":
                changeColumn(false)
                break;
        }
    }
    
    useEffect(() => {
        setValues({"generalColumn": column})
    }, [column])

    function hoverColumns(event) {
        switch (event.target.id) {
            case "GenGrid1":
                document.getElementById("GenGrid1").setAttribute("src", grid1Hover);
                break;
            case "GenGrid2":
                document.getElementById("GenGrid2").setAttribute("src", grid2Hover);
                break;
        }
    }

    function unHoverColumns(event) {
        switch (event.target.id) {
            case "GenGrid1":
                document.getElementById("GenGrid1").setAttribute("src", grid1);
                break;
            case "GenGrid2":
                document.getElementById("GenGrid2").setAttribute("src", grid2);
                break;
        }
    }

    return (
        <GeneralInfoForm
            data={data}
            setValues={setValues}
            handleColumns={handleColumns}
            hoverColumns={hoverColumns}
            unHoverColumns={unHoverColumns}
        />
    )
}

export default GeneralInfoContainer