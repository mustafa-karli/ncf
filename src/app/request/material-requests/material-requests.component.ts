import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-material-requests',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './material-requests.component.html',
  styleUrls: ['./material-requests.component.css']
})

export class MaterialRequestsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'MATERIAL_REQUEST', 'R'); }

}
