import { Controller, Get, Param } from '@nestjs/common';
import { StaticPageService } from './static-page.service';

@Controller('static-page')
export class StaticPageController {
  constructor(private readonly staticPageService: StaticPageService) {}

  @Get(':slug')
  find(@Param('slug') slug) {
    return this.staticPageService.find(slug);
  }
}
