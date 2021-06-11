import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-approve-quantity-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './approve-quantity-form.component.html',
  styleUrls: ['./approve-quantity-form.component.css']
})
export class ApproveQuantityFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'APPROVE_QUANTITY_1ST', 'U'); }

}
