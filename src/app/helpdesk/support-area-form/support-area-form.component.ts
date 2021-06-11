import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-support-area-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './support-area-form.component.html',
  styleUrls: ['./support-area-form.component.css']
})
export class SupportAreaFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'SUPPORT_AREA_1ST', 'U'); }

}
