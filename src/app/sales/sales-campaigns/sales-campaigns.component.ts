import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-sales-campaigns',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './sales-campaigns.component.html',
  styleUrls: ['./sales-campaigns.component.css']
})

export class SalesCampaignsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'SALES_CAMPAIGN', 'R'); }

}
