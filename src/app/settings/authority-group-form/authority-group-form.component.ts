import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-authority-group-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './authority-group-form.component.html',
  styleUrls: ['./authority-group-form.component.css']
})
export class AuthorityGroupFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'AUTHORITY_GROUP_1ST', 'U'); }

}
