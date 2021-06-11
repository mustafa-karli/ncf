import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-account-transaction-templates',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './account-transaction-templates.component.html',
  styleUrls: ['./account-transaction-templates.component.css']
})

export class AccountTransactionTemplatesComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'ACCOUNT_TRANSACTION_TEMPLATE', 'R'); }

}
