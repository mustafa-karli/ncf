import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-production-order-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './production-order-form.component.html',
  styleUrls: ['./production-order-form.component.css']
})
export class ProductionOrderFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PRODUCTION_ORDER_1ST', 'U'); }

}
