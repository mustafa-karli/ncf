import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-material-types',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './material-types.component.html',
  styleUrls: ['./material-types.component.css']
})

export class MaterialTypesComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'MATERIAL_TYPE', 'R'); }

}
