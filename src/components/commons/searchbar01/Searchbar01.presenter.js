import {
  SearchWrapper,
  SearchTitle,
  SearchDate,
  SearchButton,
} from "../../units/board/list/BoardList.styles";

export default function SearchBar01UI(props) {
  return (
    <>
      <SearchWrapper>
        <SearchTitle
          placeholder="제목을 검색해 주세요"
          onChange={props.onChangeSearchbar}
        ></SearchTitle>
        <SearchDate></SearchDate>
        <SearchButton>검색하기</SearchButton>
      </SearchWrapper>
    </>
  );
}
