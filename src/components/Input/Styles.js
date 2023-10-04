import Icon from "components/Icon";
import styled, { css } from "styled-components";
import { color, font } from "utils/Styles";



export const StyledInput = styled.div`
    position: relative;
    display: inline-block;
    height: 32px;
    width: 100%;
`

export const InputElement  = styled.input`
    height: 100%;
    width: 100%;
    border-radius:3px;
    padding: 0 5px;
    border:1px solid ${color.borderLightest};
    color:${color.textDarkest};
    background:${color.backgroundLightest};
    ${font.regular};
    ${font.size(14)}
    ${props => props.hasIcon && 'padding-left: 32px'};
    &:focus {
        background: #fff;
        border: 1px solid ${color.borderInputFocus};
        box-shadow: 0 0 0 1px ${color.borderInputFocus};
      }
      ${props =>
        props.invalid &&
        css`
          &,
          &:focus {
            border: 1px solid ${color.danger};
            box-shadow: none;
          }
        `}
        ${props =>
          props.disabled &&
          css`
            &,
            &:hover {
              cursor: not-allowed;
            }
          `}
`
export const StyledIcon = styled(Icon)`
  position: absolute;
  top: 8px;
  left: 8px;
  pointer-events: none;
  color: ${color.textMedium};
`;