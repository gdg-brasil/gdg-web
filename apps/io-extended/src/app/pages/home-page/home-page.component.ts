import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Community, Organizer } from '@gdg-web/api-interfaces';

@Component({
  selector: 'iox-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  organizers$ = this.http.get<Organizer[]>('/api/organizers');
  wtmChapters$ = this.http.get<Community[]>('/api/communities/wtm');
  gdgChapters$ = this.http.get<Community[]>('/api/communities/gdg');
  backOfficeData$ = this.http.get('https://devfest-backoffice.000webhostapp.com/wp-json/wp/v2/media?parent=14');

  constructor(private http: HttpClient) {}
}
