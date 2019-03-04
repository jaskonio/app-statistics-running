import { AppConfig } from './../../../config/app.config';
import { Component, OnInit, Input } from '@angular/core';
import { ILeague } from '../../interfaces/ILeague';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking-card',
  templateUrl: './ranking-card.component.html',
  styleUrls: ['./ranking-card.component.css']
})
export class RankingCardComponent implements OnInit {

  @Input() league: ILeague;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  seeHeroDetails(id: number): void {
    this.router.navigate([AppConfig.routes.rankings + '/' + id]);
  }
}
