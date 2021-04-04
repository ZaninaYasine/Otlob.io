//libraries imports
import React, { FC } from "react";
import styled from "styled-components";

type InputType = {
  value: string;
  label: string;
  placeholder: string;
  rows: number;
  onChange: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Input: FC<InputType> = ({
  label,
  onChange,
  placeholder,
  rows,
  value,
}) => {
  return (
    <Wrapper>
      <label>{label}</label>
      <textarea
        rows={rows}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={value}
      ></textarea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: calc(100% - 30px);
  background-color: ${(props) => props.theme.backgroundAccent};
  border-radius: 10px;
  padding: 30px 15px 12px 15px;
  display: flex;
  flex-direction: column;
  position: relative;
  label {
    color: ${(props) => props.theme.palette.textAccent};
    font-size: 11px;
    margin-bottom: 8px;
    position: absolute;
    top: 12px;
    left: 15px;
  }
  textarea {
    width: 100%;
    height: 100%;
    font-size: 16px;
    padding-top: 5px;
    background-color: transparent;
    color: ${(props) => props.theme.palette.textPrimary};
    caret-color: ${(props) => props.theme.palette.textPrimary};
    resize: none;
  }
`;

export default Input;
