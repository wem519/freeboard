import styled from "@emotion/styled";
import reactPlayer from "react-player";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1602px; */
  border: solid 1px black;
  margin: 40px auto;
`;
export const Headers = styled.div`
  width: 1200px;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 106.67px;
  padding-right: 108.67px;
  padding-bottom: 20px;
  margin-top: 30px;

  /* background-color:yellow; */
`;
export const Line = styled.div`
  width: 996px;
  border-bottom: 1px solid grey;
  margin: auto;
`;

export const User = styled.img`
  width: 47px;
  height: 47px;
  margin-right: 16.6px;
`;
export const Manage = styled.div`
  width: 1200px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;
export const Attach = styled.img`
  width: 27px;
  height: 14px;
`;
export const Location = styled.img`
  width: 18.67px;
  height: 26.67px;
  margin-left: 30px;
  cursor: pointer;
`;

export const Name = styled.div`
  width: 70px;
  height: 40px;
  font-size: 24px;
`;
export const Date = styled.div`
  width: 250px;
  height: 24px;
  font-size: 16px;
  color: grey;
`;

export const Title = styled.div`
  width: 285px;
  height: 54px;
  font-size: 36px;
  margin-top: 80px;
  margin-left: 102px;
  /* background-color:red; */
`;
export const BodyWrapper = styled.div`
  width: 1200px;
  height: 1000px;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  /* justify-content:center; */
  align-items: center;
  margin-top: 40px;
  margin-bottom: 162px;
`;
export const ImageInput = styled.img`
  width: 996px;
  height: 480px;
  /* background-color: lime; */
  margin-bottom: 40px;
`;
export const TextInput = styled.div`
  width: 996px;
  height: 96px;
  /* background-color: blue; */
  border: 1px solid black;
  margin-bottom: 120px;
`;
export const YoutubeInput = styled(reactPlayer)`
  margin: auto;
  /* background-color: white; */
`;
export const FeelingWrapper = styled.div`
  /* width: 80px; */
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: solid 1px red; */
`;

export const Feeling = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const Good = styled.img`
  width: 20px;
  height: 18px;
  cursor: pointer;
`;

export const GoodCount = styled.div`
  width: 40px;
  height: 27px;
  font-size: 16px;
  color: #ffd600;
  text-align: center;
`;

export const Hate = styled.img`
  width: 20px;
  height: 18px;
  cursor: pointer;
`;
export const HateCount = styled.div`
  width: 40px;
  height: 27px;
  font-size: 16px;
  text-align: center;
`;
export const FooterWrapper = styled.div`
  width: 1200px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 40px auto;
`;
export const ListButton = styled.button`
  width: 179px;
  height: 52px;
  margin-right: 24px;
  cursor: pointer;

  :hover {
    color: red;
  }
`;
export const UpdateButton = styled.button`
  width: 179px;
  height: 52px;
  margin-right: 24px;
  cursor: pointer;

  :hover {
    color: red;
  }
`;

export const DeleteButton = styled.button`
  width: 179px;
  height: 52px;
  cursor: pointer;

  :hover {
    color: red;
  }
`;
