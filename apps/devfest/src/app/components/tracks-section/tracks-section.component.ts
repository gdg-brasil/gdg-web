import { Component, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Track } from '../../services/api.model';
import { SanitizeService } from '../../services/sanitize.service';

@Component({
  selector: 'dfb-tracks-section',
  templateUrl: './tracks-section.component.html',
  styleUrls: ['./tracks-section.component.scss'],
})
export class TracksSectionComponent {
  @Input() tracks!: Track[] | null;

  constructor(private sanitizer: SanitizeService) {}

  safeUrl(track: Track): SafeResourceUrl {
    return this.sanitizer.safeYoutubeUrl(track?.embedded_code);
  }

  safeYoutubeChatUrl(track: Track): SafeResourceUrl {
    return this.sanitizer.safeYoutubeChatUrl(track?.embedded_code);
  }
}
