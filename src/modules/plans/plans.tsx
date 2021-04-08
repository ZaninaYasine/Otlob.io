//libraries imports
import React, { FC } from "react";

//local imports
import { continueOrder } from "../../api";
import { Wrapper } from "./styles";
import { Helper, PaymentOption, Button, Select } from "../../commons";
import { Header } from "../../components";
import { logo } from "../../images";
import {
  Cash,
  CreditCard,
  Check,
  CheckPlan,
  Basic,
  Standard,
  Premium,
  Upload,
  Menu,
} from "../../images/icons";
// import { ReactComponent as CheckoutBag } from "../../images/checkout-bag.svg";

//types
type stateType = { restaurant: string; branchname: string };

type PlanProps = "Standard" | "Basic" | "Premium";

const Plans: FC = () => {
  //states
  const [step, setStep] = React.useState<number>(1);
  const [phone, setPhone] = React.useState<string>("");
  const [plan, setPlan] = React.useState<PlanProps | undefined>(undefined);

  //onCall function

  //axios

  //functions
  const handleNavigationForward = () => {
    if (step === 1) {
      continueOrder();
      setStep(step + 1);
    } else if (step === 2) {
      setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  const handleNavigationBackward = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Wrapper>
      {step <= 3 && (
        <Header>
          <div className="cart-header">
            <Menu width="24" height="24" />
            <h3>Otlob.io</h3>
            <img src={logo} alt="logo" />
          </div>
        </Header>
      )}
      {step === 1 && (
        <>
          <div
            className={`plan-card ${plan === "Basic" ? "--selected-plan" : ""}`}
            onClick={() => {
              setPlan("Basic");
            }}
          >
            <div className="plan-card-header">
              <Basic width="40" />
              <h4>الباقة الأساسية</h4>
              <h1>
                <span>19</span>
                <span>رس/شهر</span>
              </h1>
            </div>
            <hr />
            <p className="plan-option">
              <CheckPlan />
              <span>احدى امتيازات الباقة</span>
            </p>
            <p className="plan-option unavailable">
              <CheckPlan />
              <span>احدى امتيازات الباقة</span>
            </p>
            <hr />
            <button className="select-plan" onClick={handleNavigationForward}>
              إختر
            </button>
          </div>
          <div
            className={`plan-card ${
              plan === "Standard" ? "--selected-plan" : ""
            }`}
            onClick={() => {
              setPlan("Standard");
            }}
          >
            <div className="plan-card-header">
              <Standard width="40" />
              <h4>الباقة الفضية</h4>
              <h1>
                <span>19</span>
                <span>رس/شهر</span>
              </h1>
            </div>
            <hr />
            <p className="plan-option">
              <CheckPlan />
              <span>احدى امتيازات الباقة</span>
            </p>
            <p className="plan-option unavailable">
              <CheckPlan />
              <span>احدى امتيازات الباقة</span>
            </p>
            <hr />
            <button className="select-plan" onClick={handleNavigationForward}>
              إختر
            </button>
          </div>
          <div
            className={`plan-card ${
              plan === "Premium" ? "--selected-plan" : ""
            }`}
            onClick={() => {
              setPlan("Premium");
            }}
          >
            <div className="plan-card-header">
              <Premium width="40" />
              <h4>الباقة الذهبية</h4>
              <h1>
                <span>19</span>
                <span>رس/شهر</span>
              </h1>
            </div>
            <hr />
            <p className="plan-option">
              <CheckPlan />
              <span>احدى امتيازات الباقة</span>
            </p>
            <p className="plan-option unavailable">
              <CheckPlan />
              <span>احدى امتيازات الباقة</span>
            </p>
            <hr />
            <button className="select-plan" onClick={handleNavigationForward}>
              إختر
            </button>
          </div>
        </>
      )}
      {step === 2 && (
        <div>
          <div className="logo-upload">
            <img
              className="store-logo"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
              alt="logo"
            />
            <div className="badge">
              <Upload />
              <input type="file" className="logo" />
            </div>
          </div>
          <div className="information-form">
            <div className="phone-input store-name">
              <label>إسم المتجر</label>
              <div className="input-container">
                <div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="إسم المتجر"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
              </div>
            </div>
            <div className="phone-input username">
              <label>إسم المستخدم</label>
              <div className="input-container">
                <div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="إسم المستخدم"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
              </div>
            </div>
            <div className="phone-input country">
              <label>البلد</label>
              <div className="input-container">
                <div>
                  <Select
                    fullWidth
                    name="البلد"
                    options={[
                      { label: "السعودية", value: "السعودية" },
                      { label: "تونس", value: "تونس" },
                      { label: "الامارات", value: "الامارات" },
                      { label: "البحرين", value: "البحرين" },
                      { label: "الاردن", value: "الاردن" },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="phone-input email">
              <label>البريد الإلكتروني</label>
              <div className="input-container">
                <div>
                  <input
                    type="email"
                    name="phone"
                    placeholder="البريد الإلكتروني"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
              </div>
            </div>
            <div className="phone-input phone">
              <label>أدخل رقم الهاتف</label>
              <div className="input-container">
                <div>
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
            <div className="phone-input password">
              <label>كلمة السر</label>
              <div className="input-container">
                <div>
                  <input
                    type="password"
                    name="phone"
                    placeholder="كلمة السر"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
              </div>
            </div>
            <div className="phone-input confirm-password">
              <label>أعد إدخال كلمة السر</label>
              <div className="input-container">
                <div>
                  <input
                    type="password"
                    name="phone"
                    placeholder="كلمة السر"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
              </div>
            </div>
          </div>
          <Button label="التالي" onClick={() => handleNavigationForward()} />
        </div>
      )}
      {step === 3 && (
        <div>
          <Helper
            title="طريقة الدفع"
            message="اختر طريقة الدفع الأكثر ملاءمة لك من القائمة أدناه"
            className="receipt"
          >
            <div className="receipt">
              <img
                className="store-logo"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
                alt="logo"
              />
              <h4>قسيمة الدفع</h4>
              <p>04/04/2021 #R-021380544</p>
              <div className="plan-card">
                <div className="plan-card-header">
                  <Premium width="40" />
                  <h4>الباقة الذهبية</h4>
                  <h1>
                    <span>19</span>
                    <span>رس/شهر</span>
                  </h1>
                </div>
              </div>
              <span>
                اطلع على <u>شروط الخدمة</u> من {" Otlob"}
              </span>
            </div>
          </Helper>
          <PaymentOption
            id={"1"}
            name="نقد عند الإستلام"
            icon={<Cash width="24" height="24" />}
            selected={true}
            onSelect={() => console.log("selected 1")}
          />
          <PaymentOption
            id={"2"}
            name="باي بال"
            icon={<CreditCard width="24" height="24" />}
            selected={false}
            disabled={true}
            onSelect={() => console.log("selected 2")}
          />
          <Button label="تأكيد" onClick={() => handleNavigationForward()} />
        </div>
      )}
      {step === 4 && (
        <div className="plan-created">
          <Helper
            title="تمت العملية بنجاح"
            message="أصبحت  الأن من مستخدمينا"
            className="plan-success"
          >
            <Check height="30" width="30" />
          </Helper>
          <Button label="إغلاق" onClick={() => handleNavigationBackward()} />
        </div>
      )}
    </Wrapper>
  );
};

export default Plans;
