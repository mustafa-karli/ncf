import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-material-attribute-groups',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './material-attribute-groups.component.html',
  styleUrls: ['./material-attribute-groups.component.css']
})

export class MaterialAttributeGroupsComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'MATERIAL_ATTRIBUTE_GROUP', 'R'); }

}
