import { Component, Input } from '@angular/core';
import { Community } from '@gdg-web/api-interfaces';

@Component({
  selector: 'iox-gdg-section',
  templateUrl: './gdg-section.component.html'
})
export class GdgSectionComponent {
  @Input() communities!: Community[] | null;
}
