import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-business-report-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './business-report-form.component.html',
  styleUrls: ['./business-report-form.component.css']
})
export class BusinessReportFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'BUSINESS_REPORT_1ST', 'U'); }

}
