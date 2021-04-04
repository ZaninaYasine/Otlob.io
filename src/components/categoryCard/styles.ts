import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  grid-column-gap: 15px;
  grid-template-rows: 45% 55%;
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.backgroundAccent};
  border-radius: 10px;
  overflow: hidden;
  img {
    grid-row: span 2;
    width: 100%;
  }
  h3 {
    margin: auto 0 3px 0;
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.theme.palette.textSecondary};
  }
  p {
    font-size: 12px;
    color: ${(props) => props.theme.palette.textAccent};
  }
`;
