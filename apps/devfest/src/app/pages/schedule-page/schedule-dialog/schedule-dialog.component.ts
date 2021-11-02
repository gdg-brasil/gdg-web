import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Talk } from '../../../services/api.model';

@Component({
  selector: 'dfb-schedule-dialog',
  templateUrl: './schedule-dialog.component.html',
  styleUrls: ['./schedule-dialog.component.scss'],
})
export class ScheduleDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Talk) {}
}
