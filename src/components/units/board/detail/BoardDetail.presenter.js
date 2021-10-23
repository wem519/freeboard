import {
  Wrapper,
  Headers,
  Line,
  User,
  Manage,
  Attach,
  Location,
  Name,
  Date,
  Title,
  BodyWrapper,
  ImageInput,
  TextInput,
  YoutubeInput,
  FeelingWrapper,
  Feeling,
  Good,
  GoodCount,
  Hate,
  HateCount,
  FooterWrapper,
  ListButton,
  DeleteButton,
  UpdateButton,
} from "../../../../components/units/board/detail/BoardDetail.styles";
import { Tooltip } from "antd";

export default function BoardDetailUI(props) {
  return (
    <div>
      <Wrapper>
        <Headers>
          <User src="/user.png" />
          <Manage>
            <Name>{props.data?.fetchBoard.writer}</Name>
            <Date>{props.data?.fetchBoard.createdAt}</Date>
          </Manage>
          <Attach src="/attach.png" />
          <Tooltip
            placement="topRight"
            title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
          >
            <Location src="/location2.png" />
          </Tooltip>
        </Headers>
        <Line />
        <Title>{props.data?.fetchBoard.title}</Title>
        <BodyWrapper>
          <ImageInput src="/image.png"></ImageInput>
          <TextInput>{props.data?.fetchBoard.contents}</TextInput>
          <YoutubeInput
            url={props.data?.fetchBoard.youtubeUrl}
            width="486px"
            height="240px"
          />
        </BodyWrapper>
        <FeelingWrapper>
          <Feeling>
            <Good src="/good.png" onClick={props.onClickLike} />
            <GoodCount>{props.data?.fetchBoard.likeCount}</GoodCount>
          </Feeling>
          <Feeling>
            <Hate src="/bad.png" onClick={props.onClickDislike} />
            <HateCount>{props.data?.fetchBoard.dislikeCount}</HateCount>
          </Feeling>
        </FeelingWrapper>
      </Wrapper>
      <FooterWrapper>
        <ListButton onClick={props.onClickMoveToList}>목록으로</ListButton>
        <UpdateButton onClick={props.onClickMoveToEdit}>수정하기</UpdateButton>
        <DeleteButton
          // id={props.data?.fetchBoard._id}
          onClick={props.onClickDelete}
        >
          삭제하기
        </DeleteButton>
      </FooterWrapper>
    </div>
  );
}
