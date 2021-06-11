import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-subcontractor-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './subcontractor-form.component.html',
  styleUrls: ['./subcontractor-form.component.css']
})
export class SubcontractorFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'SUBCONTRACTOR_1ST', 'U'); }

}
