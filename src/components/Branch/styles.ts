import styled from "styled-components";

export const Wrapper = styled.div`
  height: 35px;
  width: calc(100% - 35px);
  padding: 15px;
  display: grid;
  grid-template-columns: 35px auto;
  grid-column-gap: 15px;
  background-color: ${(props) => props.theme.backgroundAccent};
  border-radius: 10px;
  div.logo-container {
    width: 35px;
    height: 35px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 30px;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
      border-radius: 50%;
    }
    .badge {
      width: 10px;
      height: 10px;
      position: absolute;
      right: 24px;
      bottom: 2px;
      border-radius: 15px;
      border: 2px solid ${(props) => props.theme.backgroundAccent};
    }
    .open {
      background-color: ${(props) => props.theme.success};
    }
    .closed {
      background-color: ${(props) => props.theme.palette.textAccent};
    }
    .busy {
      background-color: ${(props) => props.theme.error};
    }
  }
  div.branch-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    label {
      color: ${(props) => props.theme.palette.textPrimary};
      font-size: 16px;
      letter-spacing: 0.8px;
      font-weight: 500;
    }
    span {
      color: ${(props) => props.theme.palette.textSecondary};
      font-size: 11px;
      letter-spacing: 0.6px;
    }
  }
`;
