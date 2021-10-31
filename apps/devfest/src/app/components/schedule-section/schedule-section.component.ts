import { Component, Input } from '@angular/core';
import { TrackDate } from '../../services/api.model';

@Component({
  selector: 'dfb-schedule-section',
  templateUrl: './schedule-section.component.html',
  styleUrls: ['./schedule-section.component.scss'],
})
export class ScheduleSectionComponent {
  @Input() dates!: TrackDate[] | null;
}
