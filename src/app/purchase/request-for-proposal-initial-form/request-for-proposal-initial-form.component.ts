import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-request-for-proposal-initial-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './request-for-proposal-initial-form.component.html',
  styleUrls: ['./request-for-proposal-initial-form.component.css']
})
export class RequestForProposalInitialFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'REQUEST_FOR_PROPOSAL_INITIAL_1ST', 'U'); }

}
