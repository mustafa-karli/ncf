import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-my-sales-order-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './my-sales-order-form.component.html',
  styleUrls: ['./my-sales-order-form.component.css']
})
export class MySalesOrderFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'MY_SALES_ORDER_1ST', 'U'); }

}
