import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-shipment-reports',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './shipment-reports.component.html',
  styleUrls: ['./shipment-reports.component.css']
})

export class ShipmentReportsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'SHIPMENT_REPORT', 'R'); }

}
