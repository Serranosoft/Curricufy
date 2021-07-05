import { Grid3, SectionLabel } from "../../styles/StyledComponents"
import styled from "@emotion/styled";

function WorksInfoCv({ works }) {

    function renderWorks() {
        let works_aux = [];
        /* if (dataIsReady(data.works)) { */
        [works].map((el) => {
            el.map((el, index) => {
                works_aux.push(
                    <WorksWrapper key={index}>
                        <CompanyPosition>{el[1]}</CompanyPosition>
                        <CompanyName>{el[0]}</CompanyName>
                        <InfoWork>
                            <p>{el[2]} &nbsp;-</p>
                            <p> &nbsp; {el[3] === "" ? "Actually working here" : el[3]}</p>
                        </InfoWork>
                        <WorkDescription>{el[4]}</WorkDescription>
                    </WorksWrapper>);
            })
        })
        return works_aux;
        /*  } */

    }

    return (
        <>
            {works === undefined ||
                works.length < 1 ? "" :
                <SectionLabel>EXPERIENCIA LABORAL</SectionLabel>}
            {renderWorks()}
        </>
    )
}

export default WorksInfoCv;

const CompanyPosition = styled.p`
    font-weight: bold;
    line-height: 0.2;

`

const CompanyName = styled.p`
    font-size: 15px;
    line-height: 0.4;
    margin: 0;
`

const InfoWork = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    line-height: 0.9;

`
const WorkDescription = styled.p`
    width: 380px;
    margin: 0 auto;
    text-align: center;
    word-wrap: break-word;
    font-size: 13px;
`

const WorksWrapper = styled.div`
    width: 100%;
    margin-top: 24px;
    &:after {
        width: 45%;
        display: block;
        content: "";
        height: 5px;
        margin: 0 auto;
        border-bottom: 2px solid grey;
    }
`