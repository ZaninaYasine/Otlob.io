//libraries imports
import React, { FC } from "react";

//local imports
import { Wrapper } from "./styles";
import { BackBtn } from "../../commons";
import { NavBar } from "../../components";

const Search: FC = () => {
  return (
    <Wrapper>
      <BackBtn />
      <input type="text" placeholder="Search" />
      <NavBar />
    </Wrapper>
  );
};

export default Search;
