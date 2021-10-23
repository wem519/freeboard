import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();
  const { accessToken, setAccessToken, userInfo } = useContext(GlobalContext);

  function onClickLogo() {
    router.push("/boards");

    return "aaa";
  }
  function onClickMoveToLogin() {
    router.push("/sign");
  }
  function onClickLogout() {
    localStorage.removeItem("accessToken");
    setAccessToken("");
  }

  function onClickSignup() {}

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickLogout={onClickLogout}
      onClickSignup={onClickSignup}
      accessToken={accessToken}
      userInfo={userInfo}
    />
  );
}
