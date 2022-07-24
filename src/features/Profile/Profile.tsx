import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import {
  AiOutlineTeam,
  AiOutlineEnvironment,
  AiOutlineBank,
} from "react-icons/ai/index";
import { useTranslation } from "react-i18next";

import { getUser } from "graphql/queries/user";
import { UserDetailsVariables, UserDetails, ViewerDetails } from "types";

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
import { getAuthUser } from "graphql/queries/viewer";

const Profile = (): JSX.Element => {
  const { t } = useTranslation();
  const { login } = useParams();
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
  console.log("viewer", viewerDetails);
  const { user } = userDetails || {};
  const defaultUserAvatar =
    "https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg";
  return (
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
    </Container>
  );
};

export default Profile;
