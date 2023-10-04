import Button from 'components/Button';
import styled from 'styled-components';



import { font } from 'utils/Styles';

export const StyledConfirmModal = styled.div`
  padding: 35px 40px 40px;
`;

export const Title = styled.div`
  padding-bottom: 25px;
  ${font.medium}
  ${font.size(22)}
  line-height: 1.5;
`;

export const Message = styled.p`
  padding-bottom: 25px;
  white-space: pre-wrap;
  ${font.size(15)}
`;

export const Actions = styled.div`
  display: flex;
  padding-top: 6px;
`;

export const StyledButton = styled(Button)`
  margin-right: 10px;
`;