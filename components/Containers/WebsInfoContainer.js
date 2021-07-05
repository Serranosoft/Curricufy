import { useEffect, useState } from "react";
import WebsInfoForm from "../Form/WebsInfoForm"

function WebsInfoContainer({setValues}) {

    const initialValues = {
        webUrl: "", 
        webDescription: ""
    }

    let websInfoData = [];
    
    const [inputValues, setInputValues] = useState(initialValues);
    let { webUrl, webDescription } = inputValues;
    const [webInfo, addWebInfo] = useState([])
    const data = {webUrl: webUrl, webDescription: webDescription}

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputValues({...inputValues, [name]: value})
    }
    
    const addWeb = (e) => {
        e.preventDefault();
        if(webUrl.length > 0 && webDescription.length > 0) {
            websInfoData.push(...webInfo, [webUrl, webDescription])
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
        setValues({ "webs": webInfo })
        setInputValues(initialValues)
    }, [webInfo])

    return (
        <WebsInfoForm
            handleChange={handleChange}
            addWeb={addWeb}
            resetWeb={resetWeb}
            {...data}
        />
    )
}
export default WebsInfoContainer