import React, { Fragment } from 'react'
import { Container, Divider } from './Styles'

export default function Breadcrumbs(props) {

  const capitalizeFirstLetter = (str)=>{
    let words = str.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    return words.join(' ');
  }
  return (
    <Container>
    {props.items.map((item, index) => (
      <Fragment key={item}>
        {index !== 0 && <Divider> / </Divider>}
        {capitalizeFirstLetter(item)}
      </Fragment>
    ))}
  </Container>
  )
}
