import React, { useEffect, useState } from "react";
import ExtraInfoForm from "../Form/ExtraInfoForm"

function ExtraInfoContainer({setValues}) {

    let extraInfoData = [];
    const initialValues = {extraInfoName: ""}
    const [inputValues, setInputValues] = useState(initialValues);
    let {extraInfoName} = inputValues;
    const [extraInfo, addExtraInfo] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputValues({...inputValues, [name]: value})
    }
    
    const addExtraInfos = (e) => {
        e.preventDefault();
        if(extraInfoName.length > 0) {
            extraInfoData.push(...extraInfo, [extraInfoName])
            addExtraInfo(extraInfoData)
        } else {
            document.getElementById("extraInfoError").innerHTML = "Introduce alguna habilidad"
        }
    }
    
    const resetExtraInfo = (e) => {
        e.preventDefault();
        addExtraInfo(extraInfo.slice(0,-1))
    }

    useEffect(() => {
        setValues({ "extraInfo": extraInfo })
        extraInfoName = "";
    }, [extraInfo])

    return (
        <ExtraInfoForm
            handleChange={handleChange}
            addExtraInfos={addExtraInfos}
            resetExtraInfo={resetExtraInfo}
            extraInfoName={extraInfoName}
        />
    )
}
export default ExtraInfoContainer