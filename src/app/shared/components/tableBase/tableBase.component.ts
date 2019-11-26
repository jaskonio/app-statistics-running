import { Component, Input } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { RankingData } from '../../model/rankingData';

@Component({
  selector: 'app-table-base',
  templateUrl: './tableBase.component.html',
  styleUrls: ['./tableBase.component.css']
})
export class TableBaseComponent {
  @Input('data') data: RankingData[];
  @Input('columnDefs') columnDefs: { headerName: string; field: string; }[];

  pageSizeOptions = [5, 10, 20];
  datasource = new MatTableDataSource<RankingData>();

  constructor() {
    console.log('TableBaseComponent.constructor');
  }

  // tslint:disable-next-line: use-lifecycle-interface
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    console.log('TableBaseComponent.ngOnInit');

    this.datasource = new MatTableDataSource(this.data);
  }
  getDisplayedColumns(): string[]{
    return this.columnDefs.map(cd => cd.field);
  }
}
