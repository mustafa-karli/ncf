import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-content-upload-form',
  templateUrl: '../../shared/abstract/nca-form.html',
//  templateUrl: './content-upload-form.component.html',
  styleUrls: ['./content-upload-form.component.css']
})
export class ContentUploadFormComponent extends NcaBase {

  constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'CONTENT_UPLOAD_1ST', 'U'); }

}
