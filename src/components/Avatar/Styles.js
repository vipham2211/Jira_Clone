import styled from 'styled-components';
import {  color, font } from 'utils/Styles';

export const Image = styled.div.attrs(props => ({
  style: {
    width: `${props.size}px`,
    height: `${props.size}px`,
    backgroundImage: `url("${props.avatarUrl}")`,
  },
}))`
  display: inline-block;
  border-radius: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${color.backgroundLight};
`;


export const Letter = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  text-transform: uppercase;
  color: #fff;
  background: ${props => props.color};
  ${font.medium}
  ${props => font.size(Math.round(props.size / 1.7))}
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;