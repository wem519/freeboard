import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* background-color: black; */
  width: 1200px;
  height: 800px;
  /* border: 1px solid black; */
  margin: 40px auto;
  /* margin-left:360px;
    margin-right:360px; */
`;
export const SearchWrapper = styled.div`
  /* background-color: red; */
  width: 1200px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const SearchTitle = styled.input`
  width: 776px;
  height: 52px;
`;
export const SearchDate = styled.div`
  width: 244px;
  height: 52px;
  /* background-color: blue; */
  border: 1px solid black;
`;
export const SearchButton = styled.button`
  width: 94px;
  height: 52px;
`;
export const Board = styled.div`
  width: 1200px;
  height: 583px;
  /* border: 1px solid black; */
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  width: 1200px;
  height: 52px;
  line-height: 52px;
`;
export const TextToken = styled.span`
  color: ${(props) => (props.isMatched ? "red" : "black")};
`;
export const ColumnNumber = styled.div`
  width: 10%;
  text-align: center;
`;
export const ColumnTitleHeader = styled.div`
  width: 60%;
  text-align: center;
`;
export const ColumnWriter = styled.div`
  width: 10%;
  text-align: center;
`;
export const ColumnDate = styled.div`
  width: 20%;
  text-align: center;
`;
export const ColumnTitle = styled.div`
  width: 60%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: red;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  /* height: 52px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
`;

// export const NumberWrapper = styled.div`
//   width: 1200px;
//   height: 10px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 58px;
//   margin-left: 90px;
// `;
// export const Previos = styled.img`
//   width: 7.41px;
//   height: 12px;
//   margin-right: 30px;
// `;
// export const Next = styled.img`
//   width: 7.41px;
//   height: 12px;
//   margin-left: 30px;
// `;
// export const Number = styled.div`
//   font-size: 16px;
//   margin: 20px;
// `;

export const BoardSummit = styled.button`
  width: 171px;
  height: 52px;
  /* margin-top: 30px; */
  cursor: pointer;
  :hover {
    color: red;
  }
`;
