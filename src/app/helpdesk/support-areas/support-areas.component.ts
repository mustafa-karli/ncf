import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-support-areas',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './support-areas.component.html',
  styleUrls: ['./support-areas.component.css']
})

export class SupportAreasComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'SUPPORT_AREA', 'R'); }

}
