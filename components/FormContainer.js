import React from "react";
import GeneralInfoContainer from "./Containers/GeneralInfoContainer";
import EducationInfoContainer from "./Containers/EducationInfoContainer";
import ExperienceInfoContainer from "./Containers/ExperienceInfoContainer";
import SkillsInfoContainer from "./Containers/SkillsInfoContainer";
import LangInfoContainer from "./Containers/LangInfoContainer";
import ExtraInfoContainer from "./Containers/ExtraInfoContainer";
import WebsInfoContainer from "./Containers/WebsInfoContainer";


const FormContainer = ({ setValues, data, sections }) => {

    function GetSections() {
        let aux = [];
        for (let i = 0; i < sections.length; i++) {
            switch (sections[i]) {
                case 1:
                    aux.push(<GeneralInfoContainer
                        setValues={setValues}
                        data={data}
                    />)
                    break;
                case 2:
                    aux.push(<SkillsInfoContainer
                        setValues={setValues}
                    />)
                    break;
                case 3:
                    aux.push(<EducationInfoContainer
                        setValues={setValues}
                    />)
                    break;
                case 4:
                    aux.push(<ExperienceInfoContainer
                        setValues={setValues}
                    />)
                    break;
                case 5:
                    aux.push(<LangInfoContainer
                        setValues={setValues}
                    />)
                    break;
                case 6:
                    aux.push(<WebsInfoContainer
                        setValues={setValues}
                    />)
                    break;
                case 7:
                    aux.push(<ExtraInfoContainer
                        setValues={setValues}
                    />)
                    break;
            }
        }
        return aux;
    }

    return (
        <div className="slide-in-elliptic-top-fwd">

            {GetSections().map((el) => {
                console.log(el);
                return (
                    <>
                        {el}
                    </>
                )
            })}

        </div>
    )
}

export default FormContainer