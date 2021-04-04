import styled from "styled-components";

export const Snack = styled.div`
  width: 100vw;
  position: fixed;
  pointer-events: none;
  bottom: 8vh;
  opacity: 0;
  left: 0;
  > div.snack-content {
    width: fit-content;
    margin: 0 auto;
    padding: 0 15px 3px 15px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    height: 42px;
    background-color: #26292b;
    color: white;
    font-family: "Cairo";
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    font-size: 16px;
  }
`;

export const Counter = styled.div`
  width: 50px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  margin: 0 10px 0 -15px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: #ff5f50;
    background-color: #ffffff;
    display: block;
    padding-bottom: 3px;
    width: 40px;
    height: 27px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const Wrapper = styled.div`
  padding-bottom: 105px;
  div.product-header {
    position: relative;
    img.product-image {
      width: 100vw;
      max-height: 375px;
      min-height: 375px;
      height: 100vw;
      object-fit: cover;
    }
    .add {
      position: absolute;
      width: 65px;
      height: 65px;
      right: 25px;
      top: 342.5px;
      border-radius: 50%;
      box-shadow: 0px 10px 20px 0px rgba(255, 95, 80, 0.25);
      background-color: ${(props) => props.theme.palette.primary};
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .reduce {
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: white;
      border-radius: 50%;
      right: 115px;
      top: 350px;
      box-shadow: 0px 10px 20px 0px #bebfc566;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  div.product-main-info {
    margin: 50px 25px 35px 25px;
    h2 {
      color: ${(props) => props.theme.palette.textPrimary};
    }
    div.price {
      width: fit-content;
      height: 35px;
      margin: 20px 0;
      background-color: ${(props) => props.theme.backgroundAccent};
      padding: 4.5px 15px 10.5px 15px;
      border-radius: 30px;
      line-height: 28px;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      h2 {
        font-size: 20px;
      }
    }
    div.rating {
      grid-column: span 2;
    }
    p.product-description {
      grid-column: span 2;
      font-size: 13px;
      line-height: 18px;
      color: ${(props) => props.theme.palette.textSecondary};
    }
  }
  .box {
    background-color: ${(props) => props.theme.backgroundAccent};
    border-radius: 10px;
    margin: 0 25px 25px 25px;
    padding-bottom: 10px;
  }
  .product-size {
    display: grid;
    grid-template-rows: 40px 1px auto;
    span {
      margin: auto;
      font-size: 12px;
      color: ${(props) => props.theme.palette.textAccent};
    }
    hr.separator {
      height: 0.2px;
      border-top: 0.1px solid #ced1d95e;
    }
  }

  .animate {
    animation: show 3s cubic-bezier(0.68, -0.6, 0.32, 1.6) 0.2s 1 alternate
      forwards;
  }
  @keyframes show {
    0% {
      opacity: 0;
      bottom: 90px;
    }
    17% {
      opacity: 1;
      bottom: 110px;
    }
    83% {
      opacity: 1;
      bottom: 110px;
    }
    100% {
      opacity: 0;
      bottom: 90px;
    }
  }
`;
