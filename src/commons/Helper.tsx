// libraries imports
import React, { FC } from "react";
import styled from "styled-components";
//{}

//local imports

type HelperType = {
  title: string;
  message: string;
  className?: string;
};

const Helper: FC<HelperType> = ({ children, title, message, className }) => {
  return (
    <Wrapper className={className}>
      <div className="icon">{children}</div>
      <h3>{title}</h3>
      <p>{message}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 35px;
  display: flex;
  align-items: center;
  flex-direction: column;
  div.icon {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
  }
  h3 {
    color: ${(props) => props.theme.palette.textPrimary};
  }
  p {
    margin: 10px 30px 30px 30px;
    text-align: center;
    font-size: 13px;
    color: ${(props) => props.theme.palette.textSecondary};
  }
`;

export default Helper;
