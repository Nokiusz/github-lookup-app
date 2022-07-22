export interface UserDetails {
  user: {
    avatarUrl: string;
    login: string;
    name: string;
    bio: string;
    location: string;
    company: string;
    createdAt: Date;
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
