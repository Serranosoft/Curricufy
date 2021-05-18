import React, { Component } from "react";
import GeneralInfoContainer from "./Containers/GeneralInfoContainer";
import EducationInfoContainer from "./Containers/EducationInfoContainer";
import ExperienceInfoContainer from "./Containers/ExperienceInfoContainer";
import SkillsInfoContainer from "./Containers/SkillsInfoContainer";
import LangInfoContainer from "./Containers/LangInfoContainer";
import ExtraInfoContainer from "./Containers/ExtraInfoContainer";
import WebsInfoContainer from "./Containers/WebsInfoContainer";


const FormContainer = ({setValues, data}) => {
    return (
        <div>
            <div id="cv_wrapper" className="slide-in-elliptic-top-fwd">

                <GeneralInfoContainer
                    setValues={setValues}
                    data={data}
                />

                <SkillsInfoContainer
                    setValues={setValues}
                />

                <EducationInfoContainer
                    setValues={setValues}
                />

                <ExperienceInfoContainer
                    setValues={setValues}
                />

                <LangInfoContainer
                    setValues={setValues}
                />

                <WebsInfoContainer
                    setValues={setValues}
                />

                <ExtraInfoContainer
                    setValues={setValues}
                />

            </div>
        </div>
    )
}

export default FormContainer