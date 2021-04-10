//libraries imports
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

//local imports
import ClickAwayListener from "./ClickAwayListener";

//types
type optionsList = {
  label: string;
  value: any;
  icon?: any;
};

type SelectProps = {
  id?: string;
  label?: string;
  name?: string;
  value?: any;
  options: optionsList[];
  defaultValue?: any;
  disabled?: boolean;
  success?: boolean;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  required?: boolean;
  adormentLeft?: any;
  adormentRight?: any;
  fullWidth?: boolean;
  action?: boolean;
  tipColor?: string;
  style?: React.CSSProperties | undefined;
  className?: string;
  withCancel?: boolean;
  onChange?: (value: any) => void;
};

const Select: FC<SelectProps> = ({
  id,
  label,
  name,
  value,
  options,
  defaultValue,
  required,
  disabled,
  success,
  error,
  errorMessage,
  helperText,
  adormentLeft,
  adormentRight,
  fullWidth,
  action,
  tipColor,
  style,
  className,
  withCancel,
  onChange,
}) => {
  // let initialState = value || "";
  useEffect(() => {
    setSelectInputValue(value || undefined);
  }, [value]);

  //states
  const [selectInputValue, setSelectInputValue] = useState<any>(undefined);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <SelectContainer
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      adormentLeft={adormentLeft ? true : false}
      adormentRight={true}
      style={style}
      className={className}
      withCancel={withCancel ? true : false}
    >
      {label && (
        <label htmlFor={id || ""} className="input-label">
          {label}
        </label>
      )}
      <div
        className={`input-container input-container__default ${
          error ? "input-container__error" : ""
        } ${success ? "input-container__success" : ""}`}
        // onClick={() => setOpen(!open)}
      >
        {adormentLeft && (
          <div
            className="adorment adorment__left"
            onClick={() => setOpen(!open)}
          >
            {adormentLeft}
          </div>
        )}
        <div className="select__input" onClick={() => setOpen(!open)}>
          <input
            id={id}
            type="text"
            name={name}
            value={selectInputValue || name}
            defaultValue={defaultValue}
            disabled
          />
        </div>
        <Options open={open} role="combobox">
          <ClickAwayListener onClose={() => setOpen(false)}>
            {options.map((option, index) => {
              return (
                <li
                  key={index}
                  value={option.value}
                  onClick={() => {
                    setOpen(false);
                    !action && setSelectInputValue(option.label);
                    onChange && onChange(option.value);
                  }}
                  role="option"
                  aria-selected="true"
                >
                  {option.icon && option.icon}
                  {option.label}
                </li>
              );
            })}
          </ClickAwayListener>
        </Options>
        <div className="adorment adorment__right">
          {adormentRight ? (
            adormentRight
          ) : (
            <svg className="--select-arrow" viewBox="0 0 24 24" width="18">
              <path
                d="M11,18.6l-6-8C4.4,9.8,5,8.6,6,8.6H18c1.1,0,1.7,1.2,1,2.1l-6,8C12.5,19.3,11.5,19.3,11,18.6z"
                fill={tipColor ? tipColor : "#9e9e9e"}
              />
            </svg>
          )}
        </div>
      </div>
      {helperText && <p className="helper-text">{helperText}</p>}
      {error && errorMessage && <p className="error-message">{errorMessage}</p>}
    </SelectContainer>
  );
};

//  types
type SelectContainerProps = {
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  adormentLeft?: boolean;
  adormentRight?: boolean;
  withCancel?: boolean;
};

type OptionsType = { open: boolean };

const Options = styled.ul<OptionsType>`
  min-width: 200px;
  display: ${(props) => (props.open === true ? "block" : "none")};
  position: absolute;
  background: rgb(255 255 255 / 80%);
  border-radius: 8px;
  top: 60px;
  left: 0;
  width: 100%;
  z-index: 999;
  max-height: 250px;
  overflow-y: auto;
  backdrop-filter: blur(15px);
  box-shadow: 0 6px 20px 0 rgb(0 0 0 / 20%);
  li {
    position: relative;
    display: flex;
    align-items: center;
    padding: 18px 17px 18px 19px;
    font-size: 13px;
    cursor: pointer;
    color: ${(props) => props.theme.palette.textSecondary};
    transition-duration: 0.2s !important;
    svg {
      margin-right: 15px;
    }
    :hover {
      background-color: rgb(0 0 0 / 15%);
    }
    ::after {
      content: "";
      width: 100%;
      height: 0.5px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #a5a2a24d;
    }
    :last-child::after {
      display: none;
    }
  }
`;

const SelectContainer = styled.div<SelectContainerProps>`
  max-width: ${(props) =>
    props.fullWidth && props.fullWidth === true ? "100%" : "240px"};
  position: relative;
  ${(props) =>
    props.disabled &&
    props.disabled === true &&
    `filter: grayscale(1);
    opacity: 0.5;`}
  > * {
    cursor: pointer;
  }
  .input-container {
    position: relative;
    display: grid;
    ${(props) => props.adormentLeft && "grid-template-columns:auto 1fr;"}
    ${(props) => props.adormentRight && "grid-template-columns:1fr;"}
    ${(props) =>
      props.adormentRight &&
      props.adormentLeft &&
      "grid-template-columns: auto 1fr 60px;"}
    background: ${(props) =>
      props.disabled && props.disabled === true
        ? "background-color: -internal-light-dark(rgba(239, 239, 239, 0.3), rgba(59, 59, 59, 0.3));"
        : "transparent"};
    box-sizing: border-box;
    border-radius: 8px;
    /* padding: 13px 0px 16px 10px; */
    font-size: 14px;
    .select__input {
      display: flex;
      align-items: center;
      cursor: pointer;
      > * {
        cursor: pointer;
      }
    }
    input {
      width: ${(props) => (props.fullWidth ? "100%" : "150px")};
      font-style: normal;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.03em;
      text-transform: capitalize;
      color: #45434d;
      -webkit-text-fill-color: #45434d;
      opacity: 1; /* required on iOS */
    }
    input:disabled {
      color: #45434d;
      background-color: transparent;
      border-color: transparent;
    }
  }
  .adorment {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    > img,
    svg,
    p,
    label {
      max-width: 50px;
    }
  }
  .adorment__left {
    padding: 0px 20px 0px 10px;
  }
  .adorment__right {
    display: flex;
    justify-content: flex-end;
    padding: 3px 0px 0px 0px;
    position: absolute;
    left: 10px;
    top: 5px;
    svg.--empty {
      margin-right: 7px;
    }
    svg.--select-arrow {
      margin-right: 10px;
    }
  }
  .input-container__default {
    border: transparent;
  }
  .input-container__success {
    border: 1px solid rgb(55 202 1 / 60%);
  }
  .input-container__error {
    border: 1px solid rgb(255 110 110 / 60%);
  }
  .input-label {
    margin-bottom: 10px;
    display: inline-block;
  }
  .helper-text {
    margin: 5px 0 0 10px;
    font-size: 12px;
    color: #9e9e9e;
  }
  .error-message {
    margin: 5px 0 0 10px;
    font-size: 12px;
    font-style: oblique;
    color: #ff6e6e;
  }
`;

export default Select;
