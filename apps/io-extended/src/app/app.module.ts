import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages';
import { 
  AndroidSectionComponent,
  GdgSectionComponent,
  HeaderComponent,
  MainSectionComponent,
  OrganizersSectionComponent,
  SubscriptionSectionComponent,
  WtmSectionComponent
} from './components';

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
