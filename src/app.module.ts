import { Module } from '@nestjs/common';
import { GitHubModule } from 'src/modules/github/github.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [GitHubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
