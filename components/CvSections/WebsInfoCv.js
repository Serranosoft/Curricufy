import { Grid2, SectionLabel } from "../../styles/StyledComponents"
import styled from "@emotion/styled";

function WebsInfoCv({ webs }) {

    function renderWebs() {
        let webs_aux = [];
        /* if (dataIsReady(data.webs)) { */
        [webs].map((el => {
            el.map((el, index) => {
                webs_aux.push(
                    <div key={index}>
                        <WebUrl>{el[0]}</WebUrl>
                        <WebDescription>{el[1]}</WebDescription>
                    </div>
                )
            })
        }))
        return webs_aux;
        /*  } */
    }

    return (
        <>
            {webs === undefined ||
                webs.length < 1 ? "" :
                <SectionLabel>PROYECTOS Y WEBS</SectionLabel>}
            <Grid2>
                {renderWebs()}
            </Grid2>
        </>
    )
}

export default WebsInfoCv;

const WebUrl = styled.p`
    font-weight: bold;
`
  
const WebDescription = styled.p`
    width: 100%;
    text-align: center;
    word-wrap: break-word;
    font-size: 13px;

`
