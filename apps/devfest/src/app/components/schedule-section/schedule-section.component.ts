import { Component, Input } from '@angular/core';
import { Track, Schedule } from '../../services/api.model';

@Component({
  selector: 'dfb-schedule-section',
  templateUrl: './schedule-section.component.html',
  styleUrls: ['./schedule-section.component.scss'],
})
export class ScheduleSectionComponent {
  @Input() tracks!: Track[] | null;
}
