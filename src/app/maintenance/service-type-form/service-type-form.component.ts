import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-service-type-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './service-type-form.component.html',
  styleUrls: ['./service-type-form.component.css']
})
export class ServiceTypeFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'SERVICE_TYPE_1ST', 'U'); }

}
