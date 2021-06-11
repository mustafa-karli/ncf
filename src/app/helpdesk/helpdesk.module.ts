import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { SupportAreasComponent } from './support-areas/support-areas.component';
import { SupportGroupsComponent } from './support-groups/support-groups.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';
import { TicketReportsComponent } from './ticket-reports/ticket-reports.component';
import { SupportAreaFormComponent } from './support-area-form/support-area-form.component';
import { SupportGroupFormComponent } from './support-group-form/support-group-form.component';
import { SupportTicketFormComponent } from './support-ticket-form/support-ticket-form.component';
import { TicketReportFormComponent } from './ticket-report-form/ticket-report-form.component';



@NgModule({
  declarations: [
    SupportAreasComponent,
    SupportGroupsComponent,
    SupportTicketsComponent,
    TicketReportsComponent,
    SupportAreaFormComponent,
    SupportGroupFormComponent,
    SupportTicketFormComponent,
    TicketReportFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'helpdesk/support-area/list',   component: SupportAreasComponent,       canActivate: [AuthGuardService]},
      {path: 'helpdesk/support-area/new',    component: SupportAreaFormComponent,    canActivate: [AuthGuardService]},
      {path: 'helpdesk/support-area/:id',    component: SupportAreaFormComponent,    canActivate: [AuthGuardService]},
      {path: 'helpdesk/support-group/list',  component: SupportGroupsComponent,      canActivate: [AuthGuardService]},
      {path: 'helpdesk/support-group/new',   component: SupportGroupFormComponent,   canActivate: [AuthGuardService]},
      {path: 'helpdesk/support-group/:id',   component: SupportGroupFormComponent,   canActivate: [AuthGuardService]},
      {path: 'helpdesk/support-ticket/list', component: SupportTicketsComponent,     canActivate: [AuthGuardService]},
      {path: 'helpdesk/support-ticket/new',  component: SupportTicketFormComponent,  canActivate: [AuthGuardService]},
      {path: 'helpdesk/support-ticket/:id',  component: SupportTicketFormComponent,  canActivate: [AuthGuardService]},
      {path: 'helpdesk/ticket-report/list',  component: TicketReportsComponent,      canActivate: [AuthGuardService]},
      {path: 'helpdesk/ticket-report/new',   component: TicketReportFormComponent,   canActivate: [AuthGuardService]},
      {path: 'helpdesk/ticket-report/:id',   component: TicketReportFormComponent,   canActivate: [AuthGuardService]},
    ])
  ]
})
export class HelpdeskModule { }
