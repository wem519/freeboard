// import {useRouter} from 'next/router'
// import {useQuery, gql} from '@apollo/client'
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentWrite from "../../../src/components/units/board/boardComment/write/BoardCommentWrite.container";
import BoardCommentList from "../../../src/components/units/board/boardComment/list/BoardCommentList.container";
export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
