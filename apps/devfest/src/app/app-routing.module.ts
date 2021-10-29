import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeakersPageComponent, TeamPageComponent, PrivacyPolicyPageComponent } from './pages';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'organizacao', component: TeamPageComponent },
  { path: 'politica-privacidade', component: PrivacyPolicyPageComponent },
  { path: 'palestrantes', component: SpeakersPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
