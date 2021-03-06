import React, { Component } from "react";
import SkillsInfoForm from "../Form/SkillsInfoForm";
import RoundImg from "../../styles/images/round.png"
import RoundImgActive from "../../styles/images/roundActive.png"


class SkillsInfoContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            skills: [],
            round: false
        }

        this.addSkills = this.addSkills.bind(this);
        this.resetSkills = this.resetSkills.bind(this);
        this.handleRound = this.handleRound.bind(this)
        this.skillInput = React.createRef();
    }

    addSkills(e) {
        e.preventDefault();
        if (this.skillInput.current.files[0] != undefined) {
            if (this.state.skills.length < 7) {
                this.setState({
                    skills: [...this.state.skills, [URL.createObjectURL(this.skillInput.current.files[0])]]
                }, () => {
                    this.props.updateSkillsState(this.state)
                    document.getElementById("skillsInfoForm").reset();
                })
            }
        }
    }

    resetSkills(e) {
        e.preventDefault();
        this.setState({
            skills: []
        }, () => {
            this.props.updateSkillsState(this.state)
        })
    }

    handleRound() {
        this.setState(prevState => {
            return {
                round: !prevState.round
            }
        }, () => {
            this.state.round ? 
            document.getElementById("roundImg").setAttribute("src", RoundImgActive) :
            document.getElementById("roundImg").setAttribute("src", RoundImg)
            this.props.updateSkillsState(this.state)
        })
    }

    render() {
        return (
            <SkillsInfoForm
                addSkills={this.addSkills}
                resetSkills={this.resetSkills}
                handleRound={this.handleRound}
                skillInput={this.skillInput}
            />
        )
    }
}

export default SkillsInfoContainer