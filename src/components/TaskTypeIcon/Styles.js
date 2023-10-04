import Icon from "components/Icon";
import styled from "styled-components";
import { taskTypeColors } from "utils/Styles";


export const TypeIcon = styled(Icon)`
        color: ${props => taskTypeColors[props.color]};
`