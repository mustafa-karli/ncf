import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-material-request-reports',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './material-request-reports.component.html',
  styleUrls: ['./material-request-reports.component.css']
})

export class MaterialRequestReportsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'MATERIAL_REQUEST_REPORT', 'R'); }

}
