import { useState } from "react";
import Pagination01UI from "./Pagination01.presenter";

export default function Pagination01(props) {
  const [clickedPage, setClickedPage] = useState(1);
  const lastPage = Math.ceil(props.count / 10);

  function onClickPage(event) {
    const clickedPage = Number(event.target.id);
    setClickedPage(clickedPage);
    props.refetch({ page: clickedPage });
  }

  function onClickPrevPage() {
    if (props.startPage <= 1) return;
    setClickedPage(props.startPage - 10);
    props.setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (props.startPage + 10 > lastPage) return;
    setClickedPage(props.startPage + 10);
    props.setStartPage((prev) => prev + 10);
  }
  return (
    <Pagination01UI
      startPage={props.startPage}
      lastPage={lastPage}
      clickedPage={clickedPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
