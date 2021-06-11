import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-account-schemas',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './account-schemas.component.html',
  styleUrls: ['./account-schemas.component.css']
})

export class AccountSchemasComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'ACCOUNT_SCHEMA', 'R'); }

}
