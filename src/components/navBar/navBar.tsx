//libraries imports
import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

//local imports
import { Wrapper } from "./styles";
import { Home, Bag, Search } from "../../images/icons";
import { GET_CART } from "../../api/query.api";
import { CartPayload } from "../../api/types";

const NavBar: FC = () => {
  let history = useHistory();

  //queries
  const { data } = useQuery<CartPayload>(GET_CART);

  //functions
  const setSelected = (link: string) => {
    let currentPage = history.location.pathname;
    if (currentPage === link) {
      return "selected";
    } else {
      return "";
    }
  };

  const handleNavigateto = (link: string) => {
    history.push(`${link}`);
  };

  return (
    <Wrapper>
      <Home
        width="22"
        height="30"
        onClick={() => handleNavigateto("/home")}
        className={setSelected("/home")}
      />
      <Search
        width="22"
        height="30"
        onClick={() => handleNavigateto("search")}
        className={setSelected("/search")}
      />
      <Bag
        width="22"
        height="30"
        onClick={() => handleNavigateto("cart")}
        className={setSelected("/cart")}
      />
      <span className="badge">{data?.cart.list.length}</span>
    </Wrapper>
  );
};

export default NavBar;
