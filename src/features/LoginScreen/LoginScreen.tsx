import React from "react";
import { AiOutlineGithub } from "react-icons/ai/index";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Container } from "./LoginScreen.styles";

const LoginScreen = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/profile/nokiusz");
  };
  return (
    <Container>
      <Button onClick={login}>
        <AiOutlineGithub />
        Login with github
      </Button>
    </Container>
  );
};

export default LoginScreen;
