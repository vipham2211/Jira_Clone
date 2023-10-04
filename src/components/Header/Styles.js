import styled from 'styled-components';
import { font } from 'utils/Styles';



export const StyledHeader = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
`;

export const BoardName = styled.div`
  ${font.size(24)}
  ${font.medium}
`;