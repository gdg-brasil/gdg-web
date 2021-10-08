import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'dfb-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss'],
})
export class TeamPageComponent {
  organizers$ = this.api.getAllOrganizers();

  constructor(private api: ApiService) {}
}
