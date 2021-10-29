import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Speaker } from '../../services/api.model';
import { ApiService } from '../../services/api.service';
import { SpeakersDialogComponent } from './speakers-dialog/speakers-dialog.component';

@Component({
  selector: 'dfb-speakers-page',
  templateUrl: './speakers-page.component.html',
  styleUrls: ['./speakers-page.component.scss'],
})
export class SpeakersPageComponent {
  title: string = 'Palestrantes';
  speakers$ = this.api.getAllSpeakers();

  constructor(
    private api: ApiService,
    private dialog: MatDialog
  ) {}

  openSpeakerDialog(speaker: Speaker) {
    this.dialog.open(SpeakersDialogComponent, {
      data: speaker,
      autoFocus: false
    })
  }
}
