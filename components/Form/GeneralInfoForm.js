import { ProfileImg, Input, FlexBetween, GridOptions, Grid2, Label, HandleFiles } from "../../styles/StyledComponents"

function GeneralInfoForm({ data, setValues, handleColumns, hoverColumns, unHoverColumns }) {

    return (
        <>
            <ProfileImg src={data.avatar === "" ? "/images/user.png" : data.avatar} />
            <HandleFiles type="file" name="avatar" onChange={setValues} style={{margin: "16px auto"}}></HandleFiles>
            <FlexBetween>
                <h3>Información general sobre ti</h3>
                <div>
                    <GridOptions
                        id="GenGrid1"
                        src="/images/grid1.svg"
                        onClick={handleColumns}
                        onMouseOver={hoverColumns}
                        onMouseLeave={unHoverColumns}
                    />
                    <GridOptions
                        id="GenGrid2"
                        src="/images/grid2.svg"
                        onClick={handleColumns}
                        onMouseOver={hoverColumns}
                        onMouseLeave={unHoverColumns}
                    />
                </div>
            </FlexBetween>

            <Grid2>
                <Label>Nombre:
                    <Input
                        type="text"
                        value={data.name}
                        name="name"
                        maxLength="30"
                        onChange={setValues}
                    />
                </Label>

                <Label>Email:
                    <Input
                        type="text"
                        value={data.email}
                        name="email"
                        maxLength="35"
                        onChange={setValues}
                    />
                </Label>

                <Label>Número de teléfono:
                    <Input
                        type="tel"
                        value={data.phone}
                        name="phone"
                        maxLength="15"
                        pattern="[0-9+ ]*"
                        onChange={setValues} />
                </Label>

                <Label>Web personal:
                    <Input
                        type="text"
                        value={data.web}
                        name="web"
                        maxLength="35"
                        onChange={setValues} />
                </Label>
            </Grid2>
        </>
    )
}


export default GeneralInfoForm