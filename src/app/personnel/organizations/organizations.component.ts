import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-organizations',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})

export class OrganizationsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'ORGANIZATION', 'R'); }

}
