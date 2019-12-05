import { Injectable } from '@angular/core';
import { ILeague } from '../interfaces/ILeague';
import { RankingData } from '../model/rankingData';

@Injectable({
  providedIn: 'root'
})
export class RedolatTeamService {

  constructor() {
    console.log('RedolatTeamService');
  }

  GetLeague(): ILeague[] {
    console.log('GetLeague');

    const leagues: ILeague[] = [];

    const leagueOne: ILeague = { id: 1, name: 'League 1', urlImg: 'https://images.clarin.com/2015/03/21/SkbZeI9Tml_1256x620.jpg'};
    const leagueTwo: ILeague = { id: 2, name: 'League 2', urlImg: 'https://images.clarin.com/2015/03/21/SkbZeI9Tml_1256x620.jpg'};
    const leagueThree: ILeague = { id: 3, name: 'League 3', urlImg: 'https://images.clarin.com/2015/03/21/SkbZeI9Tml_1256x620.jpg'};

    leagues.push(leagueOne);
    leagues.push(leagueTwo);
    leagues.push(leagueThree);

    return leagues;
  }

  GetRankinsFromLeague(leagueId: number): RankingData[] {

  console.log('GetRankinsFromLeague');

  const runners: RankingData[] = [];

  const runner: RankingData = {
    position: 1,
    points: 1564,
    photo_url: 'http://test.com/Asdasd',
    full_name: 'Jonatan Antonio Lopez',
    postion_lasted: 1,
    num_top_five: 5,
    num_participations: 10,
    best_position: 1,
    num_best_position: 4,
    // circuito
    circuito_poinst: 1,
    circuito_general_position: 1,
    circuito_postion_lasted: 1,
    circuito_best_pace: '2:54',
    circuito_best_position: 1,
    circuito_num_best_position: 1,
    // info adicional, de momento no visible en la vista
    circuito_race_id: 1,
  };

  runners.push(runner);

  return runners;
  }

  GetColumnsDefinition(): { headerName: string; field: string; }[] {

    return [
      { headerName: '', field: 'position'},
      { headerName: '', field: 'points'},
      { headerName: '', field: 'full_name'},
      // { headerName: 'Última Carrera', field: 'postion_lasted'},
      // { headerName: 'Photo url', field: 'photo_url'},
      { headerName: '# Top Five', field: 'num_top_five'},
      { headerName: '# Carreras', field: 'num_participations'},
      { headerName: 'Mejor Puesto', field: 'best_position'},
      // { headerName: '# Best Postion', field: 'num_best_position'}, Utiliza para agregar al campo de best position

      { headerName: 'Puntos', field: 'circuito_poinst'},
      { headerName: 'Puesto', field: 'circuito_general_position'},
      { headerName: 'Puesto Última carrera', field: 'circuito_postion_lasted'},
      { headerName: 'Mejor Media', field: 'circuito_best_pace'},
      { headerName: 'Mejor Puesto', field: 'circuito_best_position'},
      // { headerName: '# Best Position', field: 'circuito_num_best_position'}, agregar al campo best_position

      // { headerName: 'Id', field: 'circuito_race_id'},
    ];
  }
}
