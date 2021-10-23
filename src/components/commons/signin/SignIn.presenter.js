import { useContext } from "react";
import { gql, useMutation, useApolloClient } from "@apollo/client";
import { Wrapper } from "./SignIn.styles";
import { GlobalContext } from "../../../../pages/_app";
import { useForm } from "react-hook-form";
import router from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function SignInUI() {
  // const router = useRouter();

  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext);
  const { handleSubmit, register } = useForm();
  const [loginUser] = useMutation(LOGIN_USER);

  const client = useApolloClient();

  async function onClickSignin(data) {
    const result = await loginUser({
      variables: {
        email: data.myEmail,
        password: data.myPwd,
      },
    });
    const accessToken = result.data?.loginUser.accessToken;
    localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
    setAccessToken(result.data?.loginUser.accessToken);
    // console.log(accessToken);

    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data.fetchUserLoggedIn;
    setAccessToken(accessToken);
    setUserInfo(userInfo);
    router.push("/markets");
    console.log(userInfo);

    // localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
    // setAccessToken(result.data?.loginUser.accessToken);
    // console.log(result.data?.loginUser.accessToken);
    // router.push("/boards");
  }

  return (
    <>
      <Wrapper>
        <form onSubmit={handleSubmit(onClickSignin)}>
          아이디: <input type="text" {...register("myEmail")} />
          <br />
          비밀번호: <input type="password" {...register("myPwd")} />
          <br />
          <button type="submit">로그인</button>
        </form>
      </Wrapper>
    </>
  );
}

// Apollo-Client를 사용해서 로그인화면을 구현하려 했는데 오류가 발생 - 로그인 결과 화면으로 이동이 되지 않고, return 윗 줄의 setUserInfo를 인식하지 못함.
// 수업 때와 다르게 react-hook-form을 사용하지 않았기 때문인가? - app.js입력 오류
//
