import styled from 'styled-components';
import { color, font } from 'utils/Styles';



export const Container = styled.div`
  color: ${color.textMedium};
  ${font.size(15)};
  ${font.regular}
 
`;

export const Divider = styled.span`
  position: relative;
  top: 2px;
  ${font.size(18)};
`;
