import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-business-partners',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './business-partners.component.html',
  styleUrls: ['./business-partners.component.css']
})

export class BusinessPartnersComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'BUSINESS_PARTNER', 'R'); }

}
