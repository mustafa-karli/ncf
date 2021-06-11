import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-sales-campaign-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './sales-campaign-form.component.html',
  styleUrls: ['./sales-campaign-form.component.css']
})
export class SalesCampaignFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'SALES_CAMPAIGN_1ST', 'U'); }

}
