import Button from "components/Button";
import styled from "styled-components";
import { color, font } from "utils/Styles";



export const StyledTaskDetailsType = styled.div`
  width:150px
`


export const TypeButton = styled(Button)`
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${color.textMedium};
  ${font.size(13)}
`;

