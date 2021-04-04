//libraries imports
import React, { FC } from "react";
import styled from "styled-components";

//local imports
import { Star } from "../images/icons";

//types
type RatingType = {
  stars: 1 | 2 | 3 | 4 | 5;
  size?: string;
};

const Rating: FC<RatingType> = ({ stars, size }) => {
  let fullStars = stars;
  let emptyStars = 5 - stars;
  let starHeight = size || "12";
  let starWidth = (size && (parseInt(size) + 4).toString()) || "16";

  //function
  const getFullStars = () => {
    let stars = [];
    for (let i = 1; i <= fullStars; i++) {
      stars.push(
        <Star key={i} fill="#FF5F50" width={starWidth} height={starHeight} />
      );
    }
    return stars;
  };

  const getEmptyStars = () => {
    let stars = [];
    for (let i = 1; i <= emptyStars; i++) {
      stars.push(
        <Star
          key={i + fullStars}
          fill="#e1e0e0"
          width={starWidth}
          height={starHeight}
        />
      );
    }
    return stars;
  };

  return (
    <Wrapper>
      {getFullStars()}
      {getEmptyStars()}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Rating;
