import { Component, Input } from '@angular/core';
import { Speaker } from '@gdg-web/api-interfaces';

@Component({
  selector: 'dfb-speakers-section',
  templateUrl: './speakers-section.component.html',
  styleUrls: ['./speakers-section.component.scss'],
})
export class SpeakersSectionComponent {
  @Input() speakers!: Speaker[] | null;
  @Input() organizer!: any | null;
  title: string = 'Palestrantes';
}
