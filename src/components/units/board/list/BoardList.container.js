import BoardListUI from "./BoardList.presenter";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
} from "../../board/list/BoardList.queries";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useState } from "react";

export default function BoardList() {
  const router = useRouter(); //2번
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage, search: keyword },
  }); //1번, pagination하면서 출력페이지 지정
  const { data: dataBoardCount } = useQuery(FETCH_BOARDS_COUNT, {
    variables: { search: keyword },
  });

  function onClickMoveToBoardDetail(event) {
    router.push(`/boards/${event.currentTarget.id}`); //3번
  }

  function onClickMoveToBoardNew() {
    router.push(`/boards/new`); //4번
  }
  function onChangeKeyword(value) {
    setKeyword(value);
  }

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      startPage={startPage}
      count={dataBoardCount?.fetchBoardsCount}
      setStartPage={setStartPage}
      refetch={refetch}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
