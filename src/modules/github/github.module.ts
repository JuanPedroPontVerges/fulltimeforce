import { Module } from '@nestjs/common';
import { GitHubController } from 'src/modules/github/github.controller';
import { GetAllCommits } from 'src/modules/github/use-cases/get-all-commits';

@Module({
  imports: [],
  controllers: [GitHubController],
  providers: [GetAllCommits],
})
export class GitHubModule {}
