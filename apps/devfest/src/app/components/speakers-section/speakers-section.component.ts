import { Component, Input } from '@angular/core';
import { Speaker } from '../../services/api.model';

@Component({
  selector: 'dfb-speakers-section',
  templateUrl: './speakers-section.component.html',
  styleUrls: ['./speakers-section.component.scss'],
})
export class SpeakersSectionComponent {
  @Input() speakers!: Speaker[] | null;
  title: string = 'Palestrantes';

  get featuredSpeakers(): Speaker[] | null {
    return this.speakers?.filter(speaker => speaker.featured) || [];
  }
}
