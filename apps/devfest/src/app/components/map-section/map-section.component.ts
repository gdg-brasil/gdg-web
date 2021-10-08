import { Component, Input } from '@angular/core';
import { MapInfo } from '../../services/api.service';

@Component({
  selector: 'dfb-map-section',
  templateUrl: './map-section.component.html',
  styleUrls: ['./map-section.component.scss'],
})
export class MapSectionComponent {
  @Input() mapInfo!: MapInfo | null;
}
