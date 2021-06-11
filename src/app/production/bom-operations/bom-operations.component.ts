import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-bom-operations',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './bom-operations.component.html',
  styleUrls: ['./bom-operations.component.css']
})

export class BomOperationsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'BOM_OPERATION', 'R'); }

}
