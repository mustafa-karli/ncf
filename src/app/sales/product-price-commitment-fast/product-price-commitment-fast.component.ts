import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-product-price-commitment-fast',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './product-price-commitment-fast.component.html',
  styleUrls: ['./product-price-commitment-fast.component.css']
})

export class ProductPriceCommitmentFastComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PRODUCT_PRICE_COMMITMENT_FAST', 'R'); }

}
