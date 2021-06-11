import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-user-accounts',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.css']
})

export class UserAccountsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'USER_ACCOUNT', 'R'); }

}
