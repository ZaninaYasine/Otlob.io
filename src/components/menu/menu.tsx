//libraries imports
import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";

//local imports
import { Wrapper } from "./styles";
import { ArrowDown } from "../../images/icons";
import { Product } from "../../components";

//types
type MenuType = {
  menu: any;
  restaurant: string;
  branch: string;
  available: any;
};

const Menu: FC<MenuType> = ({ menu, restaurant, branch, available }) => {
  let history = useHistory();
  //states
  const [open, setOpen] = useState<boolean>(true);

  //functions
  const handleProduct = (productID: number) => {
    history.push({
      pathname: `/${restaurant}/${branch}/${productID}`,
      state: { available: available },
    });
  };

  const getHeight = () => {
    return Math.round(menu.available_foods.length / 2) * 266;
  };

  return (
    <Wrapper height={getHeight()} open={open}>
      <div className="category-header" onClick={() => setOpen(!open)}>
        <label className="category-title">{menu.name}</label>
        <button className="more-btn">
          <ArrowDown width="15" height="14" style={{ marginTop: "2px" }} />
        </button>
      </div>
      <div className="products-list-container">
        {menu.available_foods.map((product: any, index: number) => {
          return (
            <Product
              key={index}
              data={product}
              onSelect={() => handleProduct(product.id)}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Menu;
