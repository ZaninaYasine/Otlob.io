//libraries imports
import React, { FC } from "react";

//local imports
import { Wrapper } from "./styles";

type CategoryCardType = {
  data: any;
  onNavigate: (value: string) => void;
};

const CategoryCard: FC<CategoryCardType> = ({ data, onNavigate }) => {
  return (
    <Wrapper onClick={() => onNavigate(data.name)}>
      <img src={data.image} alt="category" />
      <h3>{data.name}</h3>
      <p>{data.description}</p>
    </Wrapper>
  );
};

export default CategoryCard;
