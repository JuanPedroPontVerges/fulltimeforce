export interface AllGitHubCommitsOutput {
  sha: string;
  node_id: string;
  commit: {
    message: string;
  };
  author: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  };
}
