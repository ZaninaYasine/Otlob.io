import styled from "styled-components";

type WrapperType = {
  height: number;
  open: boolean;
};

export const Wrapper = styled.div<WrapperType>`
  .products-list-container {
    display: grid;
    grid-template-columns: calc(50% - 7.5px) calc(50% - 7.5px);
    grid-gap: 15px;
    padding: ${(props) => (props.open === true ? "15px 0" : "0px")};
    height: ${(props) => (props.open === true ? props.height + "px" : "0px")};
    overflow: hidden;
    white-space: nowrap;
    transition: all 0.3s cubic-bezier(0.46, 0.13, 0.35, 1);
  }
  .category-header {
    display: grid;
    grid-template-columns: 1fr 35px;
    height: 50px;
    label.category-title {
      font-size: 22px;
      color: ${(props) => props.theme.palette.textPrimary};
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
      svg {
        transform: ${(props) =>
          props.open === true ? "rotate(180deg)" : "unset"};
        transition: all 0.3s cubic-bezier(0.46, 0.13, 0.35, 1);
      }
    }
  }
`;
