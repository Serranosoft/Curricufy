import React, { Component } from "react";
import jsPDF from "jspdf";
import domtoimage from "dom-to-image"
import DefaultAvatar from "../styles/images/user.png"

class DisplayCv extends Component {

  constructor(props) {
    super(props);

    this.state = {
      color: "#5d5dff"
    }

    this.printDocument = this.printDocument.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.getLangValue = this.getLangValue.bind(this);
  }

  printDocument(e) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const node = document.getElementById('displayWrapper');
    const scale = 1500 / node.offsetWidth;
    const divWidth = node.clientWidth;
    const divHeight = node.clientHeight;
    const PDF_Width = divWidth+30;
    const PDF_Height = divHeight+30;
    switch (e.target.id) {
      case "downloadAsPdf":
        domtoimage.toJpeg(node, {
          height: node.offsetHeight * scale,
          width: node.offsetWidth * scale,
          style: {
            transform: "scale(" + scale + ")",
            transformOrigin: "top left",
            width: node.offsetWidth + "px",
            height: node.offsetHeight + "px",
          }
        })
          .then(function (dataUrl) {
            const pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
            pdf.addImage(dataUrl, 'PNG', 15, 0, divWidth, divHeight); //-200,-200
            pdf.save("CV.pdf");
          });
        break;
      case "downloadAsImg":
        domtoimage.toJpeg(node, {
          height: node.offsetHeight * scale,
          width: node.offsetWidth * scale,
          style: {
            transform: "scale(" + scale + ")",
            transformOrigin: "top left",
            width: node.offsetWidth + "px",
            height: node.offsetHeight + "px",
          }
        })
          .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'CV.jpeg';
            link.href = dataUrl;
            link.click();
          });
        break;
    }
  }

  getLangValue(level) {
    switch (level) {
      case "Basico":
        return "25%";

      case "Intermedio (Bajo)":
        return "50%";

      case "Intermedio (Alto)":
        return "70%";

      case "Alto":
        return "85%";

      case "Nativo":
        return "100%";
    }
  }

  renderStudies() {
    let studies = [];
    if (this.props.data.studies != undefined) {
      if (this.props.data.studies.length > 0) {
        [this.props.data.studies].map((el) => {
          el.map((el, index) => {
            studies.push(
              <div key={index}>
                <p id="EducationTitle">{el[1]}</p>
                <p id="EducationSchool">{el[0]}</p>
                <p id="EducationDate">{el[2] === "" || el[3] ? "Estudiando actualmente" : el[2]}</p>
              </div>);
          })
        })
        return studies;
      }
      return studies;
    }
  }

  renderWorks() {
    let works = [];
    if (this.props.data.works != undefined) {
      if (this.props.data.works.length > 0) {
        [this.props.data.works].map((el) => {
          el.map((el, index) => {
            works.push(
              <div className="RenderContainer" key={index}>
                <p id="CompanyPosition">{el[1]}</p>
                <p id="CompanyName">{el[0]}</p>
                <div id="InfoWork">
                  <p id="StartWorking">{el[2]} &nbsp;-</p>
                  <p id="FinishWorking"> &nbsp; {el[3] === "" ? "Actually working here" : el[3]}</p>
                </div>
                <p id="WorkDescription">{el[4]}</p>
              </div>);
          })
        })
        return works;
      }
      return works;
    }
  }

  renderSkills() {
    let skills = [];
    if (this.props.data.skills != undefined) {
      if (this.props.data.skills.length > 0) {
        [this.props.data.skills].map((el) => {
          el.map((el, index) => {
            skills.push(
              <div key={index}>
                <img id="SkillImg" src={el} style={{ borderRadius: this.props.data.round ? "50%" : "0%" }} />
              </div>
            )
          })
        })
        return skills
      }
    }
  }

  renderLangs() {
    let langs = [];
    if (this.props.data.langs != undefined) {
      if (this.props.data.langs.length > 0) {
        [this.props.data.langs].map((el => {
          el.map((el, index) => {
            this.getLangValue(el[1])
            langs.push(
              <div key={index}>
                <p id="langName">{el[0]}</p>
                <div id="langWrapper">
                  <div
                    id="langsBar"
                    style={{
                      width: this.getLangValue(el[1]),
                      backgroundColor: el[2].length > 0 ? el[2] : "#db7fb5"
                    }}>
                    {el[1]}
                  </div>
                </div>
              </div>
            )
          })
        }))
        return langs;
      }
    }
  }

  renderExtraInfo() {
    let extraInfo = [];
    if (this.props.data.extraInfo != undefined) {
      if (this.props.data.extraInfo.length > 0) {
        [this.props.data.extraInfo].map((el => {
          el.map((el, index) => {
            extraInfo.push(
              <div key={index}>
                <p id="extraInfoName">{el}</p>
              </div>
            )
          })
        }))
        return extraInfo;
      }
    }

  }

  handleColor(event) {
    this.setState({
      color: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="sticky bounce-in-top" style={{animationDelay:"0.8s"}}>
          <div className="f-e">
            <button id="downloadAsPdf" className="btn" onClick={this.printDocument}>DESCARGAR EN PDF</button>
            <button id="downloadAsImg" className="btn" onClick={this.printDocument}>DESCARGAR EN IMAGEN</button>
            <label>Elige un color para tu CV
              <input type="color" value={this.state.color} onChange={this.handleColor} />
            </label>
          </div>


          <div id="displayWrapper">
            <div className="f-e" style={{ backgroundColor: `${this.state.color}`, flexDirection: this.props.data.generalColumn ? "column" : "row" }}>
              <img
                src={this.props.data.avatar == undefined ||
                  this.props.data.avatar == "" ?
                  DefaultAvatar : this.props.data.avatar}
                id="CvAvatar" />
              <div>
                <p id="DisplayName">{this.props.data.name}</p>
                <p id="DisplayEmail">{this.props.data.email}</p>
                <p id="DisplayPhone">{this.props.data.phone}</p>
              </div>
            </div>

            <div className="f-c">
              {this.renderSkills()}
            </div>

            <div className="col-2">
              {this.renderLangs()}
            </div>

            {this.props.data.studies === undefined ||
              this.props.data.studies.length < 1 ? "" :
              <h3 className="SectionLabel">EDUCACIÓN</h3>}

            <div className="gridContainer" style={{ gridTemplateColumns: `repeat(${this.props.data.educationColumns}, 1fr)` }}>
              {this.renderStudies()}
            </div>

            {this.props.data.works === undefined ||
              this.props.data.works.length < 1 ? "" :
              <h3 className="SectionLabel">EXPERIENCIA LABORAL</h3>}
            {this.renderWorks()}

            {this.props.data.extraInfo === undefined ||
              this.props.data.extraInfo.length < 1 ? "" :
              <h3 className="SectionLabel">OTRAS HABILIDADES</h3>}

            <div className="gridContainer">
              {this.renderExtraInfo()}
            </div>

          </div>
        </div>
      </div>
    )
  }
}


export default DisplayCv