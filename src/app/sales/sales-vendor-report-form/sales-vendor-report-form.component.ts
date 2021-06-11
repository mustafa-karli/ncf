import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-sales-vendor-report-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './sales-vendor-report-form.component.html',
  styleUrls: ['./sales-vendor-report-form.component.css']
})
export class SalesVendorReportFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'SALES_VENDOR_REPORT_1ST', 'U'); }

}
