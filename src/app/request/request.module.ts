import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { MaterialRequestEntryComponent } from './material-request-entry/material-request-entry.component';
import { MaterialRequestByDefineComponent } from './material-request-by-define/material-request-by-define.component';
import { MaterialRequestsComponent } from './material-requests/material-requests.component';
import { MaterialRequestReportsComponent } from './material-request-reports/material-request-reports.component';
import { MaterialRequestEntryFormComponent } from './material-request-entry-form/material-request-entry-form.component';
import { MaterialRequestByDefineFormComponent } from './material-request-by-define-form/material-request-by-define-form.component';
import { MaterialRequestFormComponent } from './material-request-form/material-request-form.component';
import { MaterialRequestReportFormComponent } from './material-request-report-form/material-request-report-form.component';



@NgModule({
  declarations: [
    MaterialRequestEntryComponent,
    MaterialRequestByDefineComponent,
    MaterialRequestsComponent,
    MaterialRequestReportsComponent,
    MaterialRequestEntryFormComponent,
    MaterialRequestByDefineFormComponent,
    MaterialRequestFormComponent,
    MaterialRequestReportFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'request/material-request-entry/list', component: MaterialRequestEntryComponent,    canActivate: [AuthGuardService]},
      {path: 'request/material-request-entry/new', component: MaterialRequestEntryFormComponent,    canActivate: [AuthGuardService]},
      {path: 'request/material-request-entry/:id', component: MaterialRequestEntryFormComponent,    canActivate: [AuthGuardService]},
      {path: 'request/material-request-by-define/list', component: MaterialRequestByDefineComponent,    canActivate: [AuthGuardService]},
      {path: 'request/material-request-by-define/new', component: MaterialRequestByDefineFormComponent,    canActivate: [AuthGuardService]},
      {path: 'request/material-request-by-define/:id', component: MaterialRequestByDefineFormComponent,    canActivate: [AuthGuardService]},
      {path: 'request/material-request/list', component: MaterialRequestsComponent,    canActivate: [AuthGuardService]},
      {path: 'request/material-request/new', component: MaterialRequestFormComponent,    canActivate: [AuthGuardService]},
      {path: 'request/material-request/:id', component: MaterialRequestFormComponent,    canActivate: [AuthGuardService]},
      {path: 'request/material-request-report/list', component: MaterialRequestReportsComponent,    canActivate: [AuthGuardService]},
      {path: 'request/material-request-report/new', component: MaterialRequestReportFormComponent,    canActivate: [AuthGuardService]},
      {path: 'request/material-request-report/:id', component: MaterialRequestReportFormComponent,    canActivate: [AuthGuardService]},
    ])
  ]
})
export class RequestModule { }
