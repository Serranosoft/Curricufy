import {DisplayBoldInfo, FlexEvenly} from "../../styles/StyledComponents"
import styled from "@emotion/styled";

function GeneralInfoCv({generalColumn, avatar, name, email, phone, web, BgColor}) {
    return (
        <FlexEvenly style={{ backgroundColor: `${BgColor}`, flexDirection: generalColumn ? "column" : "row" }}>
        <CvAvatar
          src={avatar == undefined ||
            avatar == "" ?
            "/images/user.png" : avatar}
        />
        <div>
          <DisplayName>{name}</DisplayName>
          <DisplayEmail>{email}</DisplayEmail>
          <DisplayBoldInfo>{phone}</DisplayBoldInfo>
          <DisplayBoldInfo>{web}</DisplayBoldInfo>
        </div>
      </FlexEvenly>
    )
}

export default GeneralInfoCv;

const DisplayName = styled.p`
  font-size: 22px;
  line-height: 0.2;
`

const DisplayEmail = styled.p`
  line-height: 0.5;
  font-size: 14px;
`

const CvAvatar = styled.img`
  max-width: 250px;
  max-height: 150px;
  margin: 8px 0;
  border-radius: 50%;
`