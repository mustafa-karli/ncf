import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-vendors',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})

export class VendorsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'VENDOR', 'R'); }

}
