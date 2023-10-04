import Form from "components/Form";
import styled from "styled-components";
import { font } from "utils/Styles";

export const StyledProjectCreate = styled.div`
        display:flex;
        justify-content:center;
        
`
export const FormElement = styled(Form.Element)`
  width: 100%;
  max-width: 640px;
`;
export const FormHeading = styled.div`
    padding:6px 0 15px;
    ${font.size(24)};
    ${font.medium}
`
export const ActionButton = styled.div`
       margin-top:30px;
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
