import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'dfb-privacy-policy-page',
    templateUrl: './privacy-policy-page.component.html',
    styleUrls: ['./privacy-policy-page.component.scss'],
})
export class PrivacyPolicyPageComponent {
    title: string = 'Política de Privacidade';
}
