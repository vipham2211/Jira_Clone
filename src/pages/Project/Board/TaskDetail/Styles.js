import styled from "styled-components";
import { color, font } from "utils/Styles";


export const StyledTaskDetail = styled.div`

`
export const Content = styled.div`
  display: flex;
  padding: 0 30px 60px;
`;

export const Left = styled.div`
  width: 65%;
  padding-right: 50px;
`;

export const Right = styled.div`
  width: 35%;
  padding-top: 5px;
`;
export const TopActions = styled.div`
display: flex;
justify-content: space-between;
padding: 21px 18px 0;
`
export const TopActionsRight = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-left: 4px;
  }
`;
export const SelectItem = styled.div`
  display: flex;
  align-items: center;
  ${props => props.withBottomMargin && `margin-bottom: 5px;`}
`;
export const SectionTitle = styled.div`
  margin: 24px 0 5px;
  text-transform: uppercase;
  color: ${color.textMedium};
  ${font.size(12.5)}
  ${font.bold}
`;
export const SelectItemLabel = styled.div`
  padding: 0 3px 0 6px;
  text-transform:capitalize;
 
`;