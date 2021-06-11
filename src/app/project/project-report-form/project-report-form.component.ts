import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-project-report-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './project-report-form.component.html',
  styleUrls: ['./project-report-form.component.css']
})
export class ProjectReportFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PROJECT_REPORT_1ST', 'U'); }

}
