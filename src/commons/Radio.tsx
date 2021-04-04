//libraries import
import React, { FC } from "react";
import styled from "styled-components";

//local imports
import { RadioBox, RadioBoxChecked } from "./../images/icons";

//types
type RadioType = {
  name: string;
  label?: string;
  value: string;
  id?: string;
  checked: boolean | undefined;
};

const Radio: FC<RadioType> = ({ id, name, label, value, checked }) => {
  //functions

  return (
    <Wrapper>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        onChange={() => {
          console.log(value);
        }}
        checked={checked}
      />
      <div className="radio">
        <RadioBoxChecked className="checked" />
        <RadioBox className="unchecked" />
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
  input[type="radio"] {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  label {
    margin: auto 0;
    color: ${(props) => props.theme.palette.textSecondary};
  }
  div.radio {
    width: 50%;
    height: 50%;
    margin: auto;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s cubic-bezier(0.39, 0.07, 0.23, 1);
  }
  :hover div.radio {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.palette.primary}14;
  }

  .radio svg.padding,
  svg.unchecked {
    transform: scale(0.85);
  }
  .radio svg.checked {
    display: none;
    transform: scale(0.85);
  }
  .radio svg.unchecked {
    display: block;
    transform: scale(0.85);
  }
  input[type="radio"]:checked ~ .radio svg.checked {
    display: block;
    transform: scale(0.85);
  }
  input[type="radio"]:checked ~ .radio svg.unchecked {
    display: none;
  }
`;

export default Radio;
