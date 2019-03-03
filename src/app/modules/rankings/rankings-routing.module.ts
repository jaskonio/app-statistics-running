import { RankingListComponent } from './pages/ranking-list/ranking-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RankingListComponent},
  { path: ':id', component: RankingListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingsRoutingModule { }
