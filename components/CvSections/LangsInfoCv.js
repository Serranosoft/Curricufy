import { Grid2, SectionLabel } from "../../styles/StyledComponents"
import styled from "@emotion/styled";

function LangsInfoCv({ langs }) {

  function renderLangs() {
    let langs_aux = [];
    /* if (dataIsReady(data.langs)) { */
    [langs].map((el => {
      el.map((el, index) => {
        getLangValue(el[1])
        langs_aux.push(
          <div key={index}>
            <LangName>{el[0]}</LangName>
            <LangWrapper>
              <LangsBar
                style={{
                  width: getLangValue(el[1]),
                  backgroundColor: el[2].length > 0 ? el[2] : "#db7fb5"
                }}>
                {el[1]}
              </LangsBar>
            </LangWrapper>
          </div>
        )
      })
    }))
    return langs_aux;
    /* } */
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

  return (
    <>
      {langs === undefined ||
        langs.length < 1 ? "" :
        <SectionLabel>IDIOMAS</SectionLabel>}
      <Grid2>
        {renderLangs()}
      </Grid2>

    </>
  )
}

export default LangsInfoCv;


const LangName = styled.p`
  line-height: 0.2;
  font-weight: bold;
`

const LangWrapper = styled.div`
  width: 80%;
  background-color: #ddd;
  margin: 0 auto;
`

const LangsBar = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  color: white;
  width: 90%;
  font-size: 12px;
  color: black;
  text-align: center;
`