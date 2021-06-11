import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-unit-conversions',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './unit-conversions.component.html',
  styleUrls: ['./unit-conversions.component.css']
})

export class UnitConversionsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'UNIT_CONVERSION', 'R'); }

}
