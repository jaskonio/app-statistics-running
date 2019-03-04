import { RankingDetailComponent } from './pages/ranking-detail/ranking-detail.component';
import { RankingListComponent } from './pages/ranking-list/ranking-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RankingListComponent},
  { path: ':id', component: RankingDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingsRoutingModule { }
