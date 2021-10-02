import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'dfb-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  speakers$ = this.api.getAllSpeakers();
  organizers$ = this.api.getAllOrganizers();
  organizer$ = this.api.getOrganizerById(14);

  constructor(private api: ApiService) {}
}
