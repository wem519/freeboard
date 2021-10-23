import {
  Wrapper,
  IconWrapper,
  Icon,
  MainWrapper,
  WriterWrapper,
  Writer,
  Star,
  Contents,
  OptionWrapper,
  UpdateIcon,
  DeleteIcon,
  DateString,
} from "./BoardCommentList.styles";
import { useMutation } from "@apollo/client";
import router, { useRouter } from "next/router";
import { useState } from "react";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import { Modal } from "antd";

export default function BoardCommentListUIItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myPassword, setMyPassword] = useState("");
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  function onClickUpdate() {
    setIsEdit(true);
  }
  async function onClickDelete() {
    // const myPassword = prompt("비밀번호를 입력해주세요");
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.read },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }
  function onClickOpenDeleteModal() {
    setIsOpenDeleteModal(true);
  }
  function onChangeDeletePassword(event) {
    setMyPassword(event.target.value);
  }
  function onCancel() {
    setIsOpenDeleteModal(false);
  }

  return (
    <>
      {isOpenDeleteModal && (
        <Modal
          visible={true}
          onOk={onClickDelete}
          onCancel={onCancel}
          autoClose
        >
          <div>비밀번호 입력: </div>
          <input type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}

      {!isEdit && (
        <Wrapper>
          <IconWrapper>
            <Icon src="/user.png/" />
            <MainWrapper>
              <WriterWrapper>
                <Writer>{props.el?.writer}</Writer>
                <Star value={props.el?.rating} disabled />
              </WriterWrapper>
              <Contents>{props.el?.contents}</Contents>
            </MainWrapper>
            <OptionWrapper>
              <UpdateIcon src="/pencil.png/" onClick={onClickUpdate} />
              <DeleteIcon src="/delete.png/" onClick={onClickOpenDeleteModal} />
            </OptionWrapper>
          </IconWrapper>
          <DateString>{props.el?.createdAt}</DateString>
        </Wrapper>
      )}
      {isEdit && (
        <BoardCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
