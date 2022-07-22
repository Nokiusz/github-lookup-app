import React from "react";
import { useQuery } from "@apollo/client";
import { AiOutlineUser } from "react-icons/ai/index";
import { useParams } from "react-router-dom";
import { getUser } from "graphql/queries/user";
import { UserDetailsVars, ViewerDetails } from "types";
import { Avatar, Container } from "./Profile.styles";

const Profile = (): JSX.Element => {
  const { login } = useParams();
  const {
    data: userDetails,
    loading: userDetailsLoading,
    error: userDetailsError,
  } = useQuery<ViewerDetails, UserDetailsVars>(getUser, {
    variables: {
      login: login ?? "",
    },
  });

  const { user } = userDetails || {};
  const defaultUserAvatar =
    "https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg";
  return (
    <Container>
      <AiOutlineUser />
      <h1>{user?.login}</h1>
      <Avatar src={user?.avatarUrl || defaultUserAvatar} alt="user avatar" />
    </Container>
  );
};

export default Profile;
