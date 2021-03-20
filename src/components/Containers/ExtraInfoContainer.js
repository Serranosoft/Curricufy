import React, { useEffect, useState } from "react";
import ExtraInfoForm from "../Form/ExtraInfoForm"

function ExtraInfoContainer(props) {

    let extraInfoData = [];
    const initialValues = {extraInfoName: ""}
    const [inputValues, setInputValues] = useState(initialValues);
    const [extraInfo, addExtraInfo] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputValues({...inputValues, [name]: value})
    }
    
    const addExtraInfos = (e) => {
        e.preventDefault();
        if(inputValues.extraInfoName.length > 0) {
            extraInfoData.push(...extraInfo, [inputValues.extraInfoName])
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
        props.setValues({ "extraInfo": extraInfo })
        inputValues.extraInfoName = "";
    }, [extraInfo])

    return (
        <ExtraInfoForm
            handleChange={handleChange}
            addExtraInfos={addExtraInfos}
            resetExtraInfo={resetExtraInfo}
            extraInfoName={inputValues.extraInfoName}
        />
    )
}
export default ExtraInfoContainer