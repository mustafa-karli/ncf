import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-project-manhour-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './project-manhour-form.component.html',
  styleUrls: ['./project-manhour-form.component.css']
})
export class ProjectManhourFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PROJECT_MANHOUR_1ST', 'U'); }

}
