export interface ViewerDetails {
  user: {
    avatarUrl: string;
    login: string;
    name: string;
    location: string;
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

export interface ViewerDetailsVars {
  privacy: string;
}

export interface UserDetailsVars {
  login: string;
}
