import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-material-group-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './material-group-form.component.html',
  styleUrls: ['./material-group-form.component.css']
})
export class MaterialGroupFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'MATERIAL_GROUP_1ST', 'U'); }

}
