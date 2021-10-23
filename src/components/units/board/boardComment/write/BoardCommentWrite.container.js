import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { useMutation } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
export default function BoardCommentWrite(props) {
  const router = useRouter();
  const [myWriter, setMyWriter] = useState("");
  const [myPassWord, setMyPassword] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myStar, setMyStar] = useState(0);

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  function onChangeMyWiter(event) {
    setMyWriter(event.target.value);
  }
  function onChangeMyPassword(event) {
    setMyPassword(event.target.value);
  }

  function onChangeMyContents(event) {
    setMyContents(event.target.value);
  }
  function onChangeStar(value) {
    setMyStar(value);
  }

  async function onClickWrite() {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: myWriter,
            password: myPassWord,
            contents: myContents,
            rating: myStar,
          },
          boardId: String(router.query.read),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.read },
          },
        ],
      });
      console.log(result.data.createBoardComment);
    } catch (error) {
      alert(error);
    }
  }
  async function onClickUpdate(event) {
    event.target.id;
    if (!myContents) {
      alert("내용이 수정되지 않았습니다");
      return;
    }
    if (!myPassWord) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: myContents,
          },
          password: myPassWord,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.read },
          },
        ],
      });
      props.setIsEdit(false);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <BoardCommentWriteUI
        onChangeMyWiter={onChangeMyWiter}
        onChangeMyPassword={onChangeMyPassword}
        onChangeMyContents={onChangeMyContents}
        onChangeStar={onChangeStar}
        onClickWrite={onClickWrite}
        onClickUpdate={onClickUpdate}
        isEdit={props.isEdit}
        el={props.el}
      />
    </>
  );
}
