import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-table-controller-static-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './table-controller-static-form.component.html',
  styleUrls: ['./table-controller-static-form.component.css']
})
export class TableControllerStaticFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'TABLE_CONTROLLER_STATIC_1ST', 'U'); }

}
