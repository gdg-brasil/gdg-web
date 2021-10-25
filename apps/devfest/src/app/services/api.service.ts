import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap, } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Link, MapInfo, Organizer, Speaker, VideoInfo, GaleryInfo } from './api.model';



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

  getVideoInfo(): Observable<VideoInfo> {
    return this.http.get<any[]>(`${this.baseUrl}/videos`).pipe(
      switchMap((data: any[]): Observable<VideoInfo> => {
        const videoInfo = data[0];
        const { acf } = videoInfo;
        return of({ ...acf } as VideoInfo);
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



  // getOrganizerById(id: number): Observable<any> {
  //   return this.http.get<any[]>(`${this.baseUrl}/media?parent=${id}`);
  // }

  // getAllSpeakers(): Observable<Speaker[]> {
  //   return of(this.data.speakers);
  // }



  // private data: Data = {
  //   organizers: [{
  //     id: 14,
  //     date: "2021-08-29T21:34:23",
  //     date_gmt: "2021-08-30T00:34:23",
  //     guid: {
  //       rendered: "https://devfest-backoffice.000webhostapp.com/?post_type=organizadores&#038;p=14"
  //     },
  //     modified: "2021-08-29T21:59:41",
  //     modified_gmt: "2021-08-30T00:59:41",
  //     slug: "14",
  //     status: "publish",
  //     type: "organizers",
  //     link: "https://devfest-backoffice.000webhostapp.com/organizers/14/",
  //     title: {
  //       rendered: "Fernando Sedrez"
  //     },
  //     content: {
  //       rendered: "",
  //       protected: false
  //     },
  //     featured_media: 0,
  //     template: "",
  //     _links: {
  //       self: [{ href: "https://devfest-backoffice.000webhostapp.com/wp-json/wp/v2/organizers/14" }],
  //       collection: [{ href: "https://devfest-backoffice.000webhostapp.com/wp-json/wp/v2/organizers" }],
  //       about: [{ href: "https://devfest-backoffice.000webhostapp.com/wp-json/wp/v2/types/organizers" }],
  //       curies: [{ name: "wp", href: "https://api.w.org/{rel}", templated: true }]
  //     }
  //   }],
  //   speakers: [
  //     {
  //       name: 'Aleksander Piotrowski',
  //       photoUrl: 'https://storage.googleapis.com/hoverboard-experimental.appspot.com/images/people/optim/aleksander_piotrowski.jpg',
  //       bio: 'Became a mobile developer after long run as a backend developer. Because of age, holding senior positions from the day one as an Android programmer. Serial hackathon winner, or at least contender ;-)',
  //       company: 'Code Monkey, Applause',
  //       companyLogoUrl: 'https://storage.googleapis.com/hoverboard-experimental.appspot.com/images/logos/gdg-lviv.svg',
  //       country: 'Warsaw, Poland',
  //       socials: [
  //         {
  //           name: 'twitter',
  //           icon: 'twitter',
  //           link: 'https://twitter.com/pelotasplus'
  //         },
  //         {
  //           name: 'facebook',
  //           icon: 'facebook',
  //           link: 'https://facebook.com/pelotasplus'
  //         },
  //         {
  //           name: 'linkedin',
  //           icon: 'linkedin',
  //           link: 'https://www.linkedin.com/pelotasplus'
  //         },
  //         {
  //           name: 'instagram',
  //           icon: 'instagram',
  //           link: 'https://www.instagram.com/pelotasplus'
  //         }
  //       ]
  //     },
  //     {
  //       name: 'Adrian Kajda',
  //       photoUrl: 'https://storage.googleapis.com/hoverboard-experimental.appspot.com/images/people/optim/adrian_kajda.jpg',
  //       bio: 'Creator of Fuelio app. Fuelio was his hooby project started in 2012. Three years later the app was aquired by Sygic.',
  //       company: 'Product Manager/Developer, Sygic',
  //       companyLogoUrl: 'https://storage.googleapis.com/hoverboard-experimental.appspot.com/images/logos/gdg-lviv.svg',
  //     },
  //     {
  //       name: 'Jana Moudra',
  //       photoUrl: 'https://storage.googleapis.com/hoverboard-experimental.appspot.com/images/people/optim/jana_moudra.jpg',
  //       bio: 'GDE (Google Developer Expert) for Dart. Jana is a passionate developer and modern web and mobile technology evangelist. She is an event organiser for GDG Prague, where she arranges events for developers including public lectures, code labs and hackathons – covering a wide range of subjects including technologies Dart or Android. She loves to help other developers and spread the knowledge about these technologies. Jana co-founded a company called Juicymo, where she works on juicy apps and products and teaches at Unicorn College.',
  //       company: 'Co-Founder, Juicymo',
  //       companyLogoUrl: 'https://storage.googleapis.com/hoverboard-experimental.appspot.com/images/logos/gdg-lviv.svg',
  //       title: 'Dart Google Developer Expert, Google Developers Group Prague',
  //       country: 'Prague, Czech Republic',
  //       socials: [
  //         {
  //           name: 'google+',
  //           icon: 'google+',
  //           link: 'https://plus.google.com/+JanaMoudrá/posts'
  //         },
  //         {
  //           name: 'twitter',
  //           icon: 'twitter',
  //           link: 'https://twitter.com/Janamou'
  //         },
  //         {
  //           name: 'linkedin',
  //           icon: 'linkedin',
  //           link: 'https://cz.linkedin.com/in/janamoudra'
  //         },
  //         {
  //           name: 'github',
  //           icon: 'github',
  //           link: 'https://www.github.com/Janamou'
  //         }
  //       ],
  //       badges: [
  //         {
  //           name: 'gde',
  //           link: 'https://developers.google.com/experts/people/jana-moudr.html',
  //           description: 'Dart Google Developer Expert'
  //         },
  //         {
  //           name: 'google',
  //           link: 'https://www.linkedin.com/in/jozefvodicka',
  //           description: 'Developer Relations Regional Lead'
  //         }
  //       ]
  //     },
  //     // {
  //     //   name: 'Jozef Vodicka',
  //     //   photoUrl: 'https://storage.googleapis.com/hoverboard-experimental.appspot.com/images/people/optim/jozef_vodicka.jpg',
  //     //   bio: 'Right now he is a passionate Googler helping developers and companies in South CEE to be more successful and profitable. He co-founded and lead several StartUPs such as Venzeo.com, TrashOut.ngo, Matura.sk and Stuzkova.EU. He is TEDx speaker, Slovak Forbes 30-under-30, IT auditor for AIESEC International & TOP 5 Student Entrepreneurs in Slovakia. He gets things done.',
  //     //   company: '',
  //     //   companyLogoUrl: 'https://storage.googleapis.com/hoverboard-experimental.appspot.com/images/logos/gdg-lviv.svg',
  //     //   country: 'Prague, Czech Republic',
  //     //   title: 'Developer Relations Regional Lead',
  //     //   badges: [
  //     //     {
  //     //       name: 'google',
  //     //       link: 'https://www.linkedin.com/in/jozefvodicka',
  //     //       description: 'Developer Relations Regional Lead'
  //     //     }
  //     //   ]
  //     // },
  //   ]
  // };
}
