import React, { useEffect, useState } from "react";
import WebsInfoForm from "../Form/WebsInfoForm"

function WebsInfoContainer(props) {

    const initialValues = {
        webUrl: "", 
        webDescription: ""
    }

    let websInfoData = [];
    
    const [inputValues, setInputValues] = useState(initialValues);
    const [webInfo, addWebInfo] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputValues({...inputValues, [name]: value})
    }
    
    const addWeb = (e) => {
        e.preventDefault();
        if(inputValues.webUrl.length > 0 && inputValues.webDescription.length > 0) {
            websInfoData.push(...webInfo, [inputValues.webUrl, inputValues.webDescription])
            addWebInfo(websInfoData)
        } else {
            document.getElementById("webInfoError").innerHTML = "Introduce alguna web"
        }
    }
    
    const resetWeb = (e) => {
        e.preventDefault();
        addWebInfo(webInfo.slice(0,-1))
    }

    useEffect(() => {
        props.setValues({ "webs": webInfo })
        setInputValues(initialValues)
    }, [webInfo])

    return (
        <WebsInfoForm
            handleChange={handleChange}
            addWeb={addWeb}
            resetWeb={resetWeb}
            webUrl={inputValues.webUrl}
            webDescription={inputValues.webDescription}

        />
    )
}
export default WebsInfoContainer