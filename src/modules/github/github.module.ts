import { Module } from '@nestjs/common';
import { GitHubController } from 'src/modules/github/github.controller';

@Module({
  imports: [],
  controllers: [GitHubController],
})
export class GitHubModule {}
