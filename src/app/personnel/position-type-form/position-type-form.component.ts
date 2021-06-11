import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-position-type-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './position-type-form.component.html',
  styleUrls: ['./position-type-form.component.css']
})
export class PositionTypeFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'POSITION_TYPE_1ST', 'U'); }

}
