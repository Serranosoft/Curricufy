import React, { Component } from "react";
import ExperienceInfoForm from "../Form/ExperienceInfoForm";
import moment from "moment";

class ExperienceInfoContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            works: [],
            companyName: "",
            companyPosition: "",
            startWorking: "",
            finishWorking: "",
            workDescription: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.addWorks = this.addWorks.bind(this);
        this.resetWorks = this.resetWorks.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        })
    }

    addWorks(e) {
        e.preventDefault();
        if (
            this.state.companyName.length > 1 &&
            this.state.companyPosition.length > 1 &&
            this.state.startWorking.length > 1 &&
            this.state.finishWorking.length > 1 &&
            this.state.workDescription.length > 1
        ) {
            this.setState({
                works: [...this.state.works, [this.state.companyName, this.state.companyPosition, moment(this.state.startWorking).format("DD / MM / YYYY"), moment(this.state.finishWorking).format("DD / MM / YYYY"), this.state.workDescription]]
            }, () => {
                this.props.updateExperienceState(this.state);
                this.setState({
                    companyName: "",
                    companyPosition: "",
                    startWorking: "",
                    finishWorking: "",
                    workDescription: ""
                })
            })
        }
    }

    resetWorks(e) {
        e.preventDefault();
        this.setState({
            works: []
        }, () => {
            this.props.updateExperienceState(this.state);
        })
    }

    render() {
        return (
            <ExperienceInfoForm
                handleChange={this.handleChange}
                addWorks={this.addWorks}
                resetWorks={this.resetWorks}
                companyName={this.state.companyName}
                companyPosition={this.state.companyPosition}
                startWorking={this.state.startWorking}
                finishWorking={this.state.finishWorking}
                workDescription={this.state.workDescription} />
        )
    }
}

export default ExperienceInfoContainer