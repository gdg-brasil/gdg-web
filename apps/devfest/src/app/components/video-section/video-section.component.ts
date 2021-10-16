import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoInfo } from '../../services/api.model';

@Component({
  selector: 'dfb-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.scss'],
})
export class VideoSectionComponent {
  @Input() videoInfo!: VideoInfo | null;

  constructor(private sanitizer: DomSanitizer) {}

  get safeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoInfo?.embedded_code}`);
  }
}
