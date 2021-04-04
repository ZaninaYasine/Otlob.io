import styled from "styled-components";

type WrapperType = {
  info: boolean;
  available: number;
  padding: number;
};

export const Icon = styled.div`
  width: 35px;
  height: 35px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  grid-row: span 2;
`;

export const Card = styled.div`
  padding: 12px 12px 12px 12px;
  background-color: ${(props) => props.theme.backgroundAccent};
  border-radius: 15px;
  margin: 0 15px 15px 15px;
  display: grid;
  grid-template-columns: 35px 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 5px;
  opacity: 0;
  transform: translateY(-8px);
  transition: all 0.6s cubic-bezier(0.45, -0.32, 0.13, 1.32);
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
    grid-template-columns: 80% 20%;
    grid-row-gap: 15px;
    grid-column: span 3;
    hr {
      width: 100%;
      height: 1px;
      border-top: 0.5px solid rgba(190, 191, 197, 0.3);
    }
    span.sub-info {
      color: ${(props) => props.theme.palette.textAccent};
    }
    span.main-info {
      color: ${(props) => props.theme.palette.textSecondary};
      text-align: right;
    }
    span.total {
      color: ${(props) => props.theme.palette.textPrimary};
      font-weight: bold;
    }
    span.total-price {
      text-align: right;
    }
  }
`;

export const Wrapper = styled.div<WrapperType>`
  width: 100vw;
  height: ${(props) => (props.info ? "100vh" : "100px")};
  position: fixed;
  top: 0px;
  left: 0;
  display: grid;
  z-index: 999;
  overflow: ${(props) => (props.info ? "visible" : "hidden")};
  transition: all 0.3s cubic-bezier(0.46, 0.13, 0.35, 1);
  div.card {
    height: fit-content;
    position: relative;
    z-index: 999;
    transition: all 0.3s cubic-bezier(0.42, 0.13, 0.12, 1);
    padding-bottom: 1px;
  }
  .open {
    margin: 15px;
    box-shadow: 0px 10px 18px 8px rgba(190, 191, 197, 0.2);
    border-radius: 15px;
    background-color: white;
  }
  div.header-container {
    display: grid;
    grid-template-columns: ${(props) =>
      props.available === 1 ? "40px 1fr 35px 50px" : "40px 1fr 35px"};
    height: 100px;
    position: relative;
    z-index: 9;
    grid-gap: 15px;
    margin: 0 15px;
    div.title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-bottom: 8px;
      span {
        font-size: 18px;
        font-weight: bold;
        color: ${(props) => props.theme.palette.textSecondary};
        line-height: 20px;
      }
      h2 {
        font-size: 26px;
        color: ${(props) => props.theme.palette.textPrimary};
        line-height: 28px;
      }
    }
  }
  div.logo-container {
    position: relative;
    height: 45px;
    width: 45px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundAccent};
    border-radius: 50%;
    .badge {
      width: 10px;
      height: 10px;
      background-color: ${(props) => props.theme.success};
      position: absolute;
      right: 30px;
      bottom: 1px;
      border-radius: 15px;
      border: 2px solid white;
    }
    .status__open {
      margin-top: 35px;
      opacity: 1;
      background-color: ${(props) => props.theme.success};
    }
    .status__closed {
      margin-top: 35px;
      opacity: 1;
      background-color: ${(props) => props.theme.palette.textAccent};
    }
    .status__busy {
      margin-top: 35px;
      opacity: 1;
      background-color: ${(props) => props.theme.error};
    }
  }
  button.cart {
    height: 50px;
    width: 50px;
    background-color: ${(props) => props.theme.backgroundAccent};
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0 auto auto;
  }
  button.more-btn {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${(props) => props.theme.backgroundAccent};
    margin: auto;
  }
  div.cart-wrapper {
    position: relative;
    margin: auto;
  }
  div.cart-badge {
    width: 20px;
    height: 17px;
    position: absolute;
    background-color: #ff5f50;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    top: -2px;
    right: -4px;
    font-size: 13px;
    padding-bottom: 3px;
    box-shadow: 0px 3px 4px 1px rgba(190, 191, 197, 0.2);
    transform-origin: center center;
    transition: all 0.3s ease-in-out;
  }
  .status {
    position: relative;
    z-index: 9999;
    margin: 0 auto;
    display: block;
    text-align: center;
    width: fit-content;
    padding: 5px 15px 10px 15px;
    color: white;
    border-radius: 20px;
    margin-top: 25px;
    opacity: 0;
    box-shadow: 0px 10px 10px 4px rgba(190, 191, 197, 0.2);
    transition: all 0.8s cubic-bezier(0.42, 0.13, 0.12, 1) 0.4s;
  }
  .status__open {
    margin-top: 35px;
    opacity: 1;
    background-color: ${(props) => props.theme.success};
  }
  .status__closed {
    margin-top: 35px;
    opacity: 1;
    background-color: ${(props) => props.theme.palette.textAccent};
  }
  .status__busy {
    margin-top: 35px;
    opacity: 1;
    background-color: ${(props) => props.theme.error};
  }
  .hide-badge {
    transform: scale(0);
  }
  .work {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 15px;
  }
  #blur {
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
  }
  .acrylic {
    position: relative;
    background: #ffffffcc;
  }

  .acrylic::before {
    content: "";
    position: absolute;
    top: -30px;
    right: -30px;
    width: calc(100% + 60px);
    height: calc(100% + 60px);
    filter: blur(30px) saturate(125%);
    z-index: -1;
  }

  .acrylic::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #ffffffcc
      url(data:image/png;base64,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);
    opacity: 0;
    z-index: -1;
  }

  @supports (backdrop-filter: blur(30px)) or
    (-webkit-backdrop-filter: blur(30px)) {
    .acrylic {
      -webkit-backdrop-filter: blur(30px) saturate(125%);
      backdrop-filter: blur(30px) saturate(125%);
    }

    .acrylic::before {
      display: none;
    }
  }
  .show {
    animation: show 0.6s forwards;
  }

  .d1 {
    animation-delay: 100ms;
  }
  .d2 {
    animation-delay: 170ms;
  }
  .d3 {
    animation-delay: 240ms;
  }
  @keyframes show {
    0% {
      transform: translateY(-8px);
      opacity: 0;
    }
    25% {
      transform: translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateY(3px);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
