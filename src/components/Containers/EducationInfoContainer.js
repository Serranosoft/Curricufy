import React, { useEffect, useState } from "react";
import EducationInfoForm from "../Form/EducationInfoForm";
import grid1Hover from "../../styles/images/grid1Hover.png";
import grid2Hover from "../../styles/images/grid2Hover.png";
import grid3Hover from "../../styles/images/grid3Hover.png";
import grid1 from "../../styles/images/grid1.png";
import grid2 from "../../styles/images/grid2.png";
import grid3 from "../../styles/images/grid3.png";
import moment from "moment";


function EducationInfoContainer({setValues}) {

    const initialState = {
        schoolName: "", titleName: "", dateStudy: "", finishStudy: false
    }
    let studiesData = [];

    const [inputValues, setInputValues] = useState(initialState);
    let { schoolName, titleName, dateStudy, finishStudy } = inputValues
    const [studies, addStudy] = useState([]);
    const [columns, changeColumns] = useState(3)
    
    let data = {
        schoolName: schoolName,
        titleName: titleName,
        dateStudy: dateStudy,
        finishStudy: finishStudy
    }

    const handleChange = event => {
        // Destructuring Array
        // Esta cogiendo la propiedad name y value del objeto target y los almacena en variable name y value
        const { name, value } = event.target;
        // Se le pasa el mismo objeto que es, osea, initialState transformado :
        // ...inputValues es igual a un objeto con todas sus propiedades, osea, es initialState
        // y [name]:value es igual a schoolName: "valor"
        // Entonces le pasamos un objeto así initialState = {schoolName: "valor", titleName: ""...}
        // Ya que solo cambiará el valor de la propiedad [name].
        // Y sobreescribe el objeto anterior que era el mismo pero con {schoolName: ""}
        setInputValues({ ...inputValues, [name]: value });
    };
    
    const validateForm = () => {
        const schoolError = document.getElementById("schoolError")
        const titleError = document.getElementById("titleError")
        const dateStudyError = document.getElementById("dateStudyError")
        const studyingInput = document.getElementById("studying");

        schoolName.length < 1 ? schoolError.innerHTML = "Introduce una escuela/universidad" : schoolError.innerHTML = "";
        titleName.length < 1 ? titleError.innerHTML = "Introduce un título" : titleError.innerHTML = "";
        if (dateStudy.length < 1 && !studyingInput.checked) {
            dateStudyError.innerHTML = "Introduce una fecha";
        } else if (dateStudy.length < 1 && studyingInput.checked) {
            dateStudyError.innerHTML = "";
        }

        if (
            schoolName.length > 0 &&
            titleName.length > 0 &&
            dateStudy.length > 0 ||
            schoolName.length > 0 &&
            titleName.length > 0 &&
            finishStudy
        ) {
            return true;
        }

        return false;
    }

    const hoverColumns = (event) => {
        switch (event.target.id) {
            case "EducGrid1":
                document.getElementById("EducGrid1").setAttribute("src", grid1Hover);
                break;
            case "EducGrid2":
                document.getElementById("EducGrid2").setAttribute("src", grid2Hover);
                break;
            case "EducGrid3":
                document.getElementById("EducGrid3").setAttribute("src", grid3Hover);
                break;

        }
    }

    const unHoverColumns = (event) => {
        switch (event.target.id) {
            case "EducGrid1":
                document.getElementById("EducGrid1").setAttribute("src", grid1);
                break;
            case "EducGrid2":
                document.getElementById("EducGrid2").setAttribute("src", grid2);
                break;
            case "EducGrid3":
                document.getElementById("EducGrid3").setAttribute("src", grid3);
                break;

        }
    }

    const handleColumns = (event) => {
        switch (event.target.id) {
            case "EducGrid1":
                changeColumns(1);
                break;
            case "EducGrid2":
                changeColumns(2);
                break;
            case "EducGrid3":
                changeColumns(3);
                break;
        }
    }

    const addStudies = (e) => {
        e.preventDefault();
        if (
            validateForm()
        ) {
            studiesData.push(...studies, [inputValues.schoolName, inputValues.titleName, moment(inputValues.dateStudy).format("DD / MM / YYYY"), inputValues.finishStudy])
            addStudy(studiesData);
        }
    }

    const resetStudies = (e) => {
        e.preventDefault();
        addStudy(studies.slice(0,-1))
    }

    useEffect(() => {
        setValues({ "educationColumns": columns })
    }, [columns])

    useEffect(() => {
        setValues({ "studies": studies })
        setInputValues(initialState)
    }, [studies])


    return (
        <EducationInfoForm
            handleChange={handleChange}
            addStudies={addStudies}
            resetStudies={resetStudies}
            hoverColumns={hoverColumns}
            unHoverColumns={unHoverColumns}
            handleColumns={handleColumns}
            {...data}
        />
    )
}

export default EducationInfoContainer