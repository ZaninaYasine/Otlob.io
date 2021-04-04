import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% - 6px);
  height: 245px;
  background-color: #f4f4f8; /*fafbfd;*/
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 165px 25px 1fr;
  grid-gap: 4px;
  padding: 3px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  label {
    color: ${(props) => props.theme.palette.textPrimary};
    font-weight: bold;
    font-size: 16px;
    padding: 0 15px 0 25px;
  }

  span {
    color: ${(props) => props.theme.palette.textSecondary};
    color: #777782;
    font-size: 16px;
    line-height: 30px;
    padding: 0 14px;
    height: 35px;
    overflow: hidden;
    display: block;
    margin: auto;
    background: #fafbfd;
    border-radius: 20px;
    font-weight: 600;
  }
`;
