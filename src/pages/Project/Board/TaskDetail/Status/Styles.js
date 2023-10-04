import styled, { css } from "styled-components";
import {  mixin, taskStatusBackgroundColors, taskStatusColors } from "utils/Styles";

export const Status = styled.div`
  text-transform: uppercase;
  transition: all 0.1s;
  min-height:32px;
  ${props => mixin.tag(taskStatusBackgroundColors[props.color], taskStatusColors[props.color])}
  ${props =>
    props.color &&
    css`
      padding: 0 20px 0  12px;
      height: 32px;
      &:hover {
        transform: scale(1.05);
      }
    `}
`;

