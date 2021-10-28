import { Component, Input, OnChanges } from '@angular/core';
import { Track } from '../../services/api.model';

@Component({
  selector: 'dfb-tracks-section',
  templateUrl: './tracks-section.component.html',
  styleUrls: ['./tracks-section.component.scss'],
})
export class TracksSectionComponent implements OnChanges {
  @Input() tracks!: Track[] | null;
  selectedTrack: Track | null = null;

  ngOnChanges() {
    if(this.tracks?.length) {
      this.selectedTrack = this.tracks[0];
    }
  }

  isSelectedTrack(track: Track): boolean {
    if (!this.tracks?.length) {
      return false;
    }
    return this.tracks?.some(t => t.name === track.name);
  }

  selectTrack(event: Event, track: Track): void {
    event.preventDefault();

    this.selectedTrack = track;
  }
}
