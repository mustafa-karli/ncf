import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-position-types',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './position-types.component.html',
  styleUrls: ['./position-types.component.css']
})

export class PositionTypesComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'POSITION_TYPE', 'R'); }

}
