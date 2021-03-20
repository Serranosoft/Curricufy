import React, { useEffect, useState } from "react";
import SkillsInfoForm from "../Form/SkillsInfoForm";
import RoundImg from "../../styles/images/round.png"
import RoundImgActive from "../../styles/images/roundActive.png"

export function SkillsInfoContainer(props) {

    let skillInput = React.createRef();
    const [roundEffect, changeRoundEffect] = useState(false)

    function addSkills(e) {
        e.preventDefault();
        if (skillInput.current.files[0] != undefined) {
            let skillsAux = [];
            [...skillInput.current.files].forEach(element => {
                skillsAux.push([URL.createObjectURL(element)]);
            });
            if (skillsAux.length <= 7) {
                document.getElementById("skillsError").innerHTML = ""
                props.setValues({ "skills": skillsAux })
            } else {
                document.getElementById("skillsError").innerHTML = "Solo puedes agregar hasta 7 habilidades"
            }
        } else {
            document.getElementById("skillsError").innerHTML = "Elige una imágen"
        }
    }

    function resetSkills(e) {
        e.preventDefault();
        props.setValues({ "skills": [] });
    }

    function handleRound() {
        changeRoundEffect(!roundEffect)
        roundEffect ?
            document.getElementById("roundImg").setAttribute("src", RoundImg) :
            document.getElementById("roundImg").setAttribute("src", RoundImgActive)
    }

    useEffect(() => {
        props.setValues({ "round": roundEffect })
    }, [roundEffect])

    return (
        <SkillsInfoForm
            addSkills={addSkills}
            resetSkills={resetSkills}
            handleRound={handleRound}
            skillInput={skillInput}
        />
    )
}

export default SkillsInfoContainer