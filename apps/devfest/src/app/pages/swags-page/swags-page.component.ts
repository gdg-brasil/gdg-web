import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'dfb-swags-page',
  templateUrl: './swags-page.component.html',
  styleUrls: ['./swags-page.component.scss']
})
export class SwagsPageComponent {
  title: string = 'Estou com Sorte!';
  swags$ = this.api.getAllSwags();

  constructor(
    private api: ApiService
  ) {}

  navigateTo(link: string): void {
    window.open( link, '_blank');
  }
}
