import React, { forwardRef } from 'react';
import { InputElement, StyledIcon, StyledInput } from './Styles';


const Input = forwardRef(({ className, filter, onChange,icon, ...props }, ref) => {
 
  const handleChange = event => {
    
    if (!filter || filter.test(event.target.value)) {
     
      props.setValueState && props.setValueState(event.target.value)
      if(props.isNumberValue){
        onChange(Number(event.target.value)); 
      }else{
        onChange(event.target.value); 
      }
    }
  };

  return (
    <StyledInput className={className}>
         {icon && <StyledIcon type={icon} size={15} />}
      <InputElement  ref={ref} onChange={handleChange} hasIcon={!!icon} type={props.password ?'password':'input'} {...props} />
    </StyledInput>
  );
});

export default Input;