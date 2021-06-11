import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-product-price-commitments',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './product-price-commitments.component.html',
  styleUrls: ['./product-price-commitments.component.css']
})

export class ProductPriceCommitmentsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PRODUCT_PRICE_COMMITMENT', 'R'); }

}
