import Icon from "components/Icon";
import styled, { css } from "styled-components";
import { color, mixin, zIndexValues } from "utils/Styles";


export const ModalOverlay= styled.div`
    z-index: ${zIndexValues.modal};
    position: fixed;
    top: 0;
    left: 0;
    ${props=> modalOverlay[props.variant]}
    height: 100%;
    width: 100%;
    background: rgba(9, 30, 66, 0.54);
    ${mixin.scrollableY}
`

const modalOverlay = {
  center:css`
  display: flex;
  justify-content:center;
  align-items: center;
  `,
  right:css`
  display: flex;
  justify-content:flex-end;
  `
}

export const StylesModal = styled.div`
        position:relative;
        display: inline-block;
        background: #fff;
        min-height:250px;
        ${props => modalStyles[props.variant]}
`
const modalStyles = {
    center: css`
      width: ${props => props.width}px;
      border-radius: 3px;
      ${mixin.boxShadowMedium}
    `,
    aside: css`
      min-height: 100vh;
      width: ${props => props.width}px;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
    `,
    right: css`
      min-height: 100vh;
      width: ${props => props.width}px;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
    `

  };
export const CloseIcon = styled(Icon)`
  position: absolute;
  font-size: 25px;
  color: ${color.textMedium};
  transition: all 0.1s;
  ${mixin.clickable}
  ${props => closeIconStyles[props.variant]}
`;

const closeIconStyles={
  center: css`
  top: 10px;
  right: 12px;
  padding: 3px 5px 0px 5px;
  border-radius: 4px;
  &:hover {
    background: ${color.backgroundLight};
  }
`,
  aside: css`
  top: 10px;
  right: -25px;
  width: 50px;
  height: 50px;
  padding-top: 10px;
  border-radius: 3px;
  text-align: center;
  background: #fff;
  border: 1px solid ${color.borderLightest};
  ${mixin.boxShadowMedium};
  &:hover {
    color: ${color.primary};
  }
`,
right: css`
top: 10px;
left: -20px;
width: 40px;
height: 40px;
padding-top: 5px;
border-radius: 3px;
text-align: center;
background: #fff;
border: 1px solid ${color.borderLightest};
${mixin.boxShadowMedium};
&:hover {
  color: ${color.primary};
}
`
}

