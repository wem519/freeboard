import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 100px;
  margin: auto;
  background-color: gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  font-family: "SangSangRock";
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 30px;
`;

export const InnerLogo = styled.div`
  cursor: pointer;
  color: white;
`;

export const InnerButton = styled.div`
  margin: 10px;
  cursor: pointer;
  color: white;
`;
