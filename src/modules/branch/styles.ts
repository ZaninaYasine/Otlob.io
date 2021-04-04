import styled from "styled-components";

export const Counter = styled.div`
  height: 51px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  margin: 0 10px 0 -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 5px;
  div {
    background-color: #ffffff;
    height: 39px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 10px;
    span {
      font-size: 16px;
      font-weight: bold;
      color: ${(props) => props.theme.palette.primary};
      padding-bottom: 5px;
      letter-spacing: 0px;
    }
  }
`;

export const Wrapper = styled.div`
  padding: 115px 15px 110px;
  .footer {
    display: block;
    text-align: center;
    margin: 45px 0;
    font-size: 12px;
    color: ${(props) => props.theme.palette.textAccent};
  }
  .link{
    outline: none;
    text-decoration: none;
    color: unset;
}
`;
