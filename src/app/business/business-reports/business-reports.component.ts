import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-business-reports',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './business-reports.component.html',
  styleUrls: ['./business-reports.component.css']
})

export class BusinessReportsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'BUSINESS_REPORT', 'R'); }

}
