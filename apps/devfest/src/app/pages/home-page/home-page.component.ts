import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'dfb-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  speakers$ = this.api.getAllSpeakers();
  links$ = this.api.getAllLinks();
  mapInfo$ = this.api.getMapInfo();
  track$ = this.api.getVideoInfo();
  galeryImages$ = this.api.getAllGaleryImages();
  sponsors$ = this.api.getAllSponsors();

  constructor(private api: ApiService) { }
}
