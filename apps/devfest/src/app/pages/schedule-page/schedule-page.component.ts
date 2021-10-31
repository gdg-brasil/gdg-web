import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Track } from '../../services/api.model';
import { ApiService } from '../../services/api.service';
import { ScheduleDialogComponent } from './schedule-dialog/schedule-dialog.component';

@Component({
  selector: 'dfb-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.scss'],
})
export class SchedulePageComponent {
  title: string = 'Agenda';
  dates$ = this.api.getAllTracksByDate();

  constructor(
    private api: ApiService,
    private dialog: MatDialog
  ) {}

  openTalkDialog(track: Track) {
    this.dialog.open(ScheduleDialogComponent, {
      data: track,
      autoFocus: false
    })
  }
}
