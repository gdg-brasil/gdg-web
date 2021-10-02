import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'dfb-speakers-page',
  templateUrl: './speakers-page.component.html',
  styleUrls: ['./speakers-page.component.scss'],
})
export class SpeakersPageComponent {
  speakers$ = this.api.getAllSpeakers();

  constructor(private api: ApiService) {}
}
