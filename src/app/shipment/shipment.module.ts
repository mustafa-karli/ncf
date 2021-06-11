import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ShipmentReportsComponent } from './shipment-reports/shipment-reports.component';
import { ShipmentFormComponent } from './shipment-form/shipment-form.component';
import { ShipmentReportFormComponent } from './shipment-report-form/shipment-report-form.component';



@NgModule({
  declarations: [
    ShipmentsComponent,
    ShipmentReportsComponent,
    ShipmentFormComponent,
    ShipmentReportFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'shipment/shipment/list',        component: ShipmentsComponent,             canActivate: [AuthGuardService]},
      {path: 'shipment/shipment/new',         component: ShipmentFormComponent,          canActivate: [AuthGuardService]},
      {path: 'shipment/shipment/:id',         component: ShipmentFormComponent,          canActivate: [AuthGuardService]},
      {path: 'shipment/shipment-report/list', component: ShipmentReportsComponent,       canActivate: [AuthGuardService]},
      {path: 'shipment/shipment-report/new',  component: ShipmentReportFormComponent,    canActivate: [AuthGuardService]},
      {path: 'shipment/shipment-report/:id',  component: ShipmentReportFormComponent,    canActivate: [AuthGuardService]},
    ])
  ]
})
export class ShipmentModule { }
