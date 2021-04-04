//libraries import
import React, { FC } from "react";

//local imports
import { Wrapper } from "./styles";
import { ProductPayload } from "../../api/types";

type ProductType = {
  data: ProductPayload;
  onSelect: () => void;
};

const Product: FC<ProductType> = ({ data, onSelect }) => {
  //query categories

  //local variables

  //functions

  return (
    <Wrapper onClick={() => onSelect()}>
      <img src={data.pic} alt="product" />
      <label>{data.name}</label>
      <span>{data.price}&nbsp;ر.س</span>
    </Wrapper>
  );
};

export default Product;
