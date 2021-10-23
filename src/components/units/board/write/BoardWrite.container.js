import BoardWriteUI from "./BoardWrite.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [text, setText] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [aaa, setAaa] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [nameError, setNameError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [textError, setTextError] = useState("");
  const [contentsError, setContentsError] = useState("");

  function onChangeName(event) {
    setName(event.target.value);

    if (
      event.target.value !== "" &&
      pwd !== "" &&
      text !== "" &&
      contents !== ""
    ) {
      setAaa(true);
    } else {
      setAaa(false);
    }
    if (event.target.value !== "") {
      setNameError("");
    }
  }
  function onChangePwd(event) {
    setPwd(event.target.value);
    if (
      name !== "" &&
      event.target.value !== "" &&
      text !== "" &&
      contents !== ""
    ) {
      setAaa(true);
    } else {
      setAaa(false);
    }
    if (event.target.value !== "") {
      setPwdError("");
    }
  }
  function onChangeText(event) {
    setText(event.target.value);
    if (
      name !== "" &&
      pwd !== "" &&
      event.target.value !== "" &&
      contents !== ""
    ) {
      setAaa(true);
    } else {
      setAaa(false);
    }
    if (event.target.value !== "") {
      setTextError("");
    }
  }
  function onChangeContents(event) {
    setContents(event.target.value);
    if (name !== "" && pwd !== "" && text !== "" && event.target.value !== "") {
      setAaa(true);
    } else {
      setAaa(false);
    }
    if (event.target.value !== "") {
      setContentsError("");
    }
  }

  function onChangeYoutubeUrl(event) {
    setYoutubeUrl(event.target.value);
  }
  function onChangeAddressDetail(event) {
    setAddressDetail(event.target.value);
  }
  function onClickAddressSearch() {
    setIsOpen(true);
  }
  function onCompleteAddressSearch(data) {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
    console.log("address", data);
  }
  function onCancel() {
    setIsOpen(false);
  }

  async function onClickSignup() {
    if (name === "") {
      setNameError("이름이 없습니다.");
    }
    if (pwd === "") {
      setPwdError("비밀번호가 없습니다.");
    }
    if (text === "") {
      setTextError("제목이 없습니다");
    }
    if (contents === "") {
      setContentsError("내용이 없습니다.");
    }

    if (name !== "" && pwd !== "" && text !== "" && contents !== "") {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: name,
            password: pwd,
            title: text,
            contents: contents,
            youtubeUrl: youtubeUrl,
            boardAddress: {
              zipcode: zipcode,
              address: address,
              addressDetail: addressDetail,
            },
          },
        },
      });
      console.log(result.data.createBoard.writer);
      router.push(`/boards/${result.data.createBoard._id}`);
    }
  }

  async function onClickUpdate() {
    if (!text && !contents) {
      alert("수정내용이 없습니다");
      return;
    }

    try {
      const myVariables = {
        boardId: router.query.read,
        password: pwd,
        updateBoardInput: {},
      };
      if (text) myVariables.updateBoardInput.title = text;
      if (contents) myVariables.updateBoardInput.contents = contents;

      await updateBoard({
        variables: myVariables,
      });
      router.push(`/boards/${router.query.read}`);
    } catch (error) {
      alert(error);
    }
  }
  //     const result = updateBoard({
  //         variables: {
  //         boardId: router.query.read,
  //         password: pwd,
  //         updateBoardInput: {
  //             title: text,
  //             contents: contents,
  //         }
  //     }
  // })
  // router.push(`/boards/${result.data.updateBoard_id}`) 두가지 모두 값은 값을 출력한다.

  return (
    <BoardWriteUI
      onChangeName={onChangeName}
      onChangePwd={onChangePwd}
      onChangeText={onChangeText}
      onChangeContents={onChangeContents}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onCancel={onCancel}
      onClickSignup={onClickSignup}
      nameError={nameError}
      pwdError={pwdError}
      textError={textError}
      contentsError={contentsError}
      aaa={aaa}
      isOpen={isOpen}
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
      data={props.data}
      address={address}
      zipcode={zipcode}
    />
  );
}

//지금 상태로는 게시판 수정 페이지에 해당 페이지의 데이터가 기본 입력 상태로 나타나는데 입력 칸에 하나라도 데이터를 입력하지 않으면 버튼 색깔 변화가 작동하지 않음 ==>입력되어 있는 데이터는 공백으로 인식하는 건가? 우선 체크해놓고 한번 확인 ==>수정페이지에서 아무런 데이터도 입력하지 않으면 오류 발생, 멘토님 설명으로는 모든 칸에 데이터를 입력해야 수정기능이 올바르게 작동(그렇게되면 앞선 setAaa오류도 이해). 오류를 방지하기 위해서는 조건문으로 빈칸 작성시 오류 알림이 뜨도록 해서 방지할 수 있음
//backend요청 부분에서 자꾸 오류 ==> 양식에 맞지 않는 것 같으니까 다시 시도해보고 안되면 또 킾해놓자.==>비밀번호를 입력한 보드는 불러올때도 비밀번호에 대해 variables에서 입력해줘야 올바른 양식, 자꾸 제기되는 문제인데 playground에서 docs를 보고 양식을 맞춰서 작성해야 함
//==>variables입력 부분에서 오타 발견, 수정 후 출력에는 문제 없지만 수업파일, 과제파일, 게시판구현에서 모두 똑같은 에러 기록이 뜬다. 구조적으로 올바른 발생인지 알아봐야겠다.
//props에 대한 개인적인 이해
//props는 부모가 자식 컴포넌트에게 넘겨준 데이터 기능을 의미하는 것으로 컴포넌트 구분으로 나누어진 기능의 연결 고리를 props으로 연결해준다. boardWrite.container파일은 시작페이지의 자식 컴포넌트로 props으로 연결해준다. data={props.data}때문에 부모 자식 관계와 props가 제대로 이해되지 않았는데 아직도 완벽히 이해한 건 아니지만 관계에 대해 계속 생각하면서 스크립트를 작성해야 함
//
