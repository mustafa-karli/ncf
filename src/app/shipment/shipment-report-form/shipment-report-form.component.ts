import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-shipment-report-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './shipment-report-form.component.html',
  styleUrls: ['./shipment-report-form.component.css']
})
export class ShipmentReportFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'SHIPMENT_REPORT_1ST', 'U'); }

}
