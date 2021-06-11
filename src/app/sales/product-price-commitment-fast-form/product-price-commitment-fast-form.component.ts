import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-product-price-commitment-fast-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './product-price-commitment-fast-form.component.html',
  styleUrls: ['./product-price-commitment-fast-form.component.css']
})
export class ProductPriceCommitmentFastFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PRODUCT_PRICE_COMMITMENT_FAST_1ST', 'U'); }

}
