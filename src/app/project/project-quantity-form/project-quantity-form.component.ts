import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-project-quantity-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './project-quantity-form.component.html',
  styleUrls: ['./project-quantity-form.component.css']
})
export class ProjectQuantityFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PROJECT_QUANTITY_1ST', 'U'); }

}
