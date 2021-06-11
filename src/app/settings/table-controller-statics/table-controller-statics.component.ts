import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-table-controller-statics',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './table-controller-statics.component.html',
  styleUrls: ['./table-controller-statics.component.css']
})

export class TableControllerStaticsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'TABLE_CONTROLLER_STATIC', 'R'); }

}
