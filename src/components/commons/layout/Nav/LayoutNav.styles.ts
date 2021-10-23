import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 64px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
  margin: auto;
`;
export const MenuItem = styled.div`
  margin: 0px 70px;
  cursor: pointer;
  font-family: "SangSangRock";
  :hover {
    color: red;
  }
`;
