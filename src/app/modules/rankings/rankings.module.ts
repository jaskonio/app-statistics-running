import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingsRoutingModule } from './rankings-routing.module';
import { RankingDetailComponent } from './pages/ranking-detail/ranking-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    RankingDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RankingsRoutingModule
  ]
})
export class RankingsModule { }
