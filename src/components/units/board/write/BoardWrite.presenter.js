import {
  Wrapper,
  Title,
  User,
  IdGroup,
  IdName,
  Text1,
  PwdGroup,
  PwdName,
  Text2,
  TextGroup,
  TextName,
  Text3,
  ContentGroup,
  ContentName,
  Text4,
  AddressGroup,
  PostName,
  PostWrapper,
  PostNumber,
  PostButton,
  Address,
  YoutubeGroup,
  YoutubeName,
  YoutubeText,
  PictureGroup,
  PictureName,
  Upload,
  RadioGroup,
  RadioName,
  RadioButton,
  RadioLabel,
  ButtonGroup,
  Summit,
  ErrorComment,
} from "../../../../components/units/board/write/BoardWrite.styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function BoardWriteUI(props) {
  return (
    <>
      {props.isOpen && (
        <Modal visible={true} onCancel={props.onCancel}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} autoClose />
        </Modal>
      )}
      <Wrapper>
        <Title>{props.isEdit ? "게시판 수정" : "게시판 등록"}</Title>
        <User>
          <IdGroup>
            <IdName>작성자</IdName>
            <Text1
              name="name"
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeName}
              defaultValue={props.data?.fetchBoard.writer}
            ></Text1>
            <ErrorComment>{props.nameError}</ErrorComment>
          </IdGroup>
          <PwdGroup>
            <PwdName>비밀번호</PwdName>
            <Text2
              name="pwd"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangePwd}
            ></Text2>
            <ErrorComment>{props.pwdError}</ErrorComment>
          </PwdGroup>
        </User>
        <TextGroup>
          <TextName>제목</TextName>
          <Text3
            name="text"
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeText}
            defaultValue={props.data?.fetchBoard.title}
          ></Text3>
          <ErrorComment>{props.textError}</ErrorComment>
        </TextGroup>
        <ContentGroup>
          <ContentName>내용</ContentName>
          <Text4
            name="contents"
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          ></Text4>
          <ErrorComment>{props.contentsError}</ErrorComment>
        </ContentGroup>
        <AddressGroup>
          <PostName>주소</PostName>
          <PostWrapper>
            <PostNumber
              name="zipcode"
              placeholder="07250"
              readOnly
              value={
                props.zipcode || props.data?.fetchBoard.boardAddress?.zipcode
              }
            />
            <PostButton onClick={props.onClickAddressSearch}>
              우편번호 검색
            </PostButton>
          </PostWrapper>
          <Address
            readOnly
            value={
              props.address || props.data?.fetchBoard.boardAddress?.address
            }
          ></Address>
          <Address
            onChange={props.onChangeAddressDetail}
            defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail}
          ></Address>
        </AddressGroup>
        <YoutubeGroup>
          <YoutubeName>유투브</YoutubeName>
          <YoutubeText
            name="youtube"
            placeholder="링크를 복사해주세요"
            onChange={props.onChangeYoutubeUrl}
          />
        </YoutubeGroup>
        <PictureGroup>
          <PictureName>사진 첨부</PictureName>
          <Upload>
            <div>+</div>
            <div>Upload</div>
          </Upload>
          <Upload>
            <div>+</div>
            <div>Upload</div>
          </Upload>
          <Upload>
            <div>+</div>
            <div>Upload</div>
          </Upload>
        </PictureGroup>
        <RadioGroup>
          <RadioName>메인설정</RadioName>
          <RadioButton type="radio" id="youtube"></RadioButton>
          <RadioLabel htmlFor="youtube">유투브</RadioLabel>
          <RadioButton type="radio" id="image"></RadioButton>
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </RadioGroup>
        <ButtonGroup>
          {!props.isEdit && (
            <Summit onClick={props.onClickSignup} aaa={props.aaa}>
              등록하기
            </Summit>
          )}
          {props.isEdit && (
            <Summit onClick={props.onClickUpdate} aaa={props.aaa}>
              수정하기
            </Summit>
          )}
        </ButtonGroup>
      </Wrapper>
    </>
  );
}

// defaultValue가 적용이 안되는 이유는?
// address를 불러올때 value로 불러오는 이유?
// 앞으로 해야될 일
// 1. 댓글 수정, 삭제
// 2. 페이지네이션
// 3. 레이아웃
// 4. 무한 스크롤
