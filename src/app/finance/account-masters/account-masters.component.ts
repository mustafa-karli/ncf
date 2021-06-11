import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-account-masters',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './account-masters.component.html',
  styleUrls: ['./account-masters.component.css']
})

export class AccountMastersComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'ACCOUNT_MASTER', 'R'); }

}
