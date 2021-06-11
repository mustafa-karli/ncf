import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-subcontractors',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './subcontractors.component.html',
  styleUrls: ['./subcontractors.component.css']
})

export class SubcontractorsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'SUBCONTRACTOR', 'R'); }

}
