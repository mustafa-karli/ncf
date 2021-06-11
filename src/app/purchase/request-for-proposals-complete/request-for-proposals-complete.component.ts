import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-request-for-proposals-complete',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './request-for-proposals-complete.component.html',
  styleUrls: ['./request-for-proposals-complete.component.css']
})

export class RequestForProposalCompleteComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'REQUEST_FOR_PROPOSAL_COMPLETE', 'R'); }

}
