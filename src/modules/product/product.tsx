//libraries imports
import React, { FC, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

//local imports
import { addProduct, getMealInfo, getRestaurant } from "../../api";
import { Wrapper, Counter, Snack } from "./styles";
import { BackBtn, Button, Radio, Checkbox, Loader } from "../../commons";
import { Add, Minus } from "../../images/icons";
import { getCookie } from "../../utils/utils";

const Product: FC = () => {
  let { restaurant, branchname, id } = useParams();
  let location: any = useLocation();
  let available = location.state.available;
  //states
  const [quantity, setQuantity] = React.useState<number>(1);
  const [product, setProduct] = React.useState<any>();
  const [requiredAdditions, setRequiredAdditions] = React.useState<any[]>([]);
  const [optionalAdditions, setOptionalAdditions] = React.useState<any[]>([]);
  const [isAvailable, setIsAvalable] = React.useState<any>();


  //data with axios
  useEffect(() => {
    getRestaurant(restaurant).then(result => {
      const { available } = result.data.data;
      setIsAvalable(available);
    })

    getMealInfo(restaurant, branchname, id).then((result) => {
      setProduct(result);
    });
  }, [restaurant, branchname, id]);

  //function
  const showSnack = (kind: string) => {
    setTimeout(() => {
      let snack = document.getElementById(kind);
      snack?.classList.add("animate");
    });
    setTimeout(() => {
      let snack = document.getElementById(kind);
      snack?.classList.remove("animate");
    }, 3500);
  };

  const addToCart = () => {

    let response = addProduct(restaurant, branchname, {
      cookie_id: getCookie("token"),
      food_id: id,
      is_food: true,
      quantity,
      type: "add",
    });
    response.then((result) => {
      if (result?.data?.message === "تم الحفظ بنجاح") {
        showSnack("snack_add");
        setQuantity(1);
      }
    });
  };

  const handleAddQuantity = () => {

    setQuantity(quantity + 1);
  };

  const handleReduceQuantity = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  //local variables
  useEffect(() => {
    if (product && product.additions) {
      setRequiredAdditions(
        product.additions.filter((adition: any) => adition.is_required === 1)
      );
      setOptionalAdditions(
        product.additions.filter((adition: any) => adition.is_required === 0)
      );
    }
  }, [product]);

  return (
    <Wrapper>
      <Loader show={false} />
      <BackBtn />
      <div className="product-header">
        <img
          className="product-image"
          src={product && product.pic}
          alt="product"
        />
        {available === 1 && (
          <button className="add" onClick={handleAddQuantity}>
            <Add width="24" height="24" />
          </button>
        )}
        {available === 1 && (
          <button className="reduce" onClick={handleReduceQuantity}>
            <Minus width="20" height="20" />
          </button>
        )}
      </div>
      <div className="product-main-info">
        <h2>{product && product.name}</h2>
        <div className="price">
          <h2>{product && product.price}&nbsp;ر.س</h2>
        </div>
        <p className="product-description">{product && product.description}</p>
      </div>
      {product && product.qty > 0 && (
        <div className="product-aditional-info">
          {requiredAdditions.length > 0 && (
            <div className="box product-size">
              <span>إضافة إلزامية</span>
              <hr className="separator" />
              <div>
                {requiredAdditions &&
                  requiredAdditions.map((adition, index) => {
                    return (
                      <Radio
                        key={index}
                        name="requiredAddition"
                        value={adition.id}
                        label={adition.name}
                        checked={index === 0 && true}
                      />
                    );
                  })}
              </div>
            </div>
          )}

          {optionalAdditions.length > 0 && (
            <div className="box product-size">
              <span>إضافة اختيارية</span>
              <hr className="separator" />
              <div>
                {requiredAdditions &&
                  requiredAdditions.map((adition, index) => {
                    return (
                      <Checkbox
                        key={index}
                        value={adition.id}
                        label={adition.name}
                        name="optionalAddition"
                      />
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      )}
      {product && available === 1 && (
        <Button
          icon={
            <Counter>
              <span>{quantity}</span>
            </Counter>
          }
          label="أضف للطلب"
          onClick={addToCart}
        />
      )}
      <Snack id="snack_add">
        <div className="snack-content">
          <span>تمت الاضافة للطلب</span>
        </div>
      </Snack>
    </Wrapper>
  );
};

export default Product;
