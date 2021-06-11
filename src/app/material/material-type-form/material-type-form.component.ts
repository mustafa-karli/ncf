import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-material-type-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './material-type-form.component.html',
  styleUrls: ['./material-type-form.component.css']
})
export class MaterialTypeFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'MATERIAL_TYPE_1ST', 'U'); }

}
