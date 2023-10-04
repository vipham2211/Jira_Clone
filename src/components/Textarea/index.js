import React, { forwardRef } from 'react'
import { StyledTextarea } from './Styles';
import TextareaAutosize from 'react-textarea-autosize';

const Textarea = forwardRef(({ className,value=undefined,defaultValue, invalid=false, onChange= () => {}, ...textareaProps }, ref) => (
   

    <StyledTextarea className={className} invalid={invalid}>
      <TextareaAutosize
        {...textareaProps}
        onChange={event => onChange(event.target.value, event)}
        inputRef={ref || undefined}
        defaultValue={defaultValue}
        key={defaultValue}
      />
    </StyledTextarea>
  ));

export default Textarea;