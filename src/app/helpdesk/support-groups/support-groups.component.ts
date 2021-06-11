import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-support-groups',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './support-groups.component.html',
  styleUrls: ['./support-groups.component.css']
})

export class SupportGroupsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'SUPPORT_GROUP', 'R'); }

}
