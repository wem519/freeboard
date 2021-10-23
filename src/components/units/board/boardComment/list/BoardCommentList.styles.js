import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  height: 128px;
  padding-top: 20px;
  margin: 0 auto;
  border-bottom: 1px solid lightgrey;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;

export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Star = styled(Rate)`
  padding-left: 20px;
  font-size: 15px;
`;

export const Contents = styled.div``;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 14px;
`;

export const DateString = styled.div`
  color: lightgray;
  padding-top: 15px;
  padding-left: 60px;
`;
