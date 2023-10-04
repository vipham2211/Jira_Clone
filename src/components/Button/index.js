import React from 'react'
import { StyledButton ,Text,StyledSpinner} from './Styles'
import Icon from 'components/Icon'
import { color } from 'utils/Styles';

export default function Button(props) {

  const {variant='secondary',size='md',iconSize=18,icon,isWorking}= props

  const getIconColor = variant =>
  ['secondary', 'empty'].includes(variant) ? color.textDark : '#fff';

  return (
    <StyledButton variant={variant} type={props.type} size={size}  {...props}   >
    {props.isLoading && <StyledSpinner size={26} color={getIconColor(variant)} />}

    {!isWorking && icon && typeof icon === 'string' ? (
          <Icon type={icon} size={iconSize} color={getIconColor(variant)} />
        ) : (
          icon
        )}

    <Text withPadding={!!props.children &&props.icon}>{props.children}</Text>
 
   
    </StyledButton>
  )
}
