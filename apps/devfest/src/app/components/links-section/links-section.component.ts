import { Component, Input } from '@angular/core';
import { Link } from '../../services/api.model';

@Component({
  selector: 'dfb-links-section',
  templateUrl: './links-section.component.html',
  styleUrls: ['./links-section.component.scss'],
})
export class LinksSectionComponent {
  @Input() links!: Link[] | null;
}
