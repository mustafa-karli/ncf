import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-business-partner-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './business-partner-form.component.html',
  styleUrls: ['./business-partner-form.component.css']
})
export class BusinessPartnerFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'BUSINESS_PARTNER_1ST', 'U'); }

}
