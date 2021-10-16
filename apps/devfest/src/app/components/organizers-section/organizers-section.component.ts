import { Component, Input } from '@angular/core';
import { Organizer } from '../../services/api.model';

@Component({
  selector: 'dfb-organizers-section',
  templateUrl: './organizers-section.component.html',
  styleUrls: ['./organizers-section.component.scss'],
})
export class OrganizersSectionComponent {
  @Input() organizers!: Organizer[] | null;
  title: string = 'Organizadores';
}
