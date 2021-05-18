import React, { useEffect, useState } from "react";
import LangInfoForm from "../Form/LangInfoForm";

function LangInfoContainer({setValues}) {

    const initialState = {
        langName: "", level: "Basico", langColor: "#a75685"
    }
    const [inputValues, setInputValues] = useState(initialState);
    let { langName, level, langColor } = inputValues;
    const [langs, addLang] = useState([]);

    let langsData = [];
    let data = {
        langName: langName,
        level: level,
        langColor: langColor
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputValues({...inputValues, [name]:value})
    }

    const addLangs = (e) => {
        e.preventDefault();
        if(langName.length > 0) {
            document.getElementById("langNameError").innerHTML = "";
            langsData.push(...langs, [langName, level, langColor])
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
        setValues({"langs": langs})
        setInputValues(initialState)
    }, [langs])
    
    return (
        <LangInfoForm
                handleChange={handleChange}
                addLangs={addLangs}
                resetLangs={resetLangs}
                {...data}
            />
    )
}

export default LangInfoContainer