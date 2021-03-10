import React, { Component } from "react";
import LangInfoForm from "../Form/LangInfoForm";

class LangInfoContainer extends Component{
    constructor(props) {
        super(props)
        this.state = {
            langName: "",
            level: "Basico",
            langs: [],
            langColor: "#a75685"
        }
        this.handleChange = this.handleChange.bind(this)
        this.addLang = this.addLang.bind(this);
        this.resetLang = this.resetLang.bind(this);
        this.handleColor = this.handleColor.bind(this)
    }

    handleChange(e) {
        const value = e.target.value
        if(e.target.type === "select-one") {
            this.setState({
                level: value
            })
        } else {
            this.setState({
                [e.target.name]: value
            })
        }
    }

    addLang(e) {
        e.preventDefault();
        if(this.state.langName.length > 0) {
            document.getElementById("langNameError").innerHTML = "";
            this.setState({
                langs: [...this.state.langs, [this.state.langName, this.state.level, this.state.langColor]]
            }, () => {
                this.props.updateLangState(this.state)
                this.setState({
                    langName: ""
                })
            })
        } else {
            document.getElementById("langNameError").innerHTML = "Introduce un idioma"
        }
    }
    
    resetLang(e) {
        e.preventDefault();
        this.setState(prevState => {
            return {
                langs: prevState.langs.slice(0,-1)
            }
        }, () => {
            this.props.updateLangState(this.state);
        })
    }

    handleColor(e) {
        this.setState({
            langColor: e.target.value
        }, () => {
            this.props.updateLangState(this.state);
        })
    }
    
    render() {
        return (
            <LangInfoForm
                handleChange={this.handleChange}
                addLang={this.addLang}
                resetLang={this.resetLang}
                handleColor={this.handleColor}
                langName={this.state.langName}
                level={this.state.level}
                langColor={this.state.langColor}
            />
        )
    }
}

export default LangInfoContainer