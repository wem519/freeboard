import {
  Wrapper,
  BestWrapper,
  BestImg,
  BestProduct,
  BestProduct2,
  BestName,
  BestRemarks,
  BestPrice,
  ChoiceWrapper,
  ChoiceImg,
  ChoiceCount,
  Title,
  SearchBar,
  Sales,
  OnSale,
  Sold,
} from "./ProductList.styles";

export default function ProductListUI(props) {
  return (
    <Wrapper>
      <Title>베스트 상품</Title>
      <BestWrapper>
        <BestImg />
        <BestProduct>
          <BestProduct2>
            <BestName>레고</BestName>
            <BestRemarks>2021.11.1</BestRemarks>
            <BestPrice>240,000원</BestPrice>
          </BestProduct2>
          <ChoiceWrapper>
            <ChoiceImg />
            <ChoiceCount>카운트</ChoiceCount>
          </ChoiceWrapper>
        </BestProduct>
      </BestWrapper>
      <div>
        <SearchBar>
          <Sales>
            <OnSale>판매중상품</OnSale>
            <Sold>판매된상품</Sold>
          </Sales>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <input />
            <input />
            <button>검색</button>
          </div>
        </SearchBar>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <img style={{ width: "160px", height: "160px" }} />
        </div>
        <div style={{}}>
          <div>
            <div>상품명</div>
            <div>remarks</div>
            <div>태그</div>
          </div>
          <div style={{ display: "flex" }}>
            <img />
            <div>판매자</div>
            <img />
            <div>20</div>
          </div>
        </div>

        <div>
          <img />
          <div>2000원</div>
        </div>
      </div>
      <button>상품 등록하기</button>
    </Wrapper>
  );
}
