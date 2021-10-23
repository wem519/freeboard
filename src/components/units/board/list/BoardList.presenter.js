import {
  Wrapper,
  SearchWrapper,
  SearchTitle,
  SearchDate,
  SearchButton,
  Board,
  Row,
  ColumnNumber,
  ColumnTitleHeader,
  ColumnWriter,
  ColumnDate,
  ColumnTitle,
  NumberWrapper,
  Previos,
  Next,
  Number,
  FooterWrapper,
  BoardSummit,
  TextToken,
} from "../list/BoardList.styles";
import Pagination01 from "../../../commons/paginations/01/Pagination01.container";
import SearchBar01 from "../../../commons/searchbar01/Searchbar01.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props) {
  return (
    <Wrapper>
      <SearchBar01
        refetch={props.refetch}
        onChangeKeyword={props.onChangeKeyword}
      />
      <Board>
        <Row>
          <ColumnNumber>번호</ColumnNumber>
          <ColumnTitleHeader>제목</ColumnTitleHeader>
          <ColumnWriter>작성자</ColumnWriter>
          <ColumnDate>작성일</ColumnDate>
        </Row>
        {/* <div></div> */}
        {props.data?.fetchBoards.map((el, index) => (
          <Row
            key={el._id}
            onClick={props.onClickMoveToBoardDetail}
            id={el._id}
          >
            <ColumnNumber>{index}</ColumnNumber>
            <ColumnTitle>
              {el.title
                .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                .split("@#$%")
                .map((el) => (
                  <TextToken key={uuidv4()} isMatched={props.keyword === el}>
                    {el}
                  </TextToken>
                ))}
            </ColumnTitle>
            <ColumnWriter>{el.writer}</ColumnWriter>
            <ColumnDate>{el.createdAt}</ColumnDate>
          </Row>
        ))}
      </Board>
      <FooterWrapper>
        <Pagination01
          refetch={props.refetch}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
          count={props.count}
        />

        <BoardSummit onClick={props.onClickMoveToBoardNew}>
          게시물 등록하기
        </BoardSummit>
      </FooterWrapper>
    </Wrapper>
  );
}

// Title에 적용된 상세페이지 이동 이벤트의 id값을 제대로 인식하지 못해서 랜덤 실행이 되었기 때문에 상위의 Row로 이벤트를 넘기고 id값을 준 뒤 이벤트버블링을 통해 하위의 어디를 클릭해도 해당 id값을 찾아 해당페이지로 이동할 수 있도록 처리.
