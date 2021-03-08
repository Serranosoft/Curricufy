import React, { Component } from "react";
import EducationInfoForm from "../Form/EducationInfoForm";
import grid1Hover from "../../styles/images/grid1Hover.png";
import grid2Hover from "../../styles/images/grid2Hover.png";
import grid3Hover from "../../styles/images/grid3Hover.png";
import grid1 from "../../styles/images/grid1.png";
import grid2 from "../../styles/images/grid2.png";
import grid3 from "../../styles/images/grid3.png";
import moment from "moment";

class EducationInfoContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studies: [],
            school: "",
            title: "",
            dateStudy: "",
            finishStudy: false,
            educationColumns: 3
        }

        this.handleChange = this.handleChange.bind(this);
        this.addStudies = this.addStudies.bind(this);
        this.resetStudies = this.resetStudies.bind(this);
        this.handleColumns = this.handleColumns.bind(this);
        this.hoverColumns = this.hoverColumns.bind(this);
        this.unHoverColumns = this.unHoverColumns.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value
        const dateStudyInput = document.getElementsByName("dateStudy")[0];
        if (target.checked) {
            dateStudyInput.setAttribute("style", "background: gray")
            dateStudyInput.disabled = true;
            dateStudyInput.valueAsDate = null;
        } else {
            dateStudyInput.setAttribute("style", "background: transparent")
            dateStudyInput.disabled = false;
        }
        this.setState({
            [event.target.name]: value
        })
    }

    addStudies(event) {
        event.preventDefault();
        if (
            this.state.school.length > 0 &&
            this.state.title.length > 0 &&
            this.state.dateStudy.length > 0 ||
            this.state.school.length > 0 &&
            this.state.title.length > 0 &&
            this.state.finishStudy
        ) {
            this.setState({
                studies: [...this.state.studies, [this.state.school, this.state.title, moment(this.state.dateStudy).format("DD / MM / YYYY"), this.state.finishStudy]]
            }, () => {
                this.props.updateEducationState(this.state);
                this.setState({
                    school: "",
                    title: "",
                    dateStudy: "",
                    finishStudy: ""
                })
            })
        }
    }

    resetStudies(e) {
        e.preventDefault();
        this.setState(prevState => {
            return {
                studies: prevState.studies.slice(0, -1)
            }
        }, () => {
            this.props.updateEducationState(this.state);
        })
    }

    handleColumns(event) {
        let columns = 3;
        switch (event.target.id) {
            case "EducGrid1":
                columns = 1;
                break;
            case "EducGrid2":
                columns = 2;
                break;
            case "EducGrid3":
                columns = 3;
                break;
        }
        this.setState({
            educationColumns: columns
        }, () => {
            this.props.updateEducationState(this.state);
        })
    }

    hoverColumns(event) {
        switch(event.target.id) {
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

    unHoverColumns(event) {
        switch(event.target.id) {
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

    render() {
        return (
            <EducationInfoForm
                handleChange={this.handleChange}
                addStudies={this.addStudies}
                resetStudies={this.resetStudies}
                handleColumns={this.handleColumns}
                hoverColumns={this.hoverColumns}
                unHoverColumns={this.unHoverColumns}
                school={this.state.school}
                title={this.state.title}
                dateStudy={this.state.dateStudy}
                finishStudy={this.state.finishStudy}
            />

        )
    }
}

export default EducationInfoContainer