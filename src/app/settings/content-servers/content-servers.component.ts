import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-content-servers',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './content-servers.component.html',
  styleUrls: ['./content-servers.component.css']
})

export class ContentServersComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'CONTENT_SERVER', 'R'); }

}
