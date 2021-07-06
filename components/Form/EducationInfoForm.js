import { GridOptions, FlexBetween, Input, ErrorInput, Grid2, Button, Label } from "../../styles/StyledComponents"

function EducationInfoForm({ handleChange, addStudies, resetStudies, hoverColumns, unHoverColumns, handleColumns, ...data }) {

    return (
        <>
            <FlexBetween gridOpt>
                <h3>Tus estudios academicos</h3>
                <div>
                    <GridOptions
                        id="EducGrid1"
                        src="/images/grid1.svg"
                        onClick={handleColumns}
                        onMouseOver={hoverColumns}
                        onMouseLeave={unHoverColumns}
                    />
                    <GridOptions
                        id="EducGrid2"
                        src="/images/grid2.svg"
                        onClick={handleColumns}
                        onMouseOver={hoverColumns}
                        onMouseLeave={unHoverColumns}
                    />
                    <GridOptions
                        id="EducGrid3"
                        src="/images/grid3.svg"
                        onClick={handleColumns}
                        onMouseOver={hoverColumns}
                        onMouseLeave={unHoverColumns}
                    />
                </div>
            </FlexBetween>
            <Grid2>
                <Label>Escuela:
                    <ErrorInput id="schoolError"></ErrorInput>
                    <Input
                        type="text"
                        value={data.schoolName}
                        name="schoolName"
                        maxLength="35"
                        onChange={handleChange} />
                </Label>

                <Label>Título:
                    <ErrorInput id="titleError"></ErrorInput>
                    <Input
                        type="text"
                        value={data.datatitleName}
                        name="titleName"
                        maxLength="40"
                        onChange={handleChange} />
                </Label>

                <Label>Fecha a finalizar
                    <ErrorInput id="dateStudyError"></ErrorInput>
                    <Input
                        type="date"
                        value={data.dateStudy}
                        name="dateStudy"
                        onChange={handleChange}
                    />

                    <span>Estoy estudiando actualmente
                        <Input
                            id="studying"
                            type="checkbox"
                            checked={data.finishStudy}
                            value={data.finishStudy}
                            name="finishStudy"
                            onChange={handleChange}
                        />
                    </span>
                </Label>

                <FlexBetween>
                    <Button
                        type="submit"
                        value="+ Add a Study"
                        onClick={addStudies}>+ Añadir Estudio
                    </Button>

                    <Button
                        value="Reset Studies"
                        onClick={resetStudies}>- Eliminar Estudio
                    </Button>
                </FlexBetween>

            </Grid2>
        </>

    )
}


export default EducationInfoForm