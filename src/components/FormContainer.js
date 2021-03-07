import React, { Component } from "react";
import GeneralInfoContainer from "./Containers/GeneralInfoContainer";
import EducationInfoContainer from "./Containers/EducationInfoContainer";
import ExperienceInfoContainer from "./Containers/ExperienceInfoContainer";
import SkillsInfoContainer from "./Containers/SkillsInfoContainer";
import LangInfoContainer from "./Containers/LangInfoContainer";
import ExtraInfoContainer from "./Containers/ExtraInfoContainer";

class FormContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            avatar: "",
            name: "",
            email: "",
            phone: "",
            generalColumn: true,

            studies: [],
            school: "",
            title: "",
            dateStudy: "",
            finishStudy: false,
            educationColumns: 3,

            works: [],
            companyName: "",
            companyPosition: "",
            startWorking: "",
            finishWorking: "",
            workDescription: "",

            skills: [],
            round: false,

            langs: [],

            extraInfo: []
            
        }

        this.updateGeneralState = this.updateGeneralState.bind(this);
        this.updateSkillsState = this.updateSkillsState.bind(this);
        this.updateEducationState = this.updateEducationState.bind(this);
        this.updateExperienceState = this.updateExperienceState.bind(this);
        this.updateLangState = this.updateLangState.bind(this);
        this.updateExtraInfoState = this.updateExtraInfoState.bind(this)
    }

    componentDidMount() {
        this.props.onUpdate(this.state)
    }

    updateGeneralState(data) {
        this.setState({
            avatar: data.avatar,
            name: data.name,
            email: data.email,
            phone: data.phone,
            generalColumn: data.generalColumn
        }, () => {
            this.props.onUpdate(this.state)
        })
    }
    
    updateSkillsState(data) {
        this.setState({
            skills: data.skills,
            round: data.round
        }, () => {
            this.props.onUpdate(this.state)
        })
    }

    updateEducationState(data) {
        this.setState({
            studies: data.studies,
            school: data.school,
            title: data.title,
            dateStudy: data.dateStudy,
            finishStudy: data.finishStudy,
            educationColumns: data.educationColumns
        }, () => {
            this.props.onUpdate(this.state)
        })
    }

    updateExperienceState(data) {
        this.setState({
            works: data.works,
            companyName: data.companyName,
            companyPosition: data.companyPosition,
            startWorking: data.startWorking,
            finishWorking: data.finishWorking,
            workDescription: data.workDescription
        }, () => {
            this.props.onUpdate(this.state)
        })
    }

    updateLangState(data) {
        this.setState({
            langs: data.langs
        }, () => {
            this.props.onUpdate(this.state)
        })
    }

    updateExtraInfoState(data) {
        this.setState({
            extraInfo: data.extraInfo
        }, () => {
            this.props.onUpdate(this.state)
        })
    }

    render() {
        return (
            <div>
                <div id="cv_wrapper" className="slide-in-elliptic-top-fwd">

                    <GeneralInfoContainer
                        updateGeneralState={this.updateGeneralState}
                    />
                    
                    <SkillsInfoContainer
                        updateSkillsState={this.updateSkillsState}
                    />

                    <EducationInfoContainer
                        updateEducationState={this.updateEducationState}
                    />

                    <ExperienceInfoContainer
                        updateExperienceState={this.updateExperienceState}
                    />

                    <LangInfoContainer
                        updateLangState={this.updateLangState}
                    />

                    <ExtraInfoContainer
                        updateExtraInfoState={this.updateExtraInfoState}
                    />

                </div>
            </div>
        )
    }
}


export default FormContainer