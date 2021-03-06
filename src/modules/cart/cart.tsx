//libraries imports
import React, { FC, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

//local imports
import {
  checkPhone,
  checkCode,
  checkCoupon,
  getOrder,
  removeProduct,
  continueOrder,
} from "../../api";
import { Wrapper, Card, Icon, Progress, Hint } from "./styles";
import { Helper, PaymentOption, Button } from "../../commons";
import { Header, ProductCard } from "../../components";
import {
  Wallet,
  Coupon,
  Cash,
  CreditCard,
  Check,
  BackArrow,
  Error,
} from "../../images/icons";
import {
  Smartphone,
  PaymentMethod,
  Timer,
  OrderComplete,
  SaudiArabia,
  EmptyCart,
} from "../../images";
import { getCookie } from "../../utils/utils";
// import { ReactComponent as CheckoutBag } from "../../images/checkout-bag.svg";

//types
type stateType = { restaurant: string; branchname: string };

const Cart: FC = () => {
  let history = useHistory();
  const location = useLocation();
  let data: any = location.state;

  //states
  const [step, setStep] = React.useState<number>(1);
  const [phoneStep, setPhoneStep] = React.useState<number>(1);
  const [code, setCode] = React.useState<string>("");
  const [coupon, setCoupon] = React.useState<string>("");
  const [couponStatus, setCouponStatus] = React.useState<boolean | undefined>();
  const [phone, setPhone] = React.useState<string>("");
  const [canSend, setCanSend] = React.useState<boolean>(false);
  const [orders, setOrders] = React.useState<any>([]);
  const [totalBill, setTotalBill] = React.useState<number>(0);
  const [vat, setVat] = React.useState<number>(0);
  const [actualAmount, setActualAmount] = React.useState<number>(0);

  //onCall function

  //axios
  useEffect(() => {
    getOrder(data.restaurant, data.branchname, getCookie("token")).then(
      (response) => {
        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data.order
        ) {
          setOrders(response.data.data.order.items);
          setTotalBill(response.data.data.order.total_bill);
          setVat(response.data.data.order.vat);
          setActualAmount(response.data.data.order.actual_amount);
        }
      }
    );
  }, [data.restaurant, data.branchname]);

  //functions
  const handleNavigationForward = () => {
    if (step === 1) {
      continueOrder();
      setStep(step + 1);
    } else if (step === 2) {
      handlePhone();
      setPhoneStep(2);
    } else {
      setStep(step + 1);
    }
  };

  const handleNavigationBackward = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNavigationHome = () => {
    history.push("/");
  };

  const handleRemoveProduct = (id: any) => {
    let response = removeProduct(data.restaurant, data.branchname, {
      cookie_id: getCookie("token"),
      food_id: id,
      is_food: true,
      type: "remove",
      quantity: 0,
    });
    response.then((result) => {
      // if (result?.data?.message === "???? ?????????? ??????????") {
      //   showSnack("snack_remove");
      // }
    });
  };

  const handleCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
    if (code.length === 3) {
      document?.getElementById("verification-code")?.blur();
      checkCode(data.restaurant, data.branchname, e.target.value).then(
        (response) => {
          console.log(response);
        }
      );
    }
  };

  const handlePhone = () => {
    checkPhone(data.restaurant, data.branchname, phone);
    setPhoneStep(2);
  };

  const handleResend = () => {
    if (canSend) {
      checkPhone(data.restaurant, data.branchname, phone);
      setCanSend(false);
      console.log("ok");
    }
  };

  useEffect(() => {
    if (coupon === "") {
      setCouponStatus(undefined);
    }
  }, [coupon]);

  const handleCounter = () => {
    let counter = document.getElementById("countdown");
    counter?.classList.add("hide-counter");
  };

  const handleTimer = (remainingTime: number | undefined) => {
    !remainingTime && console.log(remainingTime);
    if (!!remainingTime) {
      console.log("ok");
      handleCounter();
      setCanSend(true);
    }
  };

  return (
    <Wrapper>
      {step <= 3 && (
        <Header>
          <div className="cart-header">
            <button
              className={step >= 1 ? "curnent-step" : ""}
              onClick={(e) => {
                e.preventDefault();
                setStep(1);
              }}
            >
              ????????????
            </button>
            <button
              className={step >= 2 ? "curnent-step" : ""}
              onClick={(e) => {
                e.preventDefault();
                step === 1 && orders.length !== 0 && setStep(2);
              }}
            >
              ????????
            </button>
            <button
              className={step >= 3 ? "curnent-step" : ""}
              onClick={(e) => {
                e.preventDefault();
                step === 2 && orders.length !== 0 && setStep(3);
              }}
            >
              ??????????
            </button>
            <Progress step={step} />
          </div>
        </Header>
      )}
      {step === 1 && (
        <div>
          {orders.length === 0 ? (
            <Helper
              title="?????? ???????? ?????????? ??????!"
              message="???????? ???????????? ?? ?????? ???????????? ?????? ??????????"
            >
              <EmptyCart />
            </Helper>
          ) : (
            <div>
              <Hint>
                <p>???????? ?????????????? ?????? ?????? ???????????????? ???????????????? ???? ??????????????</p>
              </Hint>
              <div>
                {orders &&
                  orders.length > 0 &&
                  orders.map((order: any) => (
                    <ProductCard
                      key={order.food_id}
                      data={{
                        quantity: order.qty,
                        size: "m",
                        product: {
                          name: order.name,
                          price: order.price,
                          pic: order.pic,
                          total: order.total,
                        },
                      }}
                      onRemove={() => handleRemoveProduct(order.food_id)}
                    />
                  ))}
                <Card>
                  <Icon>
                    <Coupon width="18" />
                  </Icon>
                  <label>???????? ?????????? ??????????</label>
                  {couponStatus !== undefined &&
                    (couponStatus === true ? (
                      <Check width="20" height="20" />
                    ) : (
                      <Error width="20" height="20" />
                    ))}
                  <div className="sp3">
                    <input
                      type="text"
                      name="coupon"
                      className="coupon"
                      placeholder="??????????"
                      onChange={(e) => setCoupon(e.target.value)}
                    />
                    <button
                      className="coupon-btn"
                      onClick={() =>
                        checkCoupon(
                          data.restaurant,
                          data.branchname,
                          coupon,
                          getCookie("token")
                        )
                      }
                    >
                      ????????????
                    </button>
                  </div>
                </Card>
                <Card>
                  <Icon>
                    <Wallet />
                  </Icon>
                  <label style={{ gridColumn: "span 2" }}>????????????????</label>
                  <div className="order-details">
                    <span className="sub-info">???????? ??????????</span>
                    <span className="main-info">???{actualAmount}&nbsp;??.??</span>
                    <span className="sub-info">?????????? ???????????? ??????????????</span>
                    <span className="main-info">???{vat}&nbsp;??.??</span>
                    <span className="sub-info">?????????? ??????????</span>
                    <span className="main-info">0&nbsp;??.??</span>
                    <hr />
                    <span className="total">???????????? ????????????????</span>
                    <span className="total total-price">
                      {totalBill}&nbsp;??.??
                    </span>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      )}
      {step === 2 && (
        <div>
          <Helper
            title="???????? ?????? ????????????"
            message="?????? ?????????? ?????????? ???????? ?????????? ?????????? ?????? ?????? ?? ???????? ?????????? ?????? ???????????? ????????????????"
          >
            <Smartphone />
          </Helper>
          {phoneStep === 1 ? (
            <div className="phone-input">
              <label>???????? ?????? ????????????</label>
              <div className="input-container">
                <div>
                  <SaudiArabia width="22" height="22" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="5512345678"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="code-input">
                <input
                  type="tel"
                  name="verification-code"
                  className="verification-code"
                  id="verification-code"
                  maxLength={4}
                  value={code}
                  onChange={handleCode}
                />
                <hr />
                <hr />
                <hr />
                <hr />
              </div>
              <div className="code-actions">
                <div
                  className="action-btn-container"
                  onClick={() => handleResend()}
                >
                  <div id="countdown">
                    <CountdownCircleTimer
                      isPlaying
                      duration={30}
                      colors={[
                        ["#FF5F50", 0.3],
                        ["#FC356F", 0.7],
                      ]}
                      strokeWidth={3}
                      size={18}
                      trailColor="#eef0f5"
                      isLinearGradient
                      onComplete={handleTimer}
                    ></CountdownCircleTimer>
                  </div>
                  <label>?????? ?????????? ?????? ????????????</label>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {step === 3 && (
        <div>
          <Helper
            title="?????????? ??????????"
            message="???????? ?????????? ?????????? ???????????? ???????????? ???? ???? ?????????????? ??????????"
          >
            <PaymentMethod />
          </Helper>
          <PaymentOption
            id={"1"}
            name="?????? ?????? ????????????????"
            icon={<Cash width="24" height="24" />}
            selected={true}
            onSelect={() => console.log("selected 1")}
          />
          <PaymentOption
            id={"2"}
            name="?????? ??????"
            icon={<CreditCard width="24" height="24" />}
            selected={false}
            disabled={true}
            onSelect={() => console.log("selected 2")}
          />
        </div>
      )}
      {step === 4 && (
        <div>
          <Helper
            title="???? ???????????? ??????????????"
            message="???????? ???????? ?????????????? ???? ?????? ?????????????? ???????????? ????????????????"
          >
            <Timer />
          </Helper>
          <div className="counter-container">
            <CountdownCircleTimer
              isPlaying
              duration={60}
              colors={[
                ["#FF5F50", 0.3],
                ["#FC356F", 0.7],
              ]}
              strokeWidth={11}
              size={100}
              trailColor="#eef0f5"
              isLinearGradient
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          </div>
        </div>
      )}
      {step === 5 && (
        <div>
          <Helper
            title="???? ???????? ????????"
            message="?????? ???????? ?????????? ???????? ?? ???????? ?????????????? ???? ?????? ?????????? ????????????????"
          >
            <OrderComplete />
          </Helper>
          ok
        </div>
      )}

      {orders && orders.length > 0 && (
        <div className="navigation-wrapper">
          {step < 3 && (
            <div className="bottom-nav-container">
              <Button
                position="unset"
                label="????????"
                onClick={handleNavigationBackward}
                light
                disabled={step === 1}
              />
              <Button
                position="unset"
                label="????????????"
                onClick={handleNavigationForward}
                disabled={step === 2 && phone.length !== 9}
                icon={
                  <BackArrow
                    width="24"
                    height="24"
                    fill="white"
                    strokeWidth="3px"
                    stroke="white"
                  />
                }
              />
            </div>
          )}
          {step === 3 && (
            <Button label="??????????" onClick={handleNavigationForward} />
          )}
          {step === 4 && (
            <Button
              label="???????????? ?????????????? ????????????"
              onClick={handleNavigationHome}
            />
          )}
          {step === 5 && (
            <Button label="??????????" onClick={handleNavigationHome} />
          )}
        </div>
      )}
    </Wrapper>
  );
};

export default Cart;
