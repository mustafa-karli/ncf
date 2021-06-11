import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-account-master-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './account-master-form.component.html',
  styleUrls: ['./account-master-form.component.css']
})
export class AccountMasterFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'ACCOUNT_MASTER_1ST', 'U'); }

}
