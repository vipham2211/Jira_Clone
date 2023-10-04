import Button from "components/Button";
import Form from "components/Form";
import styled, { css } from "styled-components";
import { color, font, taskStatusBackgroundColors, taskStatusColors, mixin } from "utils/Styles";



export const FormElement = styled(Form.Element)`
  padding: 25px 40px 35px;
`;
export const FormHeading = styled.div`
    padding-bottom: 15px;
    ${font.size(21)}
`

export const SelectItem = styled.div`
  display: flex;
  align-items: center;
  ${props => props.withBottomMargin && `margin-bottom: 5px;`}
`;

export const SelectItemLabel = styled.div`
  padding: 0 3px 0 6px;
  text-transform:capitalize;
`;
export const Status = styled.div`
  text-transform: uppercase;
  transition: all 0.1s;
  min-height:32px;
  ${props => mixin.tag(taskStatusBackgroundColors[props.color], taskStatusColors[props.color])}
  ${props =>
    props.color &&
    css`
      padding: 0 20px 0  12px;
      height: 32px;
      &:hover {
        transform: scale(1.05);
      }
    `}
`;
export const TimeTracking = styled.div`
      margin-top:20px;
`
export const TrackingLink = styled.div`
  border-radius: 4px;
  transition: background 0.1s;
  ${mixin.clickable}
  &:hover {
    background: ${color.backgroundLight};
  }
`;
export const SectionTitle = styled.div`
  margin-bottom:5px;
  text-transform: capitalize;
  color: ${color.textMedium};
  ${font.size(13)}
  ${font.bold}
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
`;
export const ActionButton = styled(Button)`
  margin-left: 10px;
`;
export const Content = styled.div`
  display: flex;

`;

export const Left = styled.div`
  width: 65%;
  padding-right: 40px;
`;

export const Right = styled.div`
  width: 35%;

`;





