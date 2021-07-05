import {Grid2, FlexBetween, ErrorInput, Label, Input, Button, TextArea} from "../../styles/StyledComponents"

function ExperienceInfoForm({handleChange, addWorks, resetWorks, ...data}) {

    return (
        <div>
            <h3>¿Quieres añadir experiencia laboral?</h3>
            <Grid2>
                <Label>Empresa:
                    <ErrorInput id="companyNameError"></ErrorInput>
                    <Input
                        type="text"
                        value={data.companyName}
                        name="companyName"
                        onChange={handleChange} />
                </Label>

                <Label>Posición en la empresa:
                    <ErrorInput id="companyPositionError"></ErrorInput>
                    <Input
                        type="text"
                        value={data.companyPosition}
                        name="companyPosition"
                        onChange={handleChange} />
                </Label>

                <Label>¿Cuando empezaste a trabajar?
                    <ErrorInput id="startWorkingError"></ErrorInput>
                    <Input
                        type="date"
                        value={data.startWorking}
                        name="startWorking"
                        onChange={handleChange}
                    />

                </Label>

                <Label>¿Cuando terminaste de trabajar?
                    <ErrorInput id="finishWorkingError"></ErrorInput>
                    <Input
                        type="date"
                        value={data.finishWorking}
                        name="finishWorking"
                        onChange={handleChange}
                    />

                </Label>

                <Label>Describe brevemente tu trabajo
                    <ErrorInput id="workDescriptionError"></ErrorInput>
                    <TextArea
                        value={data.workDescription}
                        name="workDescription"
                        onChange={handleChange}
                    />

                </Label>

                <FlexBetween>
                    <Button onClick={addWorks}>+ Añadir Trabajo </Button>
                    <Button onClick={resetWorks}>- Eliminar trabajo </Button>
                </FlexBetween>
            </Grid2>
        </div>
    )
}

export default ExperienceInfoForm