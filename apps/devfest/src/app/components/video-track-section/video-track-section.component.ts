import { Component, Input } from '@angular/core';
import { Track } from '../../services/api.model';
import { SanitizeService } from '../../services/sanitize.service';

@Component({
  selector: 'dfb-video-track-section',
  templateUrl: './video-track-section.component.html',
  styleUrls: ['./video-track-section.component.scss'],
})
export class VideoTrackSectionComponent {
  @Input() track!: Track | null;

  constructor(private sanitizer: SanitizeService) {}

  get safeUrl() {
    if (!this.track){
      return '';
    }

    return this.sanitizer.safeYoutubeUrl(this.track?.embedded_code);
  }
}
