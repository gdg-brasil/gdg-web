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
    map((dates: TrackDate[]): Track[] => {
      const today = new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate(), new Date().getUTCHours(), new Date().getMinutes(), 0));
      console.log(today.getHours());
      console.log(today.getDate());
      
      if (today.getDate() === 4) {
        return dates[0].tracks;
      }

      if (today.getDate() === 5) {
        return dates[1].tracks;
      }

      if (today.getDate() === 6) {
        return dates[2].tracks;
      }

      if (today.getDate() === 7) {
        return dates[3].tracks;
      }

      return [];
    })
  );
  
  constructor(private api: ApiService) {}
}
