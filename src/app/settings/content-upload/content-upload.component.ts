import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaBase } from 'src/app/shared/abstract/nca.base';
import { NsonService } from 'src/app/shared/services/nson.service';

@Component({
  selector: 'app-content-upload',
  templateUrl: '../../shared/abstract/nca-list.html',
//  templateUrl: './content-upload.component.html',
  styleUrls: ['./content-upload.component.css']
})

export class ContentUploadComponent extends NcaBase {

    constructor(service: NsonService, router: Router, route: ActivatedRoute) { super(service, router, route, 'CONTENT_UPLOAD', 'R'); }

}
