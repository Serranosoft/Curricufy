import { FlexAround, Button, Label, Input, ErrorInput, FlexColumn } from "../../styles/StyledComponents"

function ExtraInfoForm({ handleChange, addExtraInfos, resetExtraInfo, extraInfoName }) {

    return (
        <>
            <h3>¿Quieres agregar otras habilidades?</h3>
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
                    <Button onClick={addExtraInfos}>+ Añadir Información </Button>
                    <Button onClick={resetExtraInfo}>- Eliminar Información </Button>
                </FlexAround>
            </FlexColumn>
        </>
    )

}

export default ExtraInfoForm