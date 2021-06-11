import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-notification-types',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './notification-types.component.html',
  styleUrls: ['./notification-types.component.css']
})

export class NotificationTypesComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'NOTIFICATION_TYPE', 'R'); }

}
