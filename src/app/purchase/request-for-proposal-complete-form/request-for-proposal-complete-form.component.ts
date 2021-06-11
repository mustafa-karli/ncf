import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-request-for-proposal-complete-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './request-for-proposal-complete-form.component.html',
  styleUrls: ['./request-for-proposal-complete-form.component.css']
})
export class RequestForProposalCompleteFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'REQUEST_FOR_PROPOSAL_COMPLETE_1ST', 'U'); }

}
