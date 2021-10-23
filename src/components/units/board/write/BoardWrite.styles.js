import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  /* height:1715px; */
  /* background-color:green; */
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
`;
export const User = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
  margin-bottom: 40px;
`;
export const IdGroup = styled.div`
  width: 486px;
  height: 92px;
  margin-right: 12px;
`;
export const IdName = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Text1 = styled.input`
  width: 100%;
  height: 52px;
  padding: 10px;
`;
export const PwdGroup = styled.div`
  width: 486px;
  height: 92px;
  margin-left: 12px;
`;
export const PwdName = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;
export const Text2 = styled.input`
  width: 100%;
  height: 52px;
  padding: 10px;
`;
export const TextGroup = styled.div`
  width: 996px;
  height: 92px;
  margin-bottom: 40px;
`;
export const TextName = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;
export const Text3 = styled.input`
  width: 100%;
  height: 52px;
  padding: 10px;
`;
export const ContentGroup = styled.div`
  width: 100%;
  height: 520px;
  margin-bottom: 16px;
`;
export const ContentName = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;
export const Text4 = styled.textarea`
  width: 100%;
  height: 480px;
  padding: 10px;
`;
export const AddressGroup = styled.div`
  width: 996px;
  height: 242px;
  margin-top: 10px;
  /* background-color: green; */
`;
export const PostName = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;
export const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`;
export const PostNumber = styled.input`
  width: 77px;
  height: 52px;
  text-align: center;
  margin-right: 10px;
`;
export const PostButton = styled.button`
  width: 124px;
  height: 52px;
  background-color: black;
  color: white;
  margin-bottom: 10px;
  cursor: pointer;
`;
export const Address = styled.input`
  width: 996px;
  height: 52px;
  margin-bottom: 30px;
`;
export const YoutubeGroup = styled.div`
  width: 996px;
  height: 81px;
  margin: 40px;
`;
export const YoutubeName = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;
export const YoutubeText = styled.input`
  width: 996px;
  height: 46px;
  padding: 10px;
  border: 1px solid #bdbdbd;
`;
export const PictureGroup = styled.div`
  width: 996px;
  margin-top: 10px;
`;
export const PictureName = styled.div`
  font-size: 16px;
`;

export const Upload = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  margin-top: 10px;
  cursor: pointer;
`;

export const Upload1 = styled.div`
  font-size: 12px;
`;
export const RadioGroup = styled.div`
  width: 996px;
  padding-top: 40px;
`;
export const RadioName = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;
export const RadioButton = styled.input`
  cursor: pointer;
`;
export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  cursor: pointer;
`;
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const Summit = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${(props) => (props.aaa === true ? "#ffd600" : "gray")};
  border: none;
  font-size: 16px;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;
export const ErrorComment = styled.div`
  font-size: 10px;
  color: red;
`;
