import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 996px;
  padding-top: 40px;
`;
const Label = styled.label`
  font-size: 16px;
`;
const Input = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
`;

export default function Input01(props) {
  return (
    <Wrapper>
      <Label>{props.name}</Label>
      <Input type={props.type} />
    </Wrapper>
  );
}
