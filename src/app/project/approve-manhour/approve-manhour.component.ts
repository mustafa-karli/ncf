import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-approve-manhour',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './approve-manhour.component.html',
  styleUrls: ['./approve-manhour.component.css']
})

export class ApproveManhourComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'APPROVE_MANHOUR', 'R'); }

}
