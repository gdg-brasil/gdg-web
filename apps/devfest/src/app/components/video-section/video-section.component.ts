import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'dfb-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.scss'],
})
export class VideoSectionComponent {
  safeURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/H-NeEdpGk6k');

  constructor(private sanitizer: DomSanitizer) {}
}
