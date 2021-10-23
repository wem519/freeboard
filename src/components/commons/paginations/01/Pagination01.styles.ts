import styled from "@emotion/styled";

interface IpageProps {
  aaa?: boolean;
}
export const Page = styled.span`
  margin: 0px 10px;

  color: ${(props: IpageProps) => (props.aaa ? "red" : "black")};
  cursor: ${(props: IpageProps) => (props.aaa ? " none" : "pointer")};
  font-weight: ${(props: IpageProps) => (props.aaa ? " bold" : "normal")};
`;
