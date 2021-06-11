import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-production-resources',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './production-resources.component.html',
  styleUrls: ['./production-resources.component.css']
})

export class ProductionResourcesComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PRODUCTION_RESOURCE', 'R'); }

}
