import styled from "styled-components";

export const Wrapper = styled.div`
  input {
    width: calc(100% - 20px);
    font-size: 42px;
    padding: 70px 0 20px 20px;
    color: ${(props) => props.theme.palette.textSecondary};
    caret-color: ${(props) => props.theme.palette.textSecondary};
  }
`;
