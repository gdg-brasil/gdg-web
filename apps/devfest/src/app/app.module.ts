import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@gdg-web/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  HomePageComponent,
  SchedulePageComponent,
  SpeakersPageComponent, SwagsPageComponent,
  TeamPageComponent,
  WatchPageComponent
} from './pages';
import {
  AboutSectionComponent,
  FooterComponent,
  GallerySectionComponent,
  HeaderComponent,
  HeroSectionComponent,
  LinksSectionComponent,
  MapSectionComponent,
  OrganizersSectionComponent,
  SpeakersSectionComponent,
  VideoSectionComponent,
  VideoTrackSectionComponent,
  TracksSectionComponent,
  ScheduleSectionComponent,
  SponsorsSectionComponent,
} from './components';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ScheduleDialogComponent } from './pages/schedule-page/schedule-dialog/schedule-dialog.component';
import { SpeakersDialogComponent } from './pages/speakers-page/speakers-dialog/speakers-dialog.component';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  AboutSectionComponent,
  GallerySectionComponent,
  HeroSectionComponent,
  MapSectionComponent,
  OrganizersSectionComponent,
  SpeakersSectionComponent,
  VideoSectionComponent,
  VideoTrackSectionComponent,
  LinksSectionComponent,
  TracksSectionComponent,
  ScheduleSectionComponent,
  LinksSectionComponent,
  SponsorsSectionComponent,
  ScheduleDialogComponent,
  SpeakersDialogComponent
]

const PAGES = [
  HomePageComponent,
  SchedulePageComponent,
  SpeakersPageComponent,
  TeamPageComponent,
  WatchPageComponent,
  SwagsPageComponent,
]

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    PAGES,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    ServiceWorkerModule.register('safety-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
