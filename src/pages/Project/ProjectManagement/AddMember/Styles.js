import styled from "styled-components";
import { color, mixin } from "utils/Styles";

export const StyledAddMember = styled.div`
    min-width:200px;
`

export const User = styled.div`
    display:flex;
    align-items:center;
    padding:5px;
    ${mixin.clickable}
    &:hover{
        background-color:${color.backgroundLight}
    }
`
export const Name=styled.div`
margin-left:5px;
`
