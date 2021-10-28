import { Component, Input } from '@angular/core';
import { Track } from '../../services/api.model';

@Component({
  selector: 'dfb-tracks-section',
  templateUrl: './tracks-section.component.html',
  styleUrls: ['./tracks-section.component.scss'],
})
export class TracksSectionComponent {
  @Input() tracks!: Track[] | null;
}
