//libraries imports
import React, { FC } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

//local imports
import { BackArrow } from "../images/icons";

const BackBtn: FC = () => {
  let history = useHistory();

  return (
    <Button onClick={() => history.goBack()}>
      <BackArrow
        width="24"
        height="24"
        color="#45434D"
        strokeWidth="1px"
        stroke="#45434D"
      />
    </Button>
  );
};

const Button = styled.button`
  width: 45px;
  height: 45px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 9px 0px rgba(190, 191, 197, 0.3);
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 99;
`;

export default BackBtn;
