import { Component, Input } from '@angular/core';
import { Organizer } from '@gdg-web/api-interfaces';

@Component({
  selector: 'iox-organizers-section',
  templateUrl: './organizers-section.component.html'
})
export class OrganizersSectionComponent {
  @Input() organizers!: Organizer[] | null;
}
