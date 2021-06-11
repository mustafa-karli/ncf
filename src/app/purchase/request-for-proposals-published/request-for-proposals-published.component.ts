import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-request-for-proposals-published',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './request-for-proposals-published.component.html',
  styleUrls: ['./request-for-proposals-published.component.css']
})

export class RequestForProposalPublishedComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'REQUEST_FOR_PROPOSAL_PUBLISHED', 'R'); }

}
