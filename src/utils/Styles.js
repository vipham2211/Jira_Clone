import Color from 'color';
import { css } from 'styled-components';

export const color = {
  primary: '#0052cc', // Blue
  success: '#0B875B', // green
  danger: '#E13C3C', // red
  warning: '#F89C1C', // orange
  secondary: '#F4F5F7', // light grey

  textDarkest: '#172b4d',
  textDark: '#42526E',
  textMedium: '#5E6C84',
  textLight: '#8993a4',
  textLink: '#0052cc',

  backgroundDarkPrimary: '#0747A6',
  backgroundMedium: '#dfe1e6',
  backgroundLight: '#ebecf0',
  backgroundLightest: '#F4F5F7',
  backgroundLightPrimary: '#D2E5FE',
  backgroundLightSuccess: '#E4FCEF',

  borderLightest: '#dfe1e6',
  borderLight: '#C1C7D0',
  borderInputFocus: '#4c9aff',

  
};


export const taskTypeColors = {
  story:'#65BA43',
  task: '#4FADE6', // blue
  bug: '#E44D42', // red
};
export const taskPriorityColors = {
  High: '#CD1317', // red
  Medium: '#E97F33', // orange
  Low: '#2D8738', // green
  Lowest: '#57A55A', // green
};
export const taskStatusColors = {
  BACKLOG: color.textDark,
  INPROGRESS: '#fff',
  SELECTED: color.textDark,
  DONE: '#fff',
};
export const taskStatusBackgroundColors = {
  BACKLOG: color.backgroundMedium,
  INPROGRESS: color.primary,
  SELECTED: color.backgroundMedium,
  DONE: color.success,
};

export const taskStatus={
  '1':'BACKLOG',
  '2':'SELECTED',
  '3':'INPROGRESS',
  '4':'DONE'
}
export const taskType={
  '0':'story',
  '1':'bug',
  '2':'task'
}
export const taskPriority={
  '1':'High',
  '2':'Medium',
  '3':'Low',
  '4':'Lowest'
}
export const sizes = {
  appNavBarLeftWidth: 64,
  secondarySideBarWidth: 230,
  minViewportWidth: 1000,
};
export const font = {
  regular: 'font-family: "CircularStdBook"; font-weight: normal;',
  medium: 'font-family: "CircularStdMedium"; font-weight: normal;',
  bold: 'font-family: "CircularStdBold"; font-weight: normal;',
  black: 'font-family: "CircularStdBlack"; font-weight: normal;',
  size: size => `font-size: ${size}px;`,
};
export const zIndexValues = {
  modal: 1000,
  dropdown: 101,
  navLeft: 100,
};


export const mixin = {

  darken: (colorValue, amount) =>
  Color(colorValue)
    .darken(amount)
    .string(),
lighten: (colorValue, amount) =>
  Color(colorValue)
    .lighten(amount)
    .string(),
rgba: (colorValue, opacity) =>
  Color(colorValue)
    .alpha(opacity)
    .string(),
  clickable: css`
    cursor: pointer;
    user-select: none;
  `,
  link: (colorValue = color.textLink) => css`
  cursor: pointer;
  color: ${colorValue};
  ${font.medium}
  &:hover, &:visited, &:active {
    color: ${colorValue};
  }
  &:hover {
    text-decoration: underline;
  }
`,
  boxShadowMedium: css`
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
`,
  boxShadowDropdown: css`
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
`,
  placeholderColor: colorValue => css`
::-webkit-input-placeholder {
  color: ${colorValue} !important;
  opacity: 1 !important;
}
:-moz-placeholder {
  color: ${colorValue} !important;
  opacity: 1 !important;
}
::-moz-placeholder {
  color: ${colorValue} !important;
  opacity: 1 !important;
}
:-ms-input-placeholder {
  color: ${colorValue} !important;
  opacity: 1 !important;
}
`,
tag: (background = color.backgroundMedium, colorValue = color.textDarkest) => css`
display: inline-flex;
align-items: center;
height: 24px;
padding: 0 8px;
border-radius: 4px;
cursor: pointer;
user-select: none;
color: ${colorValue};
background: ${background};
${font.bold}
${font.size(12)}
i {
  margin-left: 4px;
}
`,
scrollableY: css`
overflow-x: hidden;
overflow-y: auto;
-webkit-overflow-scrolling: touch;
`,
customScrollbar: ({ width = 8, background = color.backgroundMedium } = {}) => css`
&::-webkit-scrollbar {
  width: ${width}px;
}
&::-webkit-scrollbar-track {
  background: none;
}
&::-webkit-scrollbar-thumb {
  border-radius: 99px;
  background: ${background};
}
`,
backgroundImage: imageURL => css`
background-image: url("${imageURL}");
background-position: 50% 50%;
background-repeat: no-repeat;
background-size: cover;
background-color: ${color.backgroundLight};
`,
}


