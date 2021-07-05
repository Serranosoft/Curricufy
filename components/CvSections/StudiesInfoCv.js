import { Grid3, SectionLabel } from "../../styles/StyledComponents"
import styled from "@emotion/styled";


function StudiesInfoCv({ studies, educationColumns }) {

    function renderStudies() {
        let studies_aux = [];
        /* if (dataIsReady(data.studies)) { */
        [studies].map((el) => {
            el.map((el, index) => {
                studies_aux.push(
                    <div key={index}>
                        <EducationTitle>{el[1]}</EducationTitle>
                        <EducationSchool>{el[0]}</EducationSchool>
                        <EducationDate>{el[2] === "" || el[3] ? "Estudiando actualmente" : el[2]}</EducationDate>
                    </div>);
            })
        })
        return studies_aux;
        /*  } */
    }

    return (
        <>
            {studies === undefined ||
                studies.length < 1 ? "" :
                <SectionLabel>EDUCACIÓN</SectionLabel>}

            <Grid3 style={{ gridTemplateColumns: `repeat(${educationColumns}, 1fr)` }}>
                {renderStudies()}
            </Grid3>
        </>
    )
}

export default StudiesInfoCv;

const EducationTitle = styled.p`
    margin-bottom: 0 ;
    line-height: 0.9;
    font-weight: bold;
    word-break: keep-all;
    font-size: 17px;
`
  
const EducationSchool = styled.p`
    margin-top: 8px;
`
  
const EducationDate = styled.p`
    font-weight: bold;
    font-size: 13px;
    line-height: 0.5px;
`