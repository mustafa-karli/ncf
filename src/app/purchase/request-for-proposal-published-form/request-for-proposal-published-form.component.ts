import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-request-for-proposal-published-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './request-for-proposal-published-form.component.html',
  styleUrls: ['./request-for-proposal-published-form.component.css']
})
export class RequestForProposalPublishedFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'REQUEST_FOR_PROPOSAL_PUBLISHED_1ST', 'U'); }

}
