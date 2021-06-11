import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-sales-vendor-reports',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './sales-vendor-reports.component.html',
  styleUrls: ['./sales-vendor-reports.component.css']
})

export class SalesVendorReportsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'SALES_VENDOR_REPORT', 'R'); }

}
