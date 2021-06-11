import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-materials',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})

export class MaterialsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'MATERIAL', 'R'); }

}
