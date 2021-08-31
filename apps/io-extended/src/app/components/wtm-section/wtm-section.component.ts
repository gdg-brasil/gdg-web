import { Component, Input } from '@angular/core';
import { Community } from '@gdg-web/api-interfaces';

@Component({
  selector: 'iox-wtm-section',
  templateUrl: './wtm-section.component.html'
})
export class WtmSectionComponent {
  @Input() communities!: Community[] | null;
}
