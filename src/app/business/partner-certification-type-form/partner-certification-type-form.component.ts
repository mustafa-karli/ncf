import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-partner-certification-type-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './partner-certification-type-form.component.html',
  styleUrls: ['./partner-certification-type-form.component.css']
})
export class PartnerCertificationTypeFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PARTNER_CERTIFICATION_TYPE_1ST', 'U'); }

}
