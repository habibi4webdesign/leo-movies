import Button from "components/Button";
import { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { createSession, getUserInfo, lognIn } from "./LoginApi";

const Login = () => {
  let [searchParams] = useSearchParams();
  useEffect(() => {
    const request_token = searchParams.get("request_token");
    if (request_token) {
      createSession(request_token)
        .then((res) => {
          if (res?.data?.success) {
            localStorage.setItem("session_id", res?.data?.session_id);
            getUserInfo(res?.data?.session_id)
              .then((res) => {
                localStorage.setItem("account_id", res?.data?.id);
                window.location.href = "/watch-list";
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchParams]);

  const loginHandler = () => {
    lognIn()
      .then((res) => {
        console.log(res);
        if (res?.data?.request_token) {
          window.location.href = `https://www.themoviedb.org/authenticate/${res?.data?.request_token}?redirect_to=http://localhost:3000/login`;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Button type="btnPrimary" onClick={loginHandler}>
        log in
      </Button>
    </div>
  );
};

export default Login;
