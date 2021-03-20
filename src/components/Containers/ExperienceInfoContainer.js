import React, { useEffect, useState } from "react";
import ExperienceInfoForm from "../Form/ExperienceInfoForm";
import moment from "moment";


function ExperienceInfoContainer(props) {

    const initialState = {
        companyName: "", 
        companyPosition: "", 
        startWorking: "", 
        finishWorking: "", 
        workDescription: ""
    }
    let worksData = [];

    const [inputValues, setInputValues] = useState(initialState)
    const [works, addWork] = useState([]);

    let data = {
        companyName: inputValues.companyName,
        companyPosition: inputValues.companyPosition,
        startWorking: inputValues.startWorking,
        finishWorking: inputValues.finishWorking,
        workDescription: inputValues.workDescription
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputValues({...inputValues, [name]:value})
    }

    const validateForm = () => {
        const companyNameError = document.getElementById("companyNameError")
        const companyPositionError = document.getElementById("companyPositionError")
        const startWorkingError = document.getElementById("startWorkingError")
        const finishWorkingError = document.getElementById("finishWorkingError");
        const workDescriptionError = document.getElementById("workDescriptionError");

        inputValues.companyName.length < 1 ? companyNameError.innerHTML = "Introduce una empresa" : companyNameError.innerHTML = "";
        inputValues.companyPosition.length < 1 ? companyPositionError.innerHTML = "Introduce un puesto de trabajo" : companyPositionError.innerHTML = "";
        inputValues.startWorking.length < 1 ? startWorkingError.innerHTML = "Introduce una fecha de comienzo" : startWorkingError.innerHTML = "";
        inputValues.finishWorking.length < 1 ? finishWorkingError.innerHTML = "Introduce una fecha de finalizar" : finishWorkingError.innerHTML = "";
        inputValues.workDescription.length < 1 ? workDescriptionError.innerHTML = "Explica brevemente lo que hacías en tu puesto" : workDescriptionError.innerHTML = "";

        if (
            inputValues.companyName.length > 1 &&
            inputValues.companyPosition.length > 1 &&
            inputValues.startWorking.length > 1 &&
           inputValues.finishWorking.length > 1 &&
            inputValues.workDescription.length > 1
        ) {
            return true;
        }
        return false;
    }

    const addWorks = (e) => {
        e.preventDefault();
        if (
            validateForm()
        ) {
            worksData.push(...works, [inputValues.companyName, inputValues.companyPosition, moment(inputValues.startWorking).format("DD / MM / YYYY"), moment(inputValues.finishWorking).format("DD / MM / YYYY"), inputValues.workDescription])
            addWork(worksData)
        }
    }

    const resetWorks = (e) => {
        e.preventDefault();
        addWork(works.slice(0,-1))
    }

    useEffect(() => {
        props.setValues({ "works": works })
        setInputValues(initialState)
    }, [works])


    return (
        <ExperienceInfoForm
            {...data}
            handleChange={handleChange}
            addWorks={addWorks}
            resetWorks={resetWorks}
        />
    )
}

export default ExperienceInfoContainer