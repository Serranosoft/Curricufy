import {FlexBetween, GridOptions, ErrorInput, FlexAround, HandleFiles, Button} from "../../styles/StyledComponents"


function SkillsInfoForm({addSkills, resetSkills, handleRound, skillInput}) {

    return (
        <>
            <FlexBetween>
                <h3>Añade unos logos para tus habilidades</h3>
                <GridOptions
                    id="roundImg"
                    src="/images/round.svg"
                    onClick={handleRound}
                />
            </FlexBetween>
            <ErrorInput id="skillsError"></ErrorInput>
            <FlexAround id="skillsInfoForm">
                <HandleFiles
                    type="file"
                    ref={skillInput}
                    multiple />
                <Button onClick={addSkills}>+ Añadir Habilidad</Button>
                <Button onClick={resetSkills}>Eliminar Habilidades</Button>
            </FlexAround>
        </>
    )

}


export default SkillsInfoForm