//libraries imports
import React, { FC, createRef } from "react";
import styled from "styled-components";

//local imports

//types
type ButtonType = {
  onClick: () => void;
  label: string;
  position?: string;
  icon?: any;
  light?: boolean;
  disabled?: boolean;
};

type WrapperType = {
  position?: string;
  light?: boolean;
  disabled?: boolean;
};

const Button: FC<ButtonType> = ({
  label,
  icon,
  onClick,
  position,
  light,
  disabled,
}) => {
  const button = createRef<HTMLDivElement>();

  return (
    <Wrapper
      onClick={() => !disabled && onClick()}
      ref={button}
      position={position}
      light={light}
      disabled={disabled}
    >
      <div className="button">
        {icon}
        <label>{label}</label>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div<WrapperType>`
  position: ${(props) => (props.position ? props.position : "fixed")};
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  transition: all 0.5s cubic-bezier(0.45, -0.32, 0.13, 1.32);
  height: 110px;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 65%,
    rgba(255, 255, 255, 0.75) 85%,
    rgba(255, 255, 255, 0) 100%
  );
  div.button {
    margin-bottom: 15px;
    height: 55px;
    padding: 2px 25px 3px;
    background-color: ${(props) =>
      props.light ? "#eef0f5" : props.theme.palette.primary};
    background-color: ${(props) =>
      props.disabled === true && (props.light ? "#f6f7fa" : "#ffafa7")};
    border-radius: 30px;
    display: flex;
    flex-direction: ${(props) => (props.theme.rtl ? "row-reverse" : "row")};
    justify-content: center;
    align-items: center;
    box-shadow: ${(props) =>
      props.light ? "none" : "0px 10px 20px 0px rgba(255, 95, 80, 0.25)"};
    transition: all 0.5s cubic-bezier(0.45, -0.32, 0.13, 1.32);
    svg {
      margin-right: 10px;
    }
    label {
      font-size: 16px;
      padding-bottom: 3px;
      text-transform: uppercase;
      font-weight: bold;
      color: ${(props) => (props.light ? "#777782" : "#ffffff")};
    }
  }
`;

export default Button;
