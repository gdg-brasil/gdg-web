import { Controller, Get, Param } from '@nestjs/common';

import { Community, Organizer } from '@gdg-web/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('organizers')
  getOrganizersData(): Organizer[] {
    return this.appService.getOrganizersData();
  }

  @Get('communities/:type')
  getCommunities(@Param('type') type: 'gdg' | 'wtm'): Community[] {
    return this.appService.getCommunitiesData(type);
  }
}
