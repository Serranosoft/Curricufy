import { FlexAround, Button, Label, Input, ErrorInput, FlexColumn, SectionTitle } from "../../styles/StyledComponents"

function ExtraInfoForm({ handleChange, addExtraInfos, resetExtraInfo, extraInfoName }) {

    return (
        <>
            <SectionTitle>¿Quieres agregar otras habilidades?</SectionTitle>
            <FlexColumn>
                <Label>
                    Describe
                    <ErrorInput id="extraInfoError"></ErrorInput>
                    <Input
                        id="extraInfoInput"
                        type="text"
                        name="extraInfoName"
                        value={extraInfoName}
                        onChange={handleChange}
                        maxLength="78"
                        style={{width: "90%"}}
                    />
                </Label>

                <FlexAround>
                    <Button onClick={addExtraInfos}>+ Añadir Info </Button>
                    <Button onClick={resetExtraInfo}>- Quitar Info </Button>
                </FlexAround>
            </FlexColumn>
        </>
    )

}

export default ExtraInfoForm