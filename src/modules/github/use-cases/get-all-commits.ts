import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AllGitHubCommitsOutput } from 'src/modules/github/dtos/all-github-commits.api.output';

@Injectable()
export class GetAllCommits {
  async byRepo(repo: string): Promise<AllGitHubCommitsOutput[]> {
    const url = `https://api.github.com/repos/JuanPedroPontVerges/${repo}/commits`;
    try {
      const commits = await axios.get(url);
      return commits.data as AllGitHubCommitsOutput[];
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  }
}
