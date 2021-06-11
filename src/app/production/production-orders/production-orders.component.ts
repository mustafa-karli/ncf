import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-production-orders',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './production-orders.component.html',
  styleUrls: ['./production-orders.component.css']
})

export class ProductionOrdersComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PRODUCTION_ORDER', 'R'); }

}
