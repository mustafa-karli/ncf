import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css']
})

export class BankAccountsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'BANK_ACCOUNT', 'R'); }

}
