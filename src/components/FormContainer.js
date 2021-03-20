import React, { Component } from "react";
import GeneralInfoContainer from "./Containers/GeneralInfoContainer";
import EducationInfoContainer from "./Containers/EducationInfoContainer";
import ExperienceInfoContainer from "./Containers/ExperienceInfoContainer";
import SkillsInfoContainer from "./Containers/SkillsInfoContainer";
import LangInfoContainer from "./Containers/LangInfoContainer";
import ExtraInfoContainer from "./Containers/ExtraInfoContainer";


const FormContainer = (props) => {
    return (
        <div>
            <div id="cv_wrapper" className="slide-in-elliptic-top-fwd">

                <GeneralInfoContainer
                    setValues={props.setValues}
                    data={props.data}
                />

                <SkillsInfoContainer
                    setValues={props.setValues}
                />

                <EducationInfoContainer
                    setValues={props.setValues}
                />

                <ExperienceInfoContainer
                    setValues={props.setValues}
                />

                <LangInfoContainer
                    setValues={props.setValues}
                />

                <ExtraInfoContainer
                    setValues={props.setValues}
                />

            </div>
        </div>
    )
}

export default FormContainer