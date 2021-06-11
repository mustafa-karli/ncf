import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-business-owners',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './business-owners.component.html',
  styleUrls: ['./business-owners.component.css']
})

export class BusinessOwnersComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'BUSINESS_OWNER', 'R'); }

}
