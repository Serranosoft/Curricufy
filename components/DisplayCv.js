import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import domtoimage from "dom-to-image"
import GeneralInfoCv from "./CvSections/GeneralInfoCv";
import WorksInfoCv from "./CvSections/WorksInfoCv";
import StudiesInfoCv from "./CvSections/StudiesInfoCv";
import SkillsInfoCv from "./CvSections/SkillsInfoCv";
import LangsInfoCv from "./CvSections/LangsInfoCv";
import WebsInfoCv from "./CvSections/WebsInfoCv";
import ExtraInfoCv from "./CvSections/ExtraInfoCv";
import styled from "@emotion/styled"
import {FlexEvenly, ChooseColor, Label, Sticky} from "../styles/StyledComponents"

function DisplayCv({ sections, name, email, phone, web, studies, educationColumns, works, skills, round, langs, avatar, webs, extraInfo, generalColumn }) {

  const [BgColor, setBgColor] = useState("#797cad");

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

  function handleColor(event) {
    setBgColor(event.target.value)
  }

  return (
    <div>
      <Sticky className="bounce-in-top" style={{ animationDelay: "0.8s" }}>
        <FlexEvenly gridOpt>
          <DownloadButton id="downloadAsPdf" onClick={printDocument}>DESCARGAR EN PDF</DownloadButton>
          <DownloadButton id="downloadAsImg" onClick={printDocument}>DESCARGAR EN IMAGEN</DownloadButton>
        </FlexEvenly>
          <Label style={{textAlign: "center", marginTop: "8px"}}>Elige un color para tu CV
            <ChooseColor type="color" value={BgColor} onChange={handleColor} style={{margin: "0 auto"}} />
          </Label>
        <DisplayWrapper id="displayWrapper">
          
          <GeneralInfoCv
            generalColumn={generalColumn}
            avatar={avatar}
            name={name}
            email={email}
            phone={phone}
            web={web}
            BgColor={BgColor}
          />

          <SkillsInfoCv
            skills={skills}
            round={round}
          />

          <WebsInfoCv
            webs={webs}
          />

          <LangsInfoCv
            langs={langs}
          />

          <StudiesInfoCv
            studies={studies}
            educationColumns={educationColumns}
          />
          
          <WorksInfoCv
            works={works}
            round={round}
          />

          <ExtraInfoCv
            extraInfo={extraInfo}
          />

        </DisplayWrapper>
      </Sticky>
    </div>
  )

}

export default DisplayCv

const DisplayWrapper = styled.div`
  width: 650px;
  max-width: 650px;
  min-height: 650px;
  text-align: center;
  background: white;
  color: black;
  @media(max-width: 920px) {
    width: 100%;
    margin: 0 auto;
  }
`

const DownloadButton = styled.button`
  padding: 10px 24px;
  border-radius: 5px;
  outline: 0;
  border: 3px solid #a96da3;
  background-color: transparent;
  color: black;
  font-weight: bold;
  font-family: "Inter", sans-serif;
  cursor: pointer;
  &:hover {
    background-color: #a96da3;
  }
`
  /*   function dataIsReady(data) {
      if (data != undefined) {
        if (data.length > 0) {
          handleReady(true)
        }
      }
      handleReady(false)
    }
  
    useEffect(() => {
  
    }, [data]) */