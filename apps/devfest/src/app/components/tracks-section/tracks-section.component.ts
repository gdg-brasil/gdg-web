import { Component, Input, OnChanges } from '@angular/core';
import { Track } from '../../services/api.model';
import { SanitizeService } from '../../services/sanitize.service';

@Component({
  selector: 'dfb-tracks-section',
  templateUrl: './tracks-section.component.html',
  styleUrls: ['./tracks-section.component.scss'],
})
export class TracksSectionComponent implements OnChanges {
  @Input() tracks!: Track[] | null;
  selectedTrack: Track | null = null;

  constructor(private sanitizer: SanitizeService) {}

  ngOnChanges() {
    if(this.tracks?.length) {
      this.selectedTrack = this.tracks[0];
    }
  }

  isSelectedTrack(track: Track): boolean {
    return track.name === this.selectedTrack?.name;
  }

  selectTrack(event: Event, track: Track): void {
    event.preventDefault();

    this.selectedTrack = track;
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }

  get safeYoutubeChatUrl() {
    if (!this.selectedTrack){
      return '';
    }

    return this.sanitizer.safeYoutubeChatUrl(this.selectedTrack?.embedded_code);
  }
}
