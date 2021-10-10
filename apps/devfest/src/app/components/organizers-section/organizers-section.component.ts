import { Component, Input } from '@angular/core';

@Component({
  selector: 'dfb-organizers-section',
  templateUrl: './organizers-section.component.html',
  styleUrls: ['./organizers-section.component.scss'],
})
export class OrganizersSectionComponent {
  @Input() organizers!: any[] | null;
  title: string = 'Organizadores';
}
