import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-content-server-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './content-server-form.component.html',
  styleUrls: ['./content-server-form.component.css']
})
export class ContentServerFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'CONTENT_SERVER_1ST', 'U'); }

}
