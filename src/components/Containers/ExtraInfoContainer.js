import React, { Component } from "react";
import ExtraInfoForm from "../Form/ExtraInfoForm"

class ExtraInfoContainer extends Component {
    constructor() {
        super()
        this.state = {
            extraInfoName: "",
            extraInfo: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.addExtraInfo = this.addExtraInfo.bind(this)
        this.resetExtraInfo = this.resetExtraInfo.bind(this)
    }

    handleChange(event) {
        const value = event.target.value
        this.setState({
            [event.target.name]: value
        })
    }

    addExtraInfo(e) {
        e.preventDefault();
        this.setState({
            extraInfo: [...this.state.extraInfo, [this.state.extraInfoName]]
        }, () => {
            this.props.updateExtraInfoState(this.state)
            this.setState({
                extraInfoName: ""
            })
        })
    }

    resetExtraInfo(e) {
        e.preventDefault();
        this.setState({
            extraInfo: []
        }, () => {
            this.props.updateExtraInfoState(this.state)
        })
    }

    render() {
        return (
            <ExtraInfoForm
                handleChange={this.handleChange}
                addExtraInfo={this.addExtraInfo}
                resetExtraInfo={this.resetExtraInfo}
                extraInfoName={this.state.extraInfoName}
            />
        )
    }
}

export default ExtraInfoContainer