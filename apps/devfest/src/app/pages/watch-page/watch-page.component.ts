import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Track, TrackDate } from '../../services/api.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'dfb-watch-page',
  templateUrl: './watch-page.component.html',
  styleUrls: ['./watch-page.component.scss'],
})

export class WatchPageComponent {
  tracks$ = this.api.getAllTracksByDate().pipe(
    map((dates: TrackDate[]): Track[] => dates[1].tracks)
  );
  
  constructor(private api: ApiService) {}
}
