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
    {id: 1, name: 'League 1', urlImg: 'https://images.clarin.com/2015/03/21/SkbZeI9Tml_1256x620.jpg'},
    {id: 2, name: 'League 2', urlImg: 'https://images.clarin.com/2015/03/21/SkbZeI9Tml_1256x620.jpg'},
    {id: 3, name: 'League 3', urlImg: 'https://images.clarin.com/2015/03/21/SkbZeI9Tml_1256x620.jpg'},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(league: ILeague) {
    this.router.navigateByUrl( AppConfig.routes.rankings + '/' + league.id);
  }
}
