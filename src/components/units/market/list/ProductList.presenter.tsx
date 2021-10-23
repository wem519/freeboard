import {
  Wrapper,
  BestWrapper,
  BestBox,
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
  ProductListWrapper,
  ProductRow,
  Line,
  ProductBody,
  ProductInfoWrapper,
  ProductInfo,
  ProductName,
  ProductRemarks,
  ProductTag,
  ProductInfoFooter,
  ProductPriceWrapper,
  Submit,
} from "./ProductList.styles";

export default function ProductListUI(props) {
  return (
    <Wrapper>
      <Title>베스트 상품</Title>
      <BestWrapper>
        {props.bestItems?.fetchUseditemsOfTheBest.map((el) => (
          <BestBox key={el._id}>
            <BestImg src={`https://storage.googleapis.com/${el?.images[0]}`} />
            <BestProduct>
              <BestProduct2>
                <BestName>{el.name}</BestName>
                <BestRemarks>{el.remarks}</BestRemarks>
                <BestPrice>{el.price}</BestPrice>
              </BestProduct2>
              <ChoiceWrapper>
                <ChoiceImg />
                <ChoiceCount>{el.pickedCount}</ChoiceCount>
              </ChoiceWrapper>
            </BestProduct>
          </BestBox>
        ))}
      </BestWrapper>
      <div>
        <SearchBar>
          <Sales>
            <OnSale>판매중상품</OnSale>
            <Sold>판매된상품</Sold>
          </Sales>
          <div>
            <input />
            <input />
            <button>검색</button>
          </div>
        </SearchBar>
      </div>
      <ProductListWrapper>
        {props.data?.fetchUseditems.map((el) => (
          <ProductRow key={el._id}>
            <Line />
            <ProductBody>
              <ProductInfoWrapper>
                <img
                  src={`https://storage.googleapis.com/${el?.images[0]}`}
                  style={{ width: "160px", height: "160px" }}
                />
                <ProductInfo>
                  <ProductName>{el.name}</ProductName>
                  <ProductRemarks>{el.reamrks}</ProductRemarks>
                  <ProductTag>{el.tags}</ProductTag>

                  <ProductInfoFooter>
                    <img />
                    <div>{el.seller?.name}</div>
                    <img />
                    <div>{el.pickedCount}</div>
                  </ProductInfoFooter>
                </ProductInfo>
              </ProductInfoWrapper>
              <ProductPriceWrapper>
                <img />
                <div>{el.price}</div>
              </ProductPriceWrapper>
            </ProductBody>
          </ProductRow>
        ))}
      </ProductListWrapper>
      <Submit>상품 등록하기</Submit>
    </Wrapper>
  );
}
