import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-purchase-order-deliver',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './purchase-order-deliver.component.html',
  styleUrls: ['./purchase-order-deliver.component.css']
})

export class PurchaseOrderDeliverComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PURCHASE_ORDER_DELIVER', 'R'); }

}
