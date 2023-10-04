import React, { useEffect, useRef, useState } from 'react'
import { debounce } from 'lodash';
import Input from 'components/Input';



export default function InputDebounce({ onChange, value: propsValue, setValueState, ...props }) {


  const [value, setValue] = useState(propsValue);
  const isControlled = propsValue !== undefined;

  const valueRef = useRef(value);
  valueRef.current = value;


  const handleChange = React.useMemo(
    () =>
      debounce(newValue => {
        onChange(newValue)
        setValueState && setValueState(newValue)

      }, 400), [onChange, setValueState],
  )

  useEffect(() => {
    if (propsValue !== valueRef.current) {
      setValue(propsValue);
    }
  }, [propsValue]);

  return (
    <Input value={isControlled ? value : undefined} ref={props.$ref} onChange={newValue => {
      setValue(newValue);
      handleChange(newValue);
    }} {...props} />
  )
}
