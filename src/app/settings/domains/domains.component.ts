import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-domains',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})

export class DomainsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'DOMAIN', 'R'); }

}
