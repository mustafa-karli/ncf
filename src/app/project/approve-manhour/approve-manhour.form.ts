import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-approve-manhour-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './approve-manhour-form.component.html',
  styleUrls: ['./approve-manhour-form.component.css']
})
export class ApproveManhourFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'APPROVE_MANHOUR_1ST', 'U'); }

}
