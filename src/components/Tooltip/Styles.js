import Icon from "components/Icon";
import styled, { css } from "styled-components";
import { color, font, mixin } from "utils/Styles";

export const TooltipWrapper = styled.div`
  position: relative;
 
`;

export const TooltipContent = styled.div`
  position: absolute;
  top:${props => `${props.top}px`};
  left:${props => `${props.left}px`};
  padding: 8px;
  ${font.size(14)}
  ${mixin.boxShadowDropdown}
  background:#fff;
  border-radius: 4px;
  opacity: ${props => (props.visible ? 1 : 0)};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  &:after {
    content: "";
    position: absolute;
    border-width: 5px;
    border-style: solid;

    ${props => placementAffter[props.placement]}
  
  }
  ${props => typeBefore[props.type]}

`;

export const ChildrenWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
`
const typeBefore={
  hover:css`
  &:before{
    content: "";
    position: absolute; 
    ${props => placementBefore[props.placement]}
    width: 100%;
    height:10px;
  }

  `
}
const placementBefore = {
  top:css` 
  top:${props => `${props.toolTip.height}px`};
    left:0;
  `,
  left:css`
  top:0px;
  left:30px;
  `
}
const placementAffter = {
  top:css` 
  margin:9px 0 0 ${props=>(props.toolTip.width-16)/2-5}px;
  border-color:  ${color.primary} transparent  transparent  transparent ;
  `,
  right:css`
  top:${props=>props.toolTip.height/2+-10}px;
  left:-11px;
  border-color:  transparent ${color.primary}  transparent  transparent ;
  `
}
export const CloseIcon = styled(Icon)`
  position: absolute;
  font-size: 16px;
  color: ${color.textMedium};
  transition: all 0.1s;
  ${mixin.clickable}
  top: 0;
  right: -15px;
  width:20px;
  height:20px;
  background: #fff;
  border-radius: 4px;
  text-align: center;
  z-index:999;
  &:hover {
    background: ${color.backgroundLight};
  }
`;