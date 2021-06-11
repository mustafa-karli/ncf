import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-account-schema-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './account-schema-form.component.html',
  styleUrls: ['./account-schema-form.component.css']
})
export class AccountSchemaFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'ACCOUNT_SCHEMA_1ST', 'U'); }

}
