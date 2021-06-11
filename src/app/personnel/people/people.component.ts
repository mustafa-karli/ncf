import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-people',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'PERSON', 'R'); }

}
