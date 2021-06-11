import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-service-types',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './service-types.component.html',
  styleUrls: ['./service-types.component.css']
})

export class ServiceTypesComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'SERVICE_TYPE', 'R'); }

}
