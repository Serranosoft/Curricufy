import React, { useState } from "react";
import jsPDF from "jspdf";
import domtoimage from "dom-to-image"
import DefaultAvatar from "../styles/images/user.png"

function DisplayCv({ ...data }) {
  const [BgColor, setBgColor] = useState("#5d5dff");

  function printDocument(e) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const node = document.getElementById('displayWrapper');
    const scale = 1500 / node.offsetWidth;
    const divWidth = node.clientWidth;
    const divHeight = node.clientHeight;
    const PDF_Width = divWidth + 30;
    const PDF_Height = divHeight + 30;
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

  function getLangValue(level) {
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

  function dataIsReady(data) {
    if (data != undefined) {
      if (data.length > 0) {
        return true
      }
    }
    return false;
  }

  function renderStudies() {
    let studies = [];
    if (dataIsReady(data.studies)) {
      [data.studies].map((el) => {
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
  }

  function renderWorks() {
    let works = [];
    if (dataIsReady(data.works)) {
      [data.works].map((el) => {
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

  }

  function renderSkills() {
    let skills = [];
    if (dataIsReady(data.skills)) {
      [data.skills].map((el) => {
        el.map((el, index) => {
          skills.push(
            <div key={index}>
              <img id="SkillImg" src={el} style={{ borderRadius: data.round ? "50%" : "0%" }} />
            </div>
          )
        })
      })
      return skills
    }
  }

  function renderWebs() {
    let webs = [];
    if (dataIsReady(data.webs)) {
      [data.webs].map((el => {
        el.map((el, index) => {
          webs.push(
            <div key={index}>
              <p id="webUrl">{el[0]}</p>
              <p id="webDescription">{el[1]}</p>
            </div>
          )
        })
      }))
      return webs;
    }
  }

  function renderLangs() {
    let langs = [];
    if (dataIsReady(data.langs)) {
      [data.langs].map((el => {
        el.map((el, index) => {
          getLangValue(el[1])
          langs.push(
            <div key={index}>
              <p id="langName">{el[0]}</p>
              <div id="langWrapper">
                <div
                  id="langsBar"
                  style={{
                    width: getLangValue(el[1]),
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

  function renderExtraInfo() {
    let extraInfo = [];
    if (dataIsReady(data.extraInfo)) {
      [data.extraInfo].map((el => {
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

  function handleColor(event) {
    setBgColor(event.target.value)
  }

  return (
    <div>
      <div className="sticky bounce-in-top" style={{ animationDelay: "0.8s" }}>
        <div className="f-e">
          <button id="downloadAsPdf" className="btn" onClick={printDocument}>DESCARGAR EN PDF</button>
          <button id="downloadAsImg" className="btn" onClick={printDocument}>DESCARGAR EN IMAGEN</button>
          <label>Elige un color para tu CV
              <input type="color" value={BgColor} onChange={handleColor} />
          </label>
        </div>


        <div id="displayWrapper">
          <div className="f-e" style={{ backgroundColor: `${BgColor}`, flexDirection: data.generalColumn ? "column" : "row" }}>
            <img
              src={data.avatar == undefined ||
                data.avatar == "" ?
                DefaultAvatar : data.avatar}
              id="CvAvatar" />
            <div>
              <p id="DisplayName">{data.name}</p>
              <p id="DisplayEmail">{data.email}</p>
              <p className="displayBoldInfo">{data.phone}</p>
              <p className="displayBoldInfo">{data.web}</p>
            </div>
          </div>

          <div className="f-c">
            {renderSkills()}
          </div>

          {data.webs === undefined ||
            data.webs.length < 1 ? "" :
            <h3 className="SectionLabel">PROYECTOS Y WEBS</h3>}
          <div className="col-3">
            {renderWebs()}
          </div>

          {data.langs === undefined ||
            data.langs.length < 1 ? "" :
            <h3 className="SectionLabel">IDIOMAS</h3>}
          <div className="col-2">
            {renderLangs()}
          </div>

          {data.studies === undefined ||
            data.studies.length < 1 ? "" :
            <h3 className="SectionLabel">EDUCACIÓN</h3>}

          <div className="gridContainer" style={{ gridTemplateColumns: `repeat(${data.educationColumns}, 1fr)` }}>
            {renderStudies()}
          </div>

          {data.works === undefined ||
            data.works.length < 1 ? "" :
            <h3 className="SectionLabel">EXPERIENCIA LABORAL</h3>}
          {renderWorks()}

          {data.extraInfo === undefined ||
            data.extraInfo.length < 1 ? "" :
            <h3 className="SectionLabel">OTRAS HABILIDADES</h3>}

          <div className="gridContainer">
            {renderExtraInfo()}
          </div>

        </div>
      </div>
    </div>
  )

}

export default DisplayCv