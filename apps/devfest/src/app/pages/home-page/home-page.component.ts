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
  videoInfo$ = this.api.getVideoInfo();

  constructor(private api: ApiService) {}
  
}
