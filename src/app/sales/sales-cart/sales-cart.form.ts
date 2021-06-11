import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-sales-cart-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './sales-cart-form.component.html',
  styleUrls: ['./sales-cart-form.component.css']
})
export class SalesCartFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'SALES_CART_1ST', 'U'); }

}
