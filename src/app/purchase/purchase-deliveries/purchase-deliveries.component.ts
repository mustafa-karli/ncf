import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-purchase-deliveries',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './purchase-deliveries.component.html',
  styleUrls: ['./purchase-deliveries.component.css']
})

export class PurchaseDeliveriesComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PURCHASE_DELIVERY', 'R'); }

}
