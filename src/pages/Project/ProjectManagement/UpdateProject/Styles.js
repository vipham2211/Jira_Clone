import Button from "components/Button";
import Form from "components/Form";
import styled from "styled-components";


export const StyledUpdateProject = styled.div`
    padding:25px 35px 60px;
`

export const FormElement = styled(Form.Element)`
  width: 100%;
  max-width: 640px;
`;
export const SelectItem = styled.div`
  display: flex;
  align-items: center;
 
  ${props => props.withBottomMargin && `margin-bottom: 5px;`}
`;
export const SelectItemLabel = styled.div`
  padding: 0 3px 0 6px;
  text-transform:capitalize;
  
`;


export const Group = styled.div`
    display:flex;
    justify-content:space-between;
    gap:10px;
    & > * {
      flex:1;
      
  }
`
export const Actions = styled.div`
display: flex;
justify-content: flex-end;
padding-top: 30px;
`;
export const ActionButton = styled(Button)`
margin-left: 10px;
`;