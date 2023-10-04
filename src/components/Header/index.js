import React from 'react'
import { BoardName, StyledHeader } from './Styles'
import Button from 'components/Button'


export default function Header (props) {
  return (
    <StyledHeader>
    <BoardName>{props.boardName}</BoardName>
    <a href="https://github.com/oldboyxx/jira_clone" target="_blank" rel="noreferrer noopener">
    <Button icon="github" >Github Repo</Button>
    </a>
   
  
  </StyledHeader>
  )
}
