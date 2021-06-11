import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-material-request-by-define',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './material-request-by-define.component.html',
  styleUrls: ['./material-request-by-define.component.css']
})

export class MaterialRequestByDefineComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'MATERIAL_REQUEST_BY_DEFINE', 'R'); }

}
