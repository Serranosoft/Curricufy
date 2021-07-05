import { ErrorInput, Label, Input, TextArea, FlexEvenly, Button, FlexColumn } from "../../styles/StyledComponents"


function WebsInfoForm({ handleChange, addWeb, resetWeb, ...data }) {

    return (
        <>
            <h3>¿Quieres agregar tus páginas web?</h3>
            <FlexColumn>
                <Label>
                    URL de la página web
                    <ErrorInput id="webInfoError"></ErrorInput>
                    <Input
                        id="webUrlInput"
                        type="text"
                        name="webUrl"
                        value={data.webUrl}
                        onChange={handleChange}
                        maxLength="50"
                        style={{ width: "90%" }}
                    />
                </Label>
                <Label>
                    Descripción de la página web
                    <ErrorInput id="webInfoError"></ErrorInput>
                    <TextArea
                        name="webDescription"
                        value={data.webDescription}
                        onChange={handleChange}
                        style={{ width: "90%" }}
                    />
                </Label>
                <FlexEvenly>
                    <Button onClick={addWeb}>+ Añadir página web </Button>
                    <Button onClick={resetWeb}>Eliminar página web</Button>
                </FlexEvenly>
            </FlexColumn>


        </>
    )

}

export default WebsInfoForm