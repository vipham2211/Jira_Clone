import Icon from 'components/Icon';
import React from 'react'
import { NavLeft, LogoLink, StyledLogo, Item, ItemText, Bottom } from './Styles';
import { useDispatch } from 'react-redux';
import { taskCreateModalAction, taskSearchModalAction } from 'redux/action/modalAction';

export default function ProjectNavbarLeft() {

    const dispatch = useDispatch()

  return (
    <NavLeft >
      <LogoLink to='/' >
        <StyledLogo />
      </LogoLink>

      <Item onClick={()=>{  dispatch(taskSearchModalAction(true))  }} >
        <Icon type="search" size={22} top={1} left={3} />
        <ItemText>Search issues</ItemText>
      </Item>

      <Item onClick={()=>{
       dispatch(taskCreateModalAction(true))
      }} >
        <Icon type="plus" size={27} />
        <ItemText>Create Issue</ItemText>
      </Item>

      <Bottom>
        <Item>
          <Icon type="help" size={25} />
          <ItemText>About</ItemText>
        </Item>
      </Bottom>
    </NavLeft>

  )
}




