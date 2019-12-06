import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RankingCardComponent } from './components/ranking-card/ranking-card.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from './modules/material.module';
import { TableBaseComponent } from './components/tableBase/tableBase.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    RankingCardComponent,
    Error404Component,
    HomeComponent,
    TableBaseComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    MatTableModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    FooterComponent,
    HeaderComponent,
    RankingCardComponent,
    Error404Component,
    HomeComponent,
    TableBaseComponent
  ]
})
export class SharedModule { }
