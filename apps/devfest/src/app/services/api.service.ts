import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap, reduce, } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Link, MapInfo, Organizer, Speaker, GaleryInfo, SponsorsByCategory, Sponsor, Track, Schedule } from './api.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllSpeakers(): Observable<Speaker[]> {
    return this.http.get<any[]>(`${this.baseUrl}/speakers?per_page=50`).pipe(
      map((data: any[]): Speaker[] => {
        return data.map(speaker => {
          const { acf } = speaker;
          const { photo } = acf;
          return { ...acf, photoUrl: photo.url } as Speaker;
        });
      })
    );
  }

  getAllLinks(): Observable<Link[]> {
    return this.http.get<any[]>(`${this.baseUrl}/links`).pipe(
      map((data: any[]): Link[] => {
        return data.map(link => {
          const { acf } = link;
          return { ...acf } as Link;
        })
      })
    );
  }

  getAllOrganizers(): Observable<Organizer[]> {
    // return this.http.get<any[]>(`${this.baseUrl}/organizers?per_page=50`).pipe(
    return this.http.get<any[]>(`${this.baseUrl}/organizers?per_page=50`).pipe(
      map((data: any[]): Organizer[] => {
        return data.map(organizer => {
          const { acf } = organizer;
          const { photo, chapter } = acf;
          let gdg = '';
          if (chapter) {
            gdg = chapter[0].post_title;
          }
          return { ...acf, photoUrl: photo.url, gdg } as Organizer;
        }).sort((a, b) => a.gdg.localeCompare(b.gdg));
      })
    );
  }

  getMapInfo(): Observable<MapInfo> {
    return this.http.get<any[]>(`${this.baseUrl}/maps`).pipe(
      switchMap((data: any[]): Observable<MapInfo> => {
        const mapInfo = data[0];
        const { image, title, description } = mapInfo.acf;
        return of({ ...image, title, description });
      })
    );
  }

  getVideoInfo(): Observable<Track> {
    return this.http.get<any[]>(`${this.baseUrl}/videos`).pipe(
      switchMap((data: any[]): Observable<Track> => {
        const videoInfo = data[0];
        const { acf } = videoInfo;
        return of({ ...acf } as Track);
      })
    );
  }

  getAllGaleryImages(): Observable<GaleryInfo[]> {
    return this.http.get<any[]>(`${this.baseUrl}/gallery`).pipe(
      map((data: any[]): GaleryInfo[] => {
        return data.map((_data) => {

          const url = _data?.acf?.image?.sizes?.large;
          return { url } as GaleryInfo;
        }).map(el => el);
      }));
  }

  getAllTracks(): Observable<Track[]> {
    return this.http.get<any[]>(`${this.baseUrl}/tracks?per_page=50`).pipe(
      map((data: any[]): Track[] => {
        return data.map(track => {
          const { acf } = track;
          const { name, date, embedded_code, scheduler } = acf;
          
          const schedule = scheduler.map((s: any): Schedule => {
              const { start, end, speaker, deck } = s;
              const speakerName = speaker[0]?.acf?.name;
              const lectureTitle = deck[0]?.post_title;
  
              return {start, end, speakerName, lectureTitle} as Schedule
          });
          
          return { name, date, embedded_code, schedule } as Track;
        });
      })
    );
  }

  getAllSponsors(): Observable<SponsorsByCategory[]> {
    return this.http.get<any[]>(`${this.baseUrl}/sponsors`).pipe(
      map((data: any[],): SponsorsByCategory[] => {
        return data.reduce((_acc: SponsorsByCategory[], _actual) => {
          const _temp = _actual?.acf;
          const _sponsor = {
            name: _temp?.name,
            url: _temp?.site,
            logoUrl: _temp?.logo?.sizes?.medium,
            category: _temp?.type_name
            // sponsor_type
          } as Sponsor;

          const _categoryFinded = _acc.findIndex((_category: SponsorsByCategory) => {
            return _category.name == _sponsor.category
          });

          if (_categoryFinded > -1) {
            _acc[_categoryFinded].sponsors.push(_sponsor)
          } else {
            _acc.push({
              name: _sponsor.category,
              order: _temp.sponsor_type,
              sponsors: [_sponsor],
            })
          }
          console.log('acc', _acc)
          return _acc;
        }, new Array<SponsorsByCategory>()).sort((el, ol) => el.order - ol.order).filter((el: SponsorsByCategory) => el.name != 'Todos');
      }));
  }
}
