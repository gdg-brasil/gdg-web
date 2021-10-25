import { Component, Input } from '@angular/core';
import { GaleryInfo } from '../../services/api.model';

@Component({
  selector: 'dfb-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.scss'],
})
export class GallerySectionComponent {
  @Input() galeryImages!: GaleryInfo[] | null;
}
