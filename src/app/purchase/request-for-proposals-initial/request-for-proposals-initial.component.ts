import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-request-for-proposals-initial',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './request-for-proposals-initial.component.html',
  styleUrls: ['./request-for-proposals-initial.component.css']
})

export class RequestForProposalInitialComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'REQUEST_FOR_PROPOSAL_INITIAL', 'R'); }

}
