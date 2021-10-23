import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;
const Label = styled.div`
  font-size: 16px;
`;
const Quill = styled(ReactQuill)`
  width: 996px;
  height: 320px;
  padding-top: 30px;
  padding-bottom: 40px;
`;

export default function Context(props) {
  return (
    <Wrapper>
      <Label>{props.name}</Label>
      <Quill onChange={props.onChange}></Quill>
    </Wrapper>
  );
}
