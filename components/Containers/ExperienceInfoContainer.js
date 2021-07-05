import React, { useEffect, useState } from "react";
import ExperienceInfoForm from "../Form/ExperienceInfoForm";
import moment from "moment";

function ExperienceInfoContainer({setValues}) {

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
    let {companyName, companyPosition, startWorking, finishWorking, workDescription} = inputValues

    let data = {
        companyName: companyName,
        companyPosition: companyPosition,
        startWorking: startWorking,
        finishWorking: finishWorking,
        workDescription: workDescription
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

        companyName.length < 1 ? companyNameError.innerHTML = "Introduce una empresa" : companyNameError.innerHTML = "";
        companyPosition.length < 1 ? companyPositionError.innerHTML = "Introduce un puesto de trabajo" : companyPositionError.innerHTML = "";
        startWorking.length < 1 ? startWorkingError.innerHTML = "Introduce una fecha de comienzo" : startWorkingError.innerHTML = "";
        finishWorking.length < 1 ? finishWorkingError.innerHTML = "Introduce una fecha de finalizar" : finishWorkingError.innerHTML = "";
        workDescription.length < 1 ? workDescriptionError.innerHTML = "Explica brevemente lo que hacías en tu puesto" : workDescriptionError.innerHTML = "";

        if (
            companyName.length > 1 &&
            companyPosition.length > 1 &&
            startWorking.length > 1 &&
            finishWorking.length > 1 &&
            workDescription.length > 1
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
            worksData.push(...works, [companyName, companyPosition, moment(startWorking).format("DD / MM / YYYY"), moment(finishWorking).format("DD / MM / YYYY"), workDescription])
            addWork(worksData)
        }
    }

    const resetWorks = (e) => {
        e.preventDefault();
        addWork(works.slice(0,-1))
    }

    useEffect(() => {
        setValues({"works": works })
        setInputValues(initialState)
    }, [works])


    return (
        <ExperienceInfoForm
            handleChange={handleChange}
            addWorks={addWorks}
            resetWorks={resetWorks}
            {...data}
        />
    )
}

export default ExperienceInfoContainer