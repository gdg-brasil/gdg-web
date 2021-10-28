import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Track } from '../../services/api.model';

@Component({
  selector: 'dfb-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.scss'],
})
export class VideoSectionComponent {
  @Input() track!: Track | null;

  constructor(private sanitizer: DomSanitizer) {}

  get safeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.track?.embedded_code}`);
  }
}
