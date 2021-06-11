import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-support-tickets',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './support-tickets.component.html',
  styleUrls: ['./support-tickets.component.css']
})

export class SupportTicketsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'SUPPORT_TICKET', 'R'); }

}
