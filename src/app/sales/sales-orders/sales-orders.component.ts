import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-sales-orders',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './sales-orders.component.html',
  styleUrls: ['./sales-orders.component.css']
})

export class SalesOrdersComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'SALES_ORDER', 'R'); }

}
