import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-manufacturer-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './manufacturer-form.component.html',
  styleUrls: ['./manufacturer-form.component.css']
})
export class ManufacturerFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'MANUFACTURER_1ST', 'U'); }

}
