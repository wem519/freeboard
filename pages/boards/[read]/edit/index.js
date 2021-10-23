import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.read },
  });

  return <BoardWrite isEdit={true} data={data} />;
}

// 수정하기 버튼 클릭 시 해당 데이터 고정 출력 시
// presenter파일에서 해당 데이터(작성자, 제목, 내용)에  defaultValue={}를 입력(각 컴포넌트 간 연결을 위해 props 필수 입력)
// 예>{props.data?.fetchBoard.writer} *?사용이유*
// 수정페이지 작성 시 fetchBoard의 gql구문 입력 양식을 맞춰 작성 useRouter와 useQuery, gql을 import해서 사용을 정의해준다.
// *return문에 연결된 data={data}는 어떤 것을 받아온다는 거?*

// 실제로 변경된 데이터에 대해서만 backend에 수정을 요청하기 위한 스크립트 필요
// board구문에 대해서는 수업내용으로 응용이 가능한데 아지까지 product페이지는 구문 작성에서 자꾸 오류가 발생해서 확인이 필요
// 수정함수가 있는 페이지(보통 CredentialsContainer.js파일)에서 작성

//address defaultValue가 동작하지 않은 이유
//=>fetchBoard(fetchBoards아님)를 불러올 때 gql구문에 주소 관련 내용을 입력 X
