import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-unit-conversion-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './unit-conversion-form.component.html',
  styleUrls: ['./unit-conversion-form.component.css']
})
export class UnitConversionFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'UNIT_CONVERSION_1ST', 'U'); }

}
