import { Component, OnInit } from '@angular/core';

import { RankingData } from 'src/app/shared/model/rankingData';
import { RedolatTeamService } from 'src/app/shared/service/redolat-team.service';

@Component({
  selector: 'app-ranking-detail',
  templateUrl: './ranking-detail.component.html',
  styleUrls: ['./ranking-detail.component.css']
})
export class RankingDetailComponent implements OnInit {

  runnersData: RankingData[];
  columnDefs = [];
  leagueId = 0;

  constructor(private redolatTeamService: RedolatTeamService) {
    this.leagueId = 1;
  }

  ngOnInit() {
    this.GetRunners();
    this.ColumnsDefinitions();
  }

  GetRunners() {
    return this.redolatTeamService.GetRankinsFromLeague(this.leagueId).subscribe( (resp: RankingData[]) => {
      this.runnersData = resp;
    });
  }

  ColumnsDefinitions() {
    this.redolatTeamService.GetColumnsDefinition().subscribe( (resp: { headerName: string; field: string; }[] ) => {
      this.columnDefs = resp;
    });
  }
}
