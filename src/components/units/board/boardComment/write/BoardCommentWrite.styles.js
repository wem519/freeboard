import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 550px; */
  /* background-color: black; */
  margin: 40px auto;
`;

export const CommentIcon = styled.img``;

export const Star = styled(Rate)``;
// export const Star = styled.div``;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
`;

export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  /* border-bottom: 1px solid lightgray; */
`;
export const Line = styled.div`
  border-bottom: 1px solid lightgrey;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BottomLength = styled.div`
  color: gray;
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
`;

export const BottomButton = styled.button`
  width: 91px;
  height: 52px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
