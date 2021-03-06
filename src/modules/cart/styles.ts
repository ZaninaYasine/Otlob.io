import styled from "styled-components";

type SeperatorStyle = {
  color: string;
};

type ProgressType = {
  step: number;
};

export const Hint = styled.div`
  padding: 5px 20px 8px 20px;
  text-align: center;
  background-color: #ff56560f;
  color: #ff5656b5;
  font-size: 11px;
  border-radius: 30px;
  width: fit-content;
  margin: 0 auto 15px auto;
`;

export const Icon = styled.div`
  width: 35px;
  height: 35px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const Card = styled.div`
  padding: 15px 15px 20px 15px;
  background-color: ${(props) => props.theme.backgroundAccent};
  border-radius: 15px;
  margin: 0 0 25px 0;
  display: grid;
  grid-template-columns: 35px auto 75px;
  grid-gap: 15px;
  label {
    color: ${(props) => props.theme.palette.textPrimary};
    margin: auto 0;
    font-weight: bold;
  }
  span.main-information {
    font-size: 14px;
    color: ${(props) => props.theme.palette.textSecondary};
    display: block;
  }
  svg {
    margin: auto;
  }
  div.order-details {
    margin-top: 15px;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-row-gap: 15px;
    grid-column: span 3;
    hr {
      grid-column: span 2;
      width: 100%;
      height: 1px;
      border-top: 0.5px solid rgba(190, 191, 197, 0.3);
    }
    span.sub-info {
      color: ${(props) => props.theme.palette.textAccent};
    }
    span.main-info {
      color: ${(props) => props.theme.palette.textSecondary};
      text-align: left;
    }
    span.total {
      color: ${(props) => props.theme.palette.textPrimary};
      font-weight: bold;
    }
    span.total-price {
      text-align: left;
    }
  }
`;

export const Seperator = styled.div<SeperatorStyle>`
  width: 30px;
  height: 4px;
  border-radius: 2px;
  background-color: #ff5f50;
  margin: 0 10px;
`;

export const Progress = styled.div<ProgressType>`
  position: absolute;
  ${(props) => (props.theme.rtl ? "right: 0" : "left: 0")};
  top: 0;
  height: 100%;
  background-color: #ff5f50;
  width: ${(props) => 33.33 * props.step}%;
  border-radius: 30px;
  z-index: -1;
  transition: all 0.5s cubic-bezier(0.39, 0.07, 0.23, 1) 0.2s;
`;

export const Wrapper = styled.div`
  padding: 115px 15px 85px;
  div.cart-header {
    position: relative;
    z-index: 9;
    width: 80%;
    margin: auto;
    background: white;
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    border: 3px solid white;
    box-shadow: 0px 5px 15px 0px rgba(190, 191, 197, 0.2);
    border-radius: 30px;
    button {
      height: 45px;
      border-radius: 25px;
      font-size: 13px;
      font-weight: bold;
      text-transform: uppercase;
      background-color: transparent;
      color: ${(props) => props.theme.palette.textSecondary};
      transition: color 0.5s ease-in-out 0.3s;
      /* box-shadow: 0px 5px 15px 0px rgba(190, 191, 197, 0.2); */
    }
    .curnent-step {
      color: white;
    }
  }
  .empty-state {
    position: fixed;
    left: calc(50vw - 80px);
    top: calc(50vh - 80px);
  }
  .order-complete-msg {
    position: fixed;
    top: calc(50vh - 148px);
    left: calc(50vw - 128px);
  }
  .sp3 {
    grid-column: span 3;
    display: grid;
    grid-template-columns: 1fr 75px;
    grid-gap: 15px;
  }
  input.coupon {
    background-color: #ffffff;
    height: 37px;
    border-radius: 12px;
    padding: 0 15px 3px 15px;
    border: 1px solid #f4f4f8;
  }
  button.coupon-btn {
    height: 40px;
    width: 100%;
    background-color: #ff5f50;
    color: white;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  div.phone-input {
    width: calc(100% - 30px);
    height: fit-content;
    background-color: ${(props) => props.theme.backgroundAccent};
    border-radius: 10px;
    padding: 10px 15px 10px 10px;
    label {
      font-size: 10px;
      color: ${(props) => props.theme.palette.textAccent};
      margin-bottom: 8px;
      display: block;
    }
    input {
      height: 35px;
      margin: 0 10px;
      background-color: transparent;
      width: calc(100% - 48px);
      font-size: 18px;
      color: ${(props) => props.theme.palette.textPrimary};
    }
  }
  div.code-input {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 210px;
    grid-row-gap: 10px;
    grid-column-gap: 30px;
    margin: auto;
    position: relative;
    direction: ltr;
    input.hidden-code-input {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
    span {
      background: transparent;
      width: 30px;
      height: 55px;
      text-align: center;
      font-size: 48px;
      font-weight: 500;
      caret-color: transparent;
      padding: 0;
      color: ${(props) => props.theme.palette.textPrimary};
    }
    hr {
      height: 3px;
      width: 100%;
      background: #eef0f4;
      border-radius: 2px;
    }
  }
  div.navigation-wrapper {
    position: fixed;
    bottom: 0;
    height: 110px;
    width: 100vw;
    left: 0;
    .bottom-nav-container {
      display: flex;
      width: 100vw;
      align-items: center;
      justify-content: space-evenly;
      height: 100%;
      margin: auto;
    }
  }
  .counter-container {
    width: 100px;
    margin: auto;
    div {
      div {
        font-size: 24px;
        font-weight: 600;
        height: 96%;
      }
    }
  }
  .input-container {
    display: grid;
    grid-template-columns: 1fr 45px;
  }
  .submit-number-btn {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #ff5f50;
    box-shadow: 0px 10px 20px 0px rgba(255, 95, 80, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease-in-out;
  }
  .disabled {
    background-color: #bebfc55c;
    box-shadow: none;
  }
  .code-actions {
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;
    div.action-btn-container {
      display: flex;
      justify-content: center;
      background-color: rgba(255, 95, 80, 0.1);
      border-radius: 20px;
      color: ${(props) => props.theme.palette.primary};
      padding-right: 8px;
      align-items: center;
    }
    label {
      font-size: 12px;
      padding: 7px 7px 10px 14px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  #countdown {
    width: 18px;
  }
  .hide-counter {
    width: 0px !important;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }
  .verification-code {
    grid-column: span 4;
    font-size: 46px;
    letter-spacing: 34.5px;
    text-align: left;
    caret-color: #ff5f50;
    width: 125%;
    padding-left: 3px;
    color: ${(props) => props.theme.palette.textPrimary};
  }
`;
