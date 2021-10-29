import { Component, Input } from '@angular/core';
import { SponsorsByCategory } from '../../services/api.model';

@Component({
    selector: 'dfb-sponsors-section',
    templateUrl: './sponsors-section.component.html',
    styleUrls: ['./sponsors-section.component.scss'],
})
export class SponsorsSectionComponent {
    @Input() sponsorsByCategory!: SponsorsByCategory[] | null;
}
