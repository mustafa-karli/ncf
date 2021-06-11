import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-notification-type-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './notification-type-form.component.html',
  styleUrls: ['./notification-type-form.component.css']
})
export class NotificationTypeFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'NOTIFICATION_TYPE_1ST', 'U'); }

}
