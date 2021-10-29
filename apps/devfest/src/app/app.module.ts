import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@gdg-web/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  HomePageComponent,
  SpeakersPageComponent,
  TeamPageComponent
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
  SponsorsSectionComponent
} from './components';

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
  LinksSectionComponent,
  SponsorsSectionComponent
]

const PAGES = [
  HomePageComponent,
  SpeakersPageComponent,
  TeamPageComponent
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
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
