import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-partner-certification-types',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './partner-certification-types.component.html',
  styleUrls: ['./partner-certification-types.component.css']
})

export class PartnerCertificationTypesComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PARTNER_CERTIFICATION_TYPE', 'R'); }

}
