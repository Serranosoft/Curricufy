import React, { Component } from "react";
import GeneralInfoForm from "../Form/GeneralInfoForm";
import grid1Hover from "../../styles/images/grid1Hover.png";
import grid2Hover from "../../styles/images/grid2Hover.png";
import grid1 from "../../styles/images/grid1.png";
import grid2 from "../../styles/images/grid2.png";

class GeneralInfoContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avatar: "",
            name: "",
            email: "",
            phone: "",
            web: "",
            generalColumn: true
        }
        this.handleAvatar = this.handleAvatar.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleColumns = this.handleColumns.bind(this);
        this.hoverColumns = this.hoverColumns.bind(this);
        this.unHoverColumns = this.unHoverColumns.bind(this);
    }

    handleAvatar(e) {
        this.setState({
            avatar: URL.createObjectURL(e.target.files[0])
        }, () => {
            this.props.updateGeneralState(this.state)

        })
    }

    handleChange(event) {
        const value = event.target.value
        if(event.target.validity.valid) {
            this.setState({
                [event.target.name]: value
            }, () => {
                this.props.updateGeneralState(this.state)
            })
        }
    }

    handleColumns(event) {
        let column = true;
        switch (event.target.id) {
            case "GenGrid1":
                column = true;
                break;
            case "GenGrid2":
                column = false;
                break;
        }
        this.setState({
            generalColumn: column
        }, () => {
            this.props.updateGeneralState(this.state);
        })
    }

    hoverColumns(event) {
        switch(event.target.id) {
            case "GenGrid1":
                document.getElementById("GenGrid1").setAttribute("src", grid1Hover);
                break;
            case "GenGrid2":
                document.getElementById("GenGrid2").setAttribute("src", grid2Hover);
                break;   
        }
    }

    unHoverColumns(event) {
        switch(event.target.id) {
            case "GenGrid1":
                document.getElementById("GenGrid1").setAttribute("src", grid1);
                break;
            case "GenGrid2":
                document.getElementById("GenGrid2").setAttribute("src", grid2);
                break;
        }
    }


    render() {
        return (
            <GeneralInfoForm
                handleChange={this.handleChange}
                handleAvatar={this.handleAvatar}
                handleColumns={this.handleColumns}
                hoverColumns={this.hoverColumns}
                unHoverColumns={this.unHoverColumns}
                name={this.state.name}
                email={this.state.email}
                phone={this.state.phone}
                web={this.state.web}
                avatar={this.state.avatar}
            />
        )
    }
}

export default GeneralInfoContainer