import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, font, mixin } from "utils/Styles";


export const StyledProjectManagement = styled.div`
  position:relative;
  height: 735px;
`
export const MembersContainer = styled.div`
    display: flex;
    align-items: center;
    height:100%;
    
`
export const AddMore = styled.div`
  display: inline-block;
  ${font.size(12.5)}
  ${mixin.link()}
  i {
    margin-right: 3px;
    vertical-align: middle;
    font-size: 14px;
  }
`;
export const Top = styled.div`
  margin-bottom:26px;
`
export const FieldButton = styled.div`
  display:flex;
  height:100%;
  align-items: center;
  gap: 10px;

  
`
export const LinkItem = styled(Link)`
color: ${color.primary};
background: ${color.backgroundLight};
`
export const LinkText = styled.div`

${font.size(14.7)};
`

export const GridOverlay = styled.div`
  position:relative;
  height:100%;
  width:100%;
`