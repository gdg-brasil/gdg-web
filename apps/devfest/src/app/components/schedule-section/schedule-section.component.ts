import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Talk, TrackDate } from '../../services/api.model';

@Component({
  selector: 'dfb-schedule-section',
  templateUrl: './schedule-section.component.html',
  styleUrls: ['./schedule-section.component.scss'],
})
export class ScheduleSectionComponent {
  @Input() dates!: TrackDate[] | null;
  @Output() show = new EventEmitter<Talk>();

  openDialog(event: Event, talk: Talk) {
    event.preventDefault();
    console.log(talk);
    if (talk.speakers[0]?.name) {
      this.show.emit(talk);
    }
  }
}
