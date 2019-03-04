import { Component, OnInit } from '@angular/core';
import { ILeague } from '../../interfaces/ILeague';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/config/app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  leagues: any[] = [
    {id: 1, name: 'League 1', urlImg: 'https://scontent.fvlc1-1.fna.fbcdn.net/v/t1.0-9/42270053_1968036546594184_4128561828953325568_n.jpg?_nc_cat=100&_nc_ht=scontent.fvlc1-1.fna&oh=ff462ae25f4237be40fdd43d608934ec&oe=5D21A484'},
    {id: 2, name: 'League 2', urlImg: 'https://scontent.fvlc1-1.fna.fbcdn.net/v/t1.0-9/42270053_1968036546594184_4128561828953325568_n.jpg?_nc_cat=100&_nc_ht=scontent.fvlc1-1.fna&oh=ff462ae25f4237be40fdd43d608934ec&oe=5D21A484'},
    {id: 3, name: 'League 3', urlImg: 'https://scontent.fvlc1-1.fna.fbcdn.net/v/t1.0-9/42270053_1968036546594184_4128561828953325568_n.jpg?_nc_cat=100&_nc_ht=scontent.fvlc1-1.fna&oh=ff462ae25f4237be40fdd43d608934ec&oe=5D21A484'},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(league: ILeague) {
    this.router.navigateByUrl( AppConfig.routes.rankings + '/' + league.id);
  }
}
