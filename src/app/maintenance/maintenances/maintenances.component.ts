import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-maintenances',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './maintenances.component.html',
  styleUrls: ['./maintenances.component.css']
})

export class MaintenancesComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'MAINTENANCE', 'R'); }

}
