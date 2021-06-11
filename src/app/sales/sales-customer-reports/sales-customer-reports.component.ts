import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-sales-customer-reports',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './sales-customer-reports.component.html',
  styleUrls: ['./sales-customer-reports.component.css']
})

export class SalesCustomerReportsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'SALES_CUSTOMER_REPORT', 'R'); }

}
