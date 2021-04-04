import styled from "styled-components";

type CookieType = {
  show: boolean | undefined;
};

export const Cookie = styled.div<CookieType>`
  width: 90vw;
  max-width: 389px;
  background: white;
  position: fixed;
  bottom: ${(props) => (props.show === true ? "5vw" : "-50vh")};
  opacity: 0;
  z-index: 999;
  right: 5vw;
  border-radius: 15px;
  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);
  ${(props) =>
    props.show === true && props.show
      ? "animation: show 0.5s cubic-bezier(0.32, 0.53, 0, 1.14) 2s 1 forwards"
      : "animation: hide 1s ease-out 1 forwards"};
  .cookie-content {
    display: grid;
    grid-template-columns: 25px 1fr;
    margin: 20px;
    grid-gap: 10px;
    label {
      font-size: 14px;
      line-height: 16px;
      margin: auto;
      padding: 0 10px;
      display: block;
    }
    svg {
      margin: auto;
      fill: ${(props) => props.theme.palette.primary};
    }
  }
  button {
    height: 35px;
    width: calc(100% - 20px);
    grid-column: span 2;
    background: ${(props) => props.theme.palette.primary};
    color: white;
    border: 0;
    outline: none;
    border-radius: 9px;
    margin: 0 10px 10px 10px;
    font-size: 15px;
    font-family: "Cairo", Cambria, Cochin, Georgia, Times, "Times New Roman",
      serif;
  }
  @keyframes show {
    0% {
      bottom: -50vh;
      opacity: 1;
    }
    100% {
      opacity: 1;
      bottom: 3vh;
    }
  }
  @keyframes hide {
    0% {
      bottom: -3vh;
      opacity: 1;
    }
    100% {
      bottom: -50vh;
      opacity: 0;
    }
  }
  @media only screen and (min-width: 930px) {
    right: 3vh;
  }
`;
