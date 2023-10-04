import React, {  useEffect, useRef, useState } from "react";
import {
  AddMore,
  ChevronIcon,
  Placeholder,
  StyledSelect,
  ValueContainer,
  ValueMulti,
  ValueMultiItem,
} from "./Styles";
import Dropdown from "./Dropdown";
import useClickOutside from "components/useClickOutside";
import Icon from "components/Icon";
import { useDispatch } from "react-redux";
import { ACTION_USER_BY_PROJECT_ID } from "redux/slice/userSlice";
import { fetchUserByProjectIdAction } from "redux/action/userAction";


export default function Select(props) {
  const {
    isMulti = false,
    value,
    withClearValue = true,
    placeholder = "Select",
  } = props;

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const $selectRef = useRef();
  const $inputRef = useRef();
  const isValueEmpty = !value ||(isMulti && !value.length)
  const dispatch = useDispatch();
 
  useClickOutside($selectRef, setDropdownOpen);

  const activateDropdown = () => {
    setDropdownOpen(true);
    $selectRef.current.focus();
  };
  const deactivateDropdown = () => {
    setDropdownOpen(false);
    setSearchValue("");
  };

  const removeOptionValue = (optionValue) => {
    props.onChange(value.filter((val) => val !== optionValue));
  };

  const handleChange = (newValue) => {
    if(props.name ==='projectId'){
     
        dispatch(fetchUserByProjectIdAction(newValue))
        props.formik.setFieldValue('listUserAsign',[])
       
    }
      props.onChange(newValue);
  };

  useEffect(()=>{
    dispatch(ACTION_USER_BY_PROJECT_ID([]));
    
  },[dispatch])

  const renderValueComponent = (isMulti) => {
   
    if (isMulti) {
    
      return (
        <ValueMulti>
          {value.map((optionValue) => {
            return (
              <ValueMultiItem key={optionValue}>
                {props.renderValue({ value: optionValue })}
                <Icon
                  type="close"
                  size={14}
                  onClick={() => removeOptionValue(optionValue)}
                />
              </ValueMultiItem>
            );
          })}
          {!isValueEmpty && (
            <AddMore>
              <Icon type="plus" />
              Add more
            </AddMore>
          )}
        </ValueMulti>
      );
    } else {
      
      return props.renderValue({ value });
    }
  };
  return (
    <StyledSelect
      ref={$selectRef}
      name={props.name}
      variant={props.variant}
      tabIndex="0"
    >
      <ValueContainer variant={props.variant} onClick={activateDropdown}>
        {isValueEmpty && <Placeholder>{placeholder}</Placeholder>}
        
        {renderValueComponent(isMulti)}
        {isValueEmpty && props.variant !== "empty" && (
          <ChevronIcon type="chevron-down" top={1} />
        )}
      </ValueContainer>
      {isDropdownOpen && (
        <Dropdown
          isMulti={isMulti}
          dropdownWidth={props.dropdownWidth}
          withClearValue={withClearValue}
          value={value}
          $inputRef={$inputRef}
          isValueEmpty={isValueEmpty}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          deactivateDropdown={deactivateDropdown}
          renderOption={props.renderOption}
          options={props.options}
          onChange={handleChange}
        />
      )}
    </StyledSelect>
  );
}
