import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-approve-progress-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './approve-progress-form.component.html',
  styleUrls: ['./approve-progress-form.component.css']
})
export class ApproveProgressFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'APPROVE_PROGRESS_1ST', 'U'); }

}
