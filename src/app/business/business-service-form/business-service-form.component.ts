import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-business-service-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './business-service-form.component.html',
  styleUrls: ['./business-service-form.component.css']
})
export class BusinessServiceFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'BUSINESS_SERVICE_1ST', 'U'); }

}
