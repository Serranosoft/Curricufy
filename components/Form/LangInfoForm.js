import { Grid2, Label, ErrorInput, Button, Select, FlexBetween, Input, ChooseColor, SectionTitle } from "../../styles/StyledComponents"

function LangInfoForm({ handleChange, addLangs, resetLangs, ...data }) {
    return (
        <>
            <SectionTitle>Añade algunos idiomas</SectionTitle>
            <Grid2 id="langInfoForm">
                <Label> Idioma
                    <ErrorInput id="langNameError"></ErrorInput>
                    <Input
                        type="text"
                        value={data.langName}
                        name="langName"
                        maxLength="15"
                        onChange={handleChange} />
                </Label>

                <Label> Nivel
                    <Select value={data.level} onChange={handleChange} name="level">
                        <option value="Basico">Bajo</option>
                        <option value="Intermedio (Bajo)">Intermedio-bajo</option>
                        <option value="Intermedio (Alto)">Intermedio-alto</option>
                        <option value="Alto">Alto</option>
                        <option value="Nativo">Nativo</option>
                    </Select>
                </Label>

                <Label> Elige un color
                    <ChooseColor
                        type="color"
                        name="langColor"
                        value={data.langColor}
                        onChange={handleChange} />
                </Label>

                <FlexBetween>
                    <Button onClick={addLangs}>+ Añadir Idioma</Button>
                    <Button onClick={resetLangs}>- Eliminar Idioma</Button>
                </FlexBetween>
            </Grid2>
        </>
    )
}

export default LangInfoForm