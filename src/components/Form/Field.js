import React from 'react'
import { FieldError, FieldLabel, FieldTip, StyledField } from './Styles'
import Input from 'components/Input'
import Select from 'components/Select'
import TextEditor from 'components/TextEditor'
import InputDebounce from 'components/InputDebounce'







export default function Field({ className, label, tip, error, name,width, type = 'input',debounce=false, ...otherProps }) {


  const fieldComponents = {
    'textEditor': TextEditor,
    'select': Select,
    'input': debounce?InputDebounce: Input,
    // Add more types here
  };
  const renderFieldComponent = () => {
    const Field = fieldComponents[type] || Input;
    return <Field invalid={!!error} name={name}   {...otherProps} />;
  };

  return (

    <StyledField
        className={className}
        hasLabel={!!label}
        width={width}
        data-testid={name ? `form-field:${name}` : 'form-field'}
      >
        {label && <FieldLabel >{label}</FieldLabel>}
        {renderFieldComponent()}
        {tip && <FieldTip>{tip}</FieldTip>}
        {error && <FieldError>{error}</FieldError>}
    </StyledField>
  )

}