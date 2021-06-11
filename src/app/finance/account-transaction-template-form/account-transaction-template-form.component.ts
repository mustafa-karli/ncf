import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-account-transaction-template-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './account-transaction-template-form.component.html',
  styleUrls: ['./account-transaction-template-form.component.css']
})
export class AccountTransactionTemplateFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'ACCOUNT_TRANSACTION_TEMPLATE_1ST', 'U'); }

}
