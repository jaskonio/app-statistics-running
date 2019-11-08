import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RankingCardComponent } from './components/ranking-card/ranking-card.component';
import { RankingLoadingComponent } from './components/ranking-loading/ranking-loading.component';
import { LoadingPlaceholderComponent } from './components/loading-placeholder/loading-placeholder.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from './modules/material.module';
import { TableBaseComponent } from './components/tableBase/tableBase.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    RankingCardComponent,
    RankingLoadingComponent,
    LoadingPlaceholderComponent,
    SpinnerComponent,
    Error404Component,
    HomeComponent,
    TableBaseComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    MatTableModule,
  ],
  exports: [
    MaterialModule,
    FooterComponent,
    HeaderComponent,
    RankingCardComponent,
    RankingLoadingComponent,
    LoadingPlaceholderComponent,
    SpinnerComponent,
    Error404Component,
    HomeComponent,
    TableBaseComponent
  ]
})
export class SharedModule { }
