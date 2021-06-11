import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-ticket-report-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './ticket-report-form.component.html',
  styleUrls: ['./ticket-report-form.component.css']
})
export class TicketReportFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'TICKET_REPORT_1ST', 'U'); }

}
