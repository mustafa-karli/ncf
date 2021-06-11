import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-tax-types',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './tax-types.component.html',
  styleUrls: ['./tax-types.component.css']
})

export class TaxTypesComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'TAX_TYPE', 'R'); }

}
