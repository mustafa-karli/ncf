import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-my-company-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './my-company-form.component.html',
  styleUrls: ['./my-company-form.component.css']
})
export class MyCompanyFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'MY_COMPANY_1ST', 'U'); }

}
