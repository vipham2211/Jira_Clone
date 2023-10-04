import Icon from 'components/Icon';
import styled from 'styled-components';

import { taskPriorityColors } from 'utils/Styles';

export const PriorityIcon = styled(Icon)`
  color: ${props => taskPriorityColors[props.color]};
`;