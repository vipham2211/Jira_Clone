import styled from 'styled-components';
import { sizes } from '../../utils/Styles';

const paddingLeft =  sizes.appNavBarLeftWidth + sizes.secondarySideBarWidth + 40;


export const ProjectPage = styled.div`
    padding: 25px 32px 50px ${paddingLeft}px;
`

 