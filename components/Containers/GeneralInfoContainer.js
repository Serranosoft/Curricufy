import { useEffect, useState } from "react";
import GeneralInfoForm from "../Form/GeneralInfoForm";

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
                document.getElementById("GenGrid1").setAttribute("src", "/images/grid1Hover.svg");
                break;
            case "GenGrid2":
                document.getElementById("GenGrid2").setAttribute("src", "/images/grid2Hover.svg");
                break;
        }
    }

    function unHoverColumns(event) {
        switch (event.target.id) {
            case "GenGrid1":
                document.getElementById("GenGrid1").setAttribute("src", "/images/grid1.svg");
                break;
            case "GenGrid2":
                document.getElementById("GenGrid2").setAttribute("src", "/images/grid2.svg");
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