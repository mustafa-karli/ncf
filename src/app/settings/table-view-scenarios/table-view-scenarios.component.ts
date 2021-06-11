import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-table-view-scenarios',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './table-view-scenarios.component.html',
  styleUrls: ['./table-view-scenarios.component.css']
})

export class TableViewScenariosComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'TABLE_VIEW_SCENARIO', 'R'); }

}
