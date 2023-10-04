import Icon from "components/Icon";
import styled from "styled-components";
import { color, font, mixin } from "utils/Styles";

export const IssueSearch = styled.div`
  padding: 25px 35px 60px;
 
`;

export const SearchInputCont = styled.div`
    position: relative;
    height:40px;
    padding-right: 30px;
    margin-bottom: 40px;
`

export const InputElement = styled.input`
        width:100%;
        height:100%;
        padding:0 0 0 32px;
        border:0;
        border-bottom: 2px solid ${color.primary};
        ${font.size(21)};
        ${font.regular}
`

export const SearchIcon = styled(Icon)`
        position: absolute;
        top: 8px;
        left: 0;
        color: ${color.textMedium};
`

export const SectionTitle = styled.div`
       padding-bottom:12px;
       text-transform : uppercase;
       color:${color.textMedium};
       ${font.bold};
       ${font.size(11.5)}
      
`

export const Issue = styled.div`
        display:flex;
        padding: 4px 10px;
        border-radius: 4px; 
        transition: background 0.1s;
        ${mixin.clickable}
        &:hover {
          background: ${color.backgroundLight};
        }    
`



export const IssueData = styled.div`
      padding:0 0 0 15px;
`

export const IssueTitle = styled.div`
        color: ${color.textDark};
        ${font.size(15)}
`
export const IssueTypeId=styled.div`
        text-transform:uppercase;
        color: ${color.textMedium};
        ${font.size(12.5)};
`
