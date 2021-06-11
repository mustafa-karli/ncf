import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-banks',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})

export class BanksComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'BANK', 'R'); }

}
