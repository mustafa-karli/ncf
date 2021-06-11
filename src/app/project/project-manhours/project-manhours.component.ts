import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-project-manhours',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './project-manhours.component.html',
  styleUrls: ['./project-manhours.component.css']
})

export class ProjectManhoursComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PROJECT_MANHOUR', 'R'); }

}
