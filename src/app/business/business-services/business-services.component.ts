import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-business-services',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './business-services.component.html',
  styleUrls: ['./business-services.component.css']
})

export class BusinessServicesComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'BUSINESS_SERVICE', 'R'); }

}
