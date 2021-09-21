import { Controller, Get } from '@nestjs/common';

@Controller()
export class GitHubController {
  @Get()
  getHello(): string {
    return 'hello world';
  }
}
