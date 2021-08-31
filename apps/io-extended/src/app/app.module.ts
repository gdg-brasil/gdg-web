import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AndroidSectionComponent, HeaderComponent, OrganizersSectionComponent, SubscriptionSectionComponent } from './components';
import { HomePageComponent } from './pages';
import { GdgSectionComponent } from './components/gdg-section/gdg-section.component';
import { WtmSectionComponent } from './components/wtm-section/wtm-section.component';
import { MainSectionComponent } from './components/main-section/main-section.component';

const COMPONENTS = [
  AndroidSectionComponent,
  GdgSectionComponent,
  HeaderComponent,
  MainSectionComponent,
  OrganizersSectionComponent, 
  SubscriptionSectionComponent,
  WtmSectionComponent,
]

const PAGES = [
  HomePageComponent,
]

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    PAGES,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
