import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-bom-operation-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './bom-operation-form.component.html',
  styleUrls: ['./bom-operation-form.component.css']
})
export class BomOperationFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'BOM_OPERATION_1ST', 'U'); }

}
