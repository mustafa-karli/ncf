import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-product-prices',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './product-prices.component.html',
  styleUrls: ['./product-prices.component.css']
})

export class ProductPricesComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PRODUCT_PRICE', 'R'); }

}
