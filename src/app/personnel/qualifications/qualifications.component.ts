import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-qualifications',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css']
})

export class QualificationsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'QUALIFICATION', 'R'); }

}
