import { Component, Input } from '@angular/core';
import { GaleryImage } from '../../services/api.service';

@Component({
  selector: 'dfb-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.scss'],
})
export class GallerySectionComponent {
  @Input() galeryImages!: GaleryImage[] | null;

  /*images = [
    'gallery-1.jpg',
    'gallery-2.jpg',
    'gallery-3.jpg',
    'gallery-4.jpg',
    'gallery-5.jpg',
    'gallery-6.jpg',
    'gallery-7.jpg',
    'gallery-8.jpg'
  ]*/
}
