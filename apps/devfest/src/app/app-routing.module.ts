import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent, SpeakersPageComponent, TeamPageComponent, PrivacyPolicyPageComponent, WatchPageComponent, SchedulePageComponent, SwagsPageComponent } from './pages';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'organizacao', component: TeamPageComponent },
  { path: 'politica-privacidade', component: PrivacyPolicyPageComponent },
  { path: 'palestrantes', component: SpeakersPageComponent },
  { path: 'agenda', component: SchedulePageComponent },
  { path: 'assistir', component: WatchPageComponent },
  { path: 'swags', component: SwagsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
