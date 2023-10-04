import Avatar from "components/Avatar";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { font } from "utils/Styles";
import { color } from "utils/Styles";
import { mixin } from "utils/Styles";

export const StyledTask = styled.div`
    padding:10px;
    ${mixin.boxShadowMedium};
    background:#fff;
    border-radius:3px;
    ${mixin.clickable}
    transition: background 0.1s;
    margin-bottom:5px;
    &:hover {
        background: ${color.backgroundLight};
      }
    ${props =>
        props.isBeingDragged &&
        css`
          transform: rotate(3deg);
          box-shadow: 5px 10px 30px 0px rgba(9, 30, 66, 0.15);
        `}
`
export const Title = styled.p`
  padding-bottom: 11px;
  ${font.size(15)}
 
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Assignees = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-left: 2px;
`;
export const AssigneeAvatar = styled(Avatar)`
  margin-left: -2px;
  box-shadow: 0 0 0 2px #fff;
  display:flex;
  justify-content: center;
  align-items:center;
  color:${color.textDark}
  
`;
export const TaskLink = styled(Link)`
  display: block;
  margin-bottom: 5px;
`;