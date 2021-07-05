import { FlexCenter } from "../../styles/StyledComponents"
import styled from "@emotion/styled";


function SkillsInfoCv({ skills, round }) {
    function renderSkills() {
        let skills_aux = [];
        /* if (dataIsReady(skills)) { */
        [skills].map((el) => {
            el.map((el, index) => {
                skills_aux.push(
                    <div key={index}>
                        <SkillImg src={el} style={{ borderRadius: round ? "50%" : "0%" }} />
                    </div>
                )
            })
        })
        return skills_aux
        /*    } */
    }


    return (
        <FlexCenter>
            {renderSkills()}
        </FlexCenter>
    )
}

export default SkillsInfoCv;

const SkillImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px 5px;
`