import { Injectable } from '@angular/core';
import { ILeague } from '../interfaces/ILeague';
import { RankingData } from '../model/rankingData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedolatTeamService {

  constructor( private httpClient: HttpClient ) {
    console.log('RedolatTeamService');
  }

  GetLeague(): Observable<ILeague[]> {
    console.log('GetLeague');

    return this.httpClient.get<ILeague[]>('http://localhost:3000/api/races/leagues');
  }

  GetRankinsFromLeague(leagueId: number): Observable<RankingData[]> {

    console.log('GetRankinsFromLeague');

    return this.httpClient.get<RankingData[]>('http://localhost:3000/api/races/ranking');
  }

  GetColumnsDefinition(): Observable<{ headerName: string; field: string; }[]> {

    return this.httpClient.get<{ headerName: string; field: string; }[]>('http://localhost:3000/api/races/definition');
  }
}
