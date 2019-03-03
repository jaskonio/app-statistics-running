import { HomeComponent } from './shared/pages/home/home.component';
import { Error404Component } from './shared/pages/error404/error404.component';
import { AppConfig } from './config/app.config';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: AppConfig.routes.rankings, loadChildren: './modules/rankings/rankings.module#RankingsModule'},
  { path: AppConfig.routes.error404, component: Error404Component},

  { path: '', component: HomeComponent, pathMatch: 'full'},

  // otherwise redirect to 404
  { path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
