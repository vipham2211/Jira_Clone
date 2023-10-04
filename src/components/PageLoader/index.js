import React from 'react'
import { StyledPageLoader } from './Styles'
import Spinner from 'components/Spinner'

export default function PageLoader() {
  return (
  <StyledPageLoader>
    <Spinner size={70}  />
  </StyledPageLoader>
  )
}
