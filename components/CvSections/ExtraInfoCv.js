import { Grid3, SectionLabel } from "../../styles/StyledComponents"
import styled from "@emotion/styled";

function ExtraInfoCv({ extraInfo }) {

    function renderExtraInfo() {
        let extraInfo_aux = [];
        /* if (dataIsReady(data.extraInfo)) { */
            [extraInfo].map((el => {
                el.map((el, index) => {
                    extraInfo_aux.push(
                        <div key={index}>
                            <ExtraInfoName>{el}</ExtraInfoName>
                        </div>
                    )
                })
            }))
            return extraInfo_aux;
      /*   } */
    }

    return (
        <>
            {extraInfo === undefined ||
                extraInfo.length < 1 ? "" :
                <SectionLabel>OTRAS HABILIDADES</SectionLabel>}

            <Grid3>
                {renderExtraInfo()}
            </Grid3>
        </>
    )
}

export default ExtraInfoCv;

const ExtraInfoName  = styled.p`
    font-weight: bold;
    word-break: break-all;
`
  /*
  
  .gridContainer {
  width: 96%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 0 auto;
}


`
const Grid3 = styled.div`
    width: 95%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto;
`

*/