import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: auto;
  margin-top: 80px;
  padding: 80px 102px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

export const Location = styled.div`
  display: flex;
  padding-top: 40px;
  margin-bottom: 30px;
`;

export const MapWrapper = styled.div``;

export const Label = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
`;
export const Location2 = styled.div`
  margin-left: 14px;
  margin-bottom: 16px;
`;

export const GpsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Gps = styled.div`
  display: flex;
  flex-direction: column;
`;
export const GpsInput = styled.input`
  width: 108px;
  height: 52px;
  margin-right: 56px;
`;
export const Address = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;
export const AddressInput = styled.input`
  width: 588px;
  height: 52px;
  margin-bottom: 16px;
`;

export const ImgWrapper = styled.div``;

export const Image = styled.button`
  width: 180px;
  height: 180px;
  background-color: #bdbdbd;
  text-align: center;
  cursor: pointer;
  margin-right: 24px;
`;

export const RadioWrapper = styled.div`
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  margin-right: 14px;
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-right: 24px;
  font-size: 16px;
  cursor: pointer;
`;

export const Submit = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${(props) => (props.aaa ? "#ffd600" : "#bdbdbd")};
  font-size: 16px;
  margin-top: 80px;
  cursor: pointer;
  display: block;
  margin: auto;
`;
