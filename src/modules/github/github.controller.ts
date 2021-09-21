import { Controller, Get } from '@nestjs/common';
import { AllGitHubCommitsDto } from 'src/modules/github/dtos/all-github-commits.dto';
import { GetAllCommits } from 'src/modules/github/use-cases/get-all-commits';

@Controller('github')
export class GitHubController {
  constructor(private getAllCommits: GetAllCommits) {}
  @Get()
  async executeGetAllCommitsByRepo(): Promise<AllGitHubCommitsDto[]> {
    const commits = await this.getAllCommits.byRepo('fulltimeforce-be');
    console.log('commits', commits);
    return commits.map((commit) => {
      return {
        id: commit.sha,
        name: commit.author.login,
        message: commit.commit.message,
        avatarUrl: commit.author.avatar_url,
        profileUrl: commit.author.url,
      };
    });
  }
}
