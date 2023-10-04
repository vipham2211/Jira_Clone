import styled from "styled-components";
import { font } from "utils/Styles";

export const StyledTrackingModal = styled.div`
        padding:20px 25px 25px;
`
export const ModalTitle = styled.div`
  padding-bottom: 14px;
  ${font.medium}
  ${font.size(20)}
`;
export const ModalContent=styled.div`
    display:flex;
    margin: 20px -5px 30px;
`
export const FieldCont=styled.div`
     width:50%;
    margin:0 5px;
`

export const Actions = styled.div`
display: flex;
  justify-content: flex-end;
`