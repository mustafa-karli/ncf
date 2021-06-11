import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-my-company',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './my-company.component.html',
  styleUrls: ['./my-company.component.css']
})

export class MyCompanyComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'MY_COMPANY', 'R'); }

}
