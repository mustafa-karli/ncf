import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-table-view-scenario-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './table-view-scenario-form.component.html',
  styleUrls: ['./table-view-scenario-form.component.css']
})
export class TableViewScenarioFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'TABLE_VIEW_SCENARIO_1ST', 'U'); }

}
