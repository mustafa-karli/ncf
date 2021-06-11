import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-authority-groups',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './authority-groups.component.html',
  styleUrls: ['./authority-groups.component.css']
})

export class AuthorityGroupsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'AUTHORITY_GROUP', 'R'); }

}
