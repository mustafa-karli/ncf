import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-project-reports',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './project-reports.component.html',
  styleUrls: ['./project-reports.component.css']
})

export class ProjectReportsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PROJECT_REPORT', 'R'); }

}
