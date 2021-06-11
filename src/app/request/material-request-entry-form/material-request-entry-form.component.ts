import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-material-request-entry-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './material-request-entry-form.component.html',
  styleUrls: ['./material-request-entry-form.component.css']
})
export class MaterialRequestEntryFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'MATERIAL_REQUEST_ENTRY_1ST', 'U'); }

}
