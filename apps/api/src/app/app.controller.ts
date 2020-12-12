import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('headlines')
  getHeadlines(){
    return this.appService.getHeadlines();
  }
  @Get('category')
  getCategorized(category){
    return this.appService.getCategorized(category);
  }
}
