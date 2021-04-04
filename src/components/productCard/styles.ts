import styled from "styled-components";

export const Wrapper = styled.div`
  .container {
    height: 100px;

    transition: all 0.4s ease-in-out;
  }
  .remove {
    transform: scale(0);
    transform: top center;
    height: 0px;
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 80px 35px 1fr 110px;
  grid-column-gap: 15px;
  background-color: ${(props) => props.theme.backgroundAccent};
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;
  padding: 3px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 7px;
    object-fit: fill;
  }
  h3 {
    margin: auto 0 3px 0;
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.theme.palette.textSecondary};
  }
  h3.title {
    margin: auto;
    padding-bottom: 3px;
    font-size: 16px;
  }
  h3.price {
    text-align: center;
    font-size: 16px;
    margin: auto;
    padding: 3px 8px 6px 8px;
    background-color: #eef0f5;
    border-radius: 20px;
  }
  h4.quantity {
    margin: auto;
    width: 100%;
    padding: 1px 0 4px 0;
    background-color: rgba(255, 95, 80, 0.15);
    text-align: center;
    border-radius: 20px;
    color: #ff5f50;
    font-size: 14px;
  }
  button.remove-btn {
    margin: 0 0 0 auto;
    height: 30px;
    border-radius: 15px;
    margin-right: 15px;
    background-color: #faf0f2;
    color: #ff5656;
    font-size: 12px;
    font-weight: bold;
    grid-column: span 2;
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      margin-left: 5px;
      padding-bottom: 2px;
    }
  }
`;
