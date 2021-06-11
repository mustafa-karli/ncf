import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-request-for-proposal-entry',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './request-for-proposal-entry.component.html',
  styleUrls: ['./request-for-proposal-entry.component.css']
})

export class RequestForProposalEntryComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'REQUEST_FOR_PROPOSAL_ENTRY', 'R'); }

}
