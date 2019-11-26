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
    this.runnersData = this.GetRunners();
    this.columnDefs = this.ColumnsDefinitions();
  }

  GetRunners(): RankingData[] {
    return this.redolatTeamService.GetRankinsFromLeague(this.leagueId);
  }

  ColumnsDefinitions(): { headerName: string; field: string; }[] {
    return this.redolatTeamService.GetColumnsDefinition();
  }
}

