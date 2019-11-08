import { Component, OnInit } from '@angular/core';

import { RankingData } from 'src/app/shared/model/rankingData';

@Component({
  selector: 'app-ranking-detail',
  templateUrl: './ranking-detail.component.html',
  styleUrls: ['./ranking-detail.component.css']
})
export class RankingDetailComponent implements OnInit {

  runnersData: RankingData[];
  displayedColumns: string[];
  columnDefs = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price'}
];
  constructor() { }

  ngOnInit() {
    this.runnersData = this.GetRunners();
    this.displayedColumns = this.DisplayedColumns();
  }

  DisplayedColumns(): string[] {
    const columns = [
      'position',
      'points',
      'photo_url',
      'full_name',
      'postion_lasted',
      'num_top_five',
      'num_participations',
      'best_position',
      'num_best_position',
      'circuito_poinst',
      'circuito_general_position',
      'circuito_postion_lasted',
      'circuito_best_pace',
      'circuito_best_position',
      'circuito_num_best_position',
      'circuito_race_id',
    ];

    return columns;
  }

  GetRunners(): RankingData[] {
    const runners: RankingData[] = [];

    const runner: RankingData = {
      position: 1,
      points: 1,
      photo_url: 'test',
      full_name: 'test',
      postion_lasted: 1,
      num_top_five: 1,
      num_participations: 1,
      best_position: 1,
      num_best_position: 1,
      // circuito
      circuito_poinst: 1,
      circuito_general_position: 1,
      circuito_postion_lasted: 1,
      circuito_best_pace: 'test',
      circuito_best_position: 1,
      circuito_num_best_position: 1,
      // info adicional, de momento no visible en la vista
      circuito_race_id: 1,
    };

    runners.push(runner);

    return runners;
  }

}

