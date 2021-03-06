import React, { Component } from "react";
import FormContainer from "./FormContainer";
import DisplayCv from "./DisplayCv";
import "../styles/Input.css";
import "../styles/Form.css"
import "../styles/DisplayCv.css"

class MainContent extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    onUpdate(data) {
        this.setState({
            data: data
        })
    }

    render() {
        return (
            <div id="container">
                <FormContainer onUpdate={this.onUpdate.bind(this)} />
                <DisplayCv data={this.state.data} />
            </div>
        )
    }
}


export default MainContent;