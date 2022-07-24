import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  AiOutlineTeam,
  AiOutlineEnvironment,
  AiOutlineBank,
} from "react-icons/ai/index";
import { useTranslation } from "react-i18next";

import { getUser } from "graphql/queries/user";
import { UserDetailsVariables, UserDetails, ViewerDetails } from "types";
import { getAuthUser } from "graphql/queries/viewer";
import { getCookie, removeCookie } from "typescript-cookie";

import { TopBar } from "components";
import {
  Avatar,
  Container,
  SecondaryText,
  Text,
  Followers,
  Title,
  Location,
  Company,
  CreatedDate,
} from "./Profile.styles";

const Profile = (): JSX.Element => {
  const { t } = useTranslation();
  const { login } = useParams();
  const navigate = useNavigate();
  const {
    data: userDetails,
    loading: userDetailsLoading,
    error: userDetailsError,
  } = useQuery<UserDetails, UserDetailsVariables>(getUser, {
    variables: {
      login: login ?? "",
    },
  });
  const {
    data: viewerDetails,
    loading: viewerDetailsLoading,
    error: viewerDetailsError,
  } = useQuery<ViewerDetails>(getAuthUser);

  const { user } = userDetails || {};

  useEffect(() => {
    if (!getCookie("github_token")) {
      navigate("/");
    } else {
      navigate("/profile/nokiusz");
    }
  }, [navigate]);

  const defaultUserAvatar =
    "https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg";

  const logout = () => {
    removeCookie("github_token");
    navigate("/");
  };
  return (
    <>
      <TopBar />
      <Container>
        <Avatar src={user?.avatarUrl || defaultUserAvatar} alt="user avatar" />
        <Title>{user?.name}</Title>
        <SecondaryText>@{user?.login}</SecondaryText>
        <Text>{user?.bio}</Text>
        <Followers>
          <AiOutlineTeam />
          {`${user?.followers.totalCount} ${t("profile.followers")} - ${
            user?.following.totalCount
          } ${t("profile.following")}`}
        </Followers>
        {user?.location && (
          <Location>
            <AiOutlineEnvironment />
            {user.location}
          </Location>
        )}
        {user?.company && (
          <Company>
            <AiOutlineBank />
            {user.company}
          </Company>
        )}

        <CreatedDate>{user?.createdAt.slice(0, 10)}</CreatedDate>
        <button type="button" onClick={logout}>
          logout
        </button>
      </Container>
    </>
  );
};

export default Profile;
