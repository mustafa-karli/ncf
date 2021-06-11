import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-purchase-delivery-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './purchase-delivery-form.component.html',
  styleUrls: ['./purchase-delivery-form.component.css']
})
export class PurchaseDeliveryFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PURCHASE_DELIVERY_1ST', 'U'); }

}
