//libraries import
import React, { FC } from "react";
import styled from "styled-components";

//local imports
import { Checkbox, CheckboxChecked } from "./../images/icons";

//types
type CheckBoxType = {
  name: string;
  label?: string;
  value: string;
  id?: string;
};

const CheckBox: FC<CheckBoxType> = ({ id, name, label, value }) => {
  return (
    <Wrapper>
      <input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        onChange={() => {
          console.log(value);
        }}
      />
      <div className="checkbox">
        <CheckboxChecked className="checked" />
        <Checkbox className="unchecked" />
      </div>
      <label>{label}</label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: inherit;
  height: 40px;
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-column-gap: 5px;
  margin: 5px 15px;
  position: relative;
  input[type="checkbox"] {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  label {
    margin: auto 0;
    color: ${(props) => props.theme.palette.textSecondary};
  }
  div.checkbox {
    width: 50%;
    height: 50%;
    margin: auto;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s cubic-bezier(0.39, 0.07, 0.23, 1);
    transform: scale(0.9);
  }
  :hover div.checkbox {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.palette.primary}14;
    transform: scale(0.9);
  }
  svg.checked,
  svg.unchecked {
    transform: scale(0.9);
  }
  .checkbox svg.checked {
    display: none;
  }
  .checkbox svg.unchecked {
    display: block;
    transform: scale(0.9);
  }
  input[type="checkbox"]:checked ~ .checkbox svg.checked {
    display: block;
    transform: scale(0.9);
  }
  input[type="checkbox"]:checked ~ .checkbox svg.unchecked {
    display: none;
  }
`;

export default CheckBox;
