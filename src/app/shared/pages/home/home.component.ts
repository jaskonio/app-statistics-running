import { Component, OnInit } from '@angular/core';
import { ILeague } from '../../interfaces/ILeague';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/config/app.config';
import { RedolatTeamService } from '../../service/redolat-team.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  leagues: ILeague[] = [];

  constructor(private router: Router,
              private redolatTeamService: RedolatTeamService) {
                this.leagues = this.loadLeagues();
              }

  ngOnInit() {
  }

  onSelect(league: ILeague) {
    this.router.navigateByUrl( AppConfig.routes.rankings + '/' + league.id);
  }

  loadLeagues(): ILeague[] {
    return this.redolatTeamService.GetLeague();
  }
}
