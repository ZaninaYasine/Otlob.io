import styled from "styled-components";

export const Wrapper = styled.div`
  height: 60px;
  width: 175px;
  padding: 0 10px;
  background-color: white;
  box-shadow: 0px 10px 20px 0px rgba(190, 191, 197, 0.4);
  border-radius: 30px;
  position: fixed;
  bottom: 25px;
  left: calc(50% - 97.5px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  > svg {
    margin: auto;
  }
  .selected {
    fill: ${(props) => props.theme.palette.primary};
    > * {
      fill: ${(props) => props.theme.palette.primary};
    }
  }
  .badge {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 17px;
    background-color: #ff5f50;
    border-radius: 10px;
    color: white;
    font-size: 13px;
    right: 19px;
    top: 8px;
    padding-bottom: 3px;
  }
`;
