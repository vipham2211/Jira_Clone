import styled from "styled-components";
import { color, font } from "utils/Styles";



export const EditorCont = styled.div`

.ql-toolbar.ql-snow {
    border-radius: 4px 4px 0 0;
    border: 1px solid ${color.borderLightest};
    border-bottom: none;
  }
.ql-editor{
    min-height: 110px;
    font-size:  15px;
    ${font.size(15)}
    ${font.regular}
    height: ${(props) => props.height}px;
}

  
`;