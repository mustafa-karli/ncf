import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-support-group-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './support-group-form.component.html',
  styleUrls: ['./support-group-form.component.css']
})
export class SupportGroupFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'SUPPORT_GROUP_1ST', 'U'); }

}
