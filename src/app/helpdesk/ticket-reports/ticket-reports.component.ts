import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-ticket-reports',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './ticket-reports.component.html',
  styleUrls: ['./ticket-reports.component.css']
})

export class TicketReportsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'TICKET_REPORT', 'R'); }

}
