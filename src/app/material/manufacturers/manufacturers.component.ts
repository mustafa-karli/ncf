import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-manufacturers',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './manufacturers.component.html',
  styleUrls: ['./manufacturers.component.css']
})

export class ManufacturersComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'MANUFACTURER', 'R'); }

}
