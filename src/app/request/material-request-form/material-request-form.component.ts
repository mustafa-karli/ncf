import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-material-request-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './material-request-form.component.html',
  styleUrls: ['./material-request-form.component.css']
})
export class MaterialRequestFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'MATERIAL_REQUEST_1ST', 'U'); }

}
