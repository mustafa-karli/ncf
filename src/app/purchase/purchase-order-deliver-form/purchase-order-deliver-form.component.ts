import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-purchase-order-deliver-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './purchase-order-deliver-form.component.html',
  styleUrls: ['./purchase-order-deliver-form.component.css']
})
export class PurchaseOrderDeliverFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PURCHASE_ORDER_DELIVER_1ST', 'U'); }

}
