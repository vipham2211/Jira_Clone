import { mixin } from "lodash";
import styled from "styled-components";
import { color, font } from "utils/Styles";

export const StyledList = styled.div`
display: flex;
flex-direction: column;
margin: 0 5px;
min-height: 400px;
width: 25%;
border-radius: 3px;
background: ${color.backgroundLightest};
   
`
export const Title = styled.div`
padding: 13px 10px 17px;
text-transform: uppercase;
user-select: none; 
color: ${color.textMedium};
${font.size(12.5)};
${mixin.truncateText}
`
export const IssuesCount = styled.span`
  text-transform: lowercase;
  ${font.size(13)};
`;
export const Tasks = styled.div`
    padding:0 5px;
    height:100%;
   
`