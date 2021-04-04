//libraries imports
import React, { FC, createRef } from "react";
import Hammer from "react-hammerjs";

//local imports
import { Wrapper, Card } from "./styles";
import { CartProductsPayload } from "../../api/types";

type ProductCardType = {
  data: CartProductsPayload;
  onRemove: () => void;
};

const ProductCard: FC<ProductCardType> = ({ data, onRemove }) => {
  const card = createRef<HTMLDivElement>();

  return (
    <Wrapper>
      <div ref={card} className="container">
        <Hammer
          onSwipe={() => {
            onRemove();
            card.current?.classList.add("remove");
          }}
        >
          <Card>
            <img src={data.product.pic} alt="category" />
            <h4 className="quantity">{data.quantity}</h4>
            <h3 className="title">{data.product.name}</h3>
            <h3 className="price">{data.product.total}&nbsp;ر.س</h3>
          </Card>
        </Hammer>
      </div>
    </Wrapper>
  );
};

export default ProductCard;
