//libraries imports
import React, { FC } from "react";
import styled from "styled-components";

//local imports
import { Check } from "../images/icons";

//types
type PaymentOptionType = {
  disabled?: boolean;
  id: string;
  name: string;
  icon: any;
  selected: boolean;
  onSelect: () => void;
};

type WrapperType = {
  disabled?: boolean;
  selected: boolean;
};

const PaymentOption: FC<PaymentOptionType> = ({
  disabled,
  selected,
  id,
  name,
  icon,
  onSelect,
}) => {
  return (
    <Wrapper disabled={disabled} onClick={onSelect} selected={selected}>
      {icon}
      <label className="payment-name">{name}</label>
      {selected && <Check style={{ margin: "auto" }} />}
    </Wrapper>
  );
};

const Wrapper = styled.div<WrapperType>`
  background-color: #fafbfd;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 45px 1fr 20px;
  padding: 15px 20px;
  margin-bottom: 15px;
  opacity: ${(props) => (props.disabled === true ? 0.6 : 1)};
  ${(props) => props.disabled === true && "filter: grayscale(1)"};
  svg:first-child {
    margin: auto 0;
  }
  label.payment-name {
    padding-bottom: 5px;
  }
`;

export default PaymentOption;
