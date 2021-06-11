import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-mx-counter-type-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './mx-counter-type-form.component.html',
  styleUrls: ['./mx-counter-type-form.component.css']
})
export class MxCounterTypeFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'MX_COUNTER_TYPE_1ST', 'U'); }

}
