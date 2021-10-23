import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutNav from "./Nav/LayoutNav.container";

const Body = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout(props) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNav />
      <Body>{props.children}</Body>
    </>
  );
}
