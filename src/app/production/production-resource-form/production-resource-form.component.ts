import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-production-resource-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './production-resource-form.component.html',
  styleUrls: ['./production-resource-form.component.css']
})
export class ProductionResourceFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PRODUCTION_RESOURCE_1ST', 'U'); }

}
