import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Track } from '../../services/api.model';

@Component({
  selector: 'dfb-video-watchpage-section',
  templateUrl: './video-watchpage-section.component.html',
  styleUrls: ['./video-watchpage-section.component.scss'],
})
export class VideoWatchpageSectionComponent {
  @Input() tracks!: Track[] | null;

  constructor(private sanitizer: DomSanitizer) {}

  safeUrl(embedded_code: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${embedded_code}`);
  }

}
