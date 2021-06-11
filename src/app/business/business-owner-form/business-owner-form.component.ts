import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-business-owner-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './business-owner-form.component.html',
  styleUrls: ['./business-owner-form.component.css']
})
export class BusinessOwnerFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'BUSINESS_OWNER_1ST', 'U'); }

}
