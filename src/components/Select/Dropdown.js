import React from 'react'
import { debounce, uniq } from 'lodash';
import { FixedSizeList  } from 'react-window';
import { ClearIcon, Dropdown, DropdownInput, Option, Options, OptionsNoResults } from './Styles'




export default function SelectDropdown(props) {

   
  const handleClearClick = () => {
    props.isMulti ? props.onChange([]) : props.onChange(null)
    props.$inputRef.current.value = '';
    props.$inputRef.current.focus();
    props.setSearchValue('')
  };
  const handleInputChangeDebounced = debounce((event) => {
    props.setSearchValue(event.target.value);
}, 400);

  const handleOptionClick = (option) => {
    props.deactivateDropdown();
    if(props.isMulti){
    
      props.onChange(uniq([...props.value, option.value]))
     
    }
    else{
      props.onChange(option.value);
     
    }

  };
  const calcHeightFixedSizeList = ()=>{
    
     return filteredOptions.length === 0 ? 0: 170
  }
  

  const optionsFilteredBySearchValue = props.options.filter((option) => option.label.toLowerCase().includes(props.searchValue.toLowerCase()));
  const removeSelectedOptionsSingle = opts => opts.filter(option => props.value !== option.value);
  const removeSelectedOptionsMulti = opts => opts.filter(option => !props.value.includes(option.value));

  const filteredOptions = props.isMulti ?removeSelectedOptionsMulti(optionsFilteredBySearchValue) : removeSelectedOptionsSingle(optionsFilteredBySearchValue);

  const renderFilterOptions = filteredOptions.map((option) => {
    
    return (
      <Option  key={option.value} onClick={() => handleOptionClick(option)}>
        {props.renderOption({ value: option.value })}
      </Option>

    )
  })
  const dropdownOptions = () => {
    if (props.options.length > 30) {
      return (
        <FixedSizeList height={calcHeightFixedSizeList()} itemCount={filteredOptions.length} itemSize={35} width={'100%'}>
          {({ index, style }) => (
            <Option key={filteredOptions[index].value} onClick={() => handleOptionClick(filteredOptions[index])} style={style}>
              {props.renderOption({ value: filteredOptions[index].value })}
            </Option>
          )}
        </FixedSizeList>
      );
    }
    return <Options>{renderFilterOptions}</Options>;
  };

  return (
    <Dropdown width={props.dropdownWidth}>
      <DropdownInput autoFocus ref={props.$inputRef}  placeholder='Search'  onChange={handleInputChangeDebounced} />
    {!props.isValueEmpty && props.withClearValue  && <ClearIcon type={'close'} onClick={handleClearClick} ></ClearIcon>}
    
    {dropdownOptions()}
 
    {filteredOptions.length === 0 && <OptionsNoResults>No results</OptionsNoResults>}
  </Dropdown>
  )
}
