export interface UserDetails {
  user: {
    avatarUrl: string;
    login: string;
    name: string;
    bio: string;
    location: string;
    company: string;
    createdAt: string;
    followers: {
      totalCount: number;
    };
    following: {
      totalCount: number;
    };

    repositories: {
      totalCount: number;
    };
  };
}
export interface UserDetailsVariables {
  login: string;
}

export interface ViewerDetails {
  [key: string]: {
    avatarUrl: string;
    login: string;
    name: string;
    bio: string;
    location: string;
    company: string;
    createdAt: string;
    followers: {
      totalCount: number;
    };
    following: {
      totalCount: number;
    };

    repositories: {
      totalCount: number;
    };
  };
}
