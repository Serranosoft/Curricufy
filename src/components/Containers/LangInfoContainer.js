import React, { useEffect, useState } from "react";
import LangInfoForm from "../Form/LangInfoForm";

function LangInfoContainer(props) {

    const initialState = {
        langName: "", level: "Basico", langColor: "#a75685"
    }
    const [inputValues, setInputValues] = useState(initialState);
    const [langs, addLang] = useState([]);

    let langsData = [];
    let data = {
        langName: inputValues.langName,
        level: inputValues.level,
        langColor: inputValues.langColor
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputValues({...inputValues, [name]:value})
    }

    const addLangs = (e) => {
        e.preventDefault();
        if(inputValues.langName.length > 0) {
            document.getElementById("langNameError").innerHTML = "";
            langsData.push(...langs, [inputValues.langName, inputValues.level, inputValues.langColor])
            addLang(langsData)
        } else {
            document.getElementById("langNameError").innerHTML = "Introduce un idioma"
        }
    }

    const resetLangs = (e) => {
        e.preventDefault();
        addLang(langs.slice(0,-1))
    }

    useEffect(() => {
        props.setValues({"langs": langs})
        setInputValues(initialState)
    },[langs])
    
    return (
        <LangInfoForm
                {...data}
                handleChange={handleChange}
                addLangs={addLangs}
                resetLangs={resetLangs}
            />
    )
}

export default LangInfoContainer