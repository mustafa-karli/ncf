import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.css']
})

export class PurchaseOrdersComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PURCHASE_ORDER', 'R'); }

}
