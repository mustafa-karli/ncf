import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-tax-type-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './tax-type-form.component.html',
  styleUrls: ['./tax-type-form.component.css']
})
export class TaxTypeFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'TAX_TYPE_1ST', 'U'); }

}
