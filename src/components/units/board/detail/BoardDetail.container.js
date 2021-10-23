import BoardDetailUI from "./BoardDetail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.read },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  function onClickMoveToList() {
    router.push(`/boards/`);
  }
  function onClickMoveToEdit() {
    router.push(`/boards/${router.query.read}/edit`);
  }

  async function onClickDelete() {
    try {
      await deleteBoard({
        variables: { boardId: router.query.read } /*query 다음은 폴더명.
            다르게 작성한다면 onClickDelete 괄호 안에 (event)를 넣고 variables: {boardID : event.target_id}를 입력해준뒤 해당 버튼에 id를 입력(presenter.js에 위치). id={props.data?.fetchBoard._id} 하면 같은 결과가 나온다.  이후에 상세페이지의 댓글을 지우고 싶다면 댓글에 id 값을 주고 event.target 방식으로 처리하는 게 좋다*/,
      });
      alert("게시물이 삭제되었습니다.");
      router.push(`/boards`);
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickLike() {
    likeBoard({
      variables: { boardId: router.query.read },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.read } },
      ],
    });
  }

  function onClickDislike() {
    dislikeBoard({
      variables: { boardId: router.query.read },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.read } },
      ],
    });
  }

  return (
    <BoardDetailUI
      data={data}
      router={router}
      onClickMoveToList={onClickMoveToList}
      onClickDelete={onClickDelete}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
