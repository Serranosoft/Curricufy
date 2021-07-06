import {FlexBetween, GridOptions, ErrorInput, FlexAround, HandleFiles, Button, SectionTitle} from "../../styles/StyledComponents"


function SkillsInfoForm({addSkills, resetSkills, handleRound, skillInput}) {

    return (
        <>
            <FlexBetween>
                <SectionTitle>Añade unos logos para tus habilidades</SectionTitle>
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