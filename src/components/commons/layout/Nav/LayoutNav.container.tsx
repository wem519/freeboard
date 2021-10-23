import { useRouter } from "next/router";
import LayoutNavUI from "./LayoutNav.presenter";
export default function LayoutNav() {
  const router = useRouter();

  function onClickMenu(event) {
    router.push(event.target.id);
  }

  return <LayoutNavUI onClickMenu={onClickMenu} />;
}
