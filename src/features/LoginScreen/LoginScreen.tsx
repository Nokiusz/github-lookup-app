import React, { useEffect } from "react";
import { AiOutlineGithub } from "react-icons/ai/index";
import { Navigate, useNavigate } from "react-router-dom";
import { getCookie } from "typescript-cookie";

import { Link, Container } from "./LoginScreen.styles";

const LoginScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getCookie("github_token")) {
      navigate("/");
    } else {
      navigate("/profile/nokiusz");
    }
  }, [navigate]);

  return (
    <Container>
      <h1>Github Lookup.</h1>

      <Link href="https://github.com/login/oauth/authorize?client_id=ca057960e8803f45e8b4&scope=repo%2Crepo_deployment%2Cuser%2C">
        <AiOutlineGithub />
        Login with github
      </Link>
    </Container>
  );
};

export default LoginScreen;
