import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'dfb-watch-page',
  templateUrl: './watch-page.component.html',
  styleUrls: ['./watch-page.component.scss'],
})

export class WatchPageComponent {
  tracks$ = this.api.getAllTracks();
  
  constructor(private api: ApiService) {}
}
