export interface AllGitHubCommitsOutput {
  sha: string;
  node_id: string;
  commit: {
    author: {
      date: Date;
    };
    message: string;
  };
  author: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  };
}
