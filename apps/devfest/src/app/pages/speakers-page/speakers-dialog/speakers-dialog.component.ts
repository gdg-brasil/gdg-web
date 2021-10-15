import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dfb-speakers-dialog',
  templateUrl: './speakers-dialog.component.html',
  styleUrls: ['./speakers-dialog.component.scss'],
})
export class SpeakersDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
