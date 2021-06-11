import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { EquipmentComponent } from './equipment/equipment.component';
import { ServiceTypesComponent } from './service-types/service-types.component';
import { MxCounterTypesComponent } from './mx-counter-types/mx-counter-types.component';
import { MaintenancesComponent } from './maintenances/maintenances.component';
import { EquipmentFormComponent } from './equipment-form/equipment-form.component';
import { ServiceTypeFormComponent } from './service-type-form/service-type-form.component';
import { MxCounterTypeFormComponent } from './mx-counter-type-form/mx-counter-type-form.component';
import { MaintenanceFormComponent } from './maintenance-form/maintenance-form.component';



@NgModule({
  declarations: [
    EquipmentComponent,
    ServiceTypesComponent,
    MxCounterTypesComponent,
    MaintenancesComponent,
    EquipmentFormComponent,
    ServiceTypeFormComponent,
    MxCounterTypeFormComponent,
    MaintenanceFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'maintenance/equipment/list',       component: EquipmentComponent,          canActivate: [AuthGuardService]},
      {path: 'maintenance/equipment/new',        component: EquipmentFormComponent,      canActivate: [AuthGuardService]},
      {path: 'maintenance/equipment/:id',        component: EquipmentFormComponent,      canActivate: [AuthGuardService]},
      {path: 'maintenance/service-type/list',    component: ServiceTypesComponent,       canActivate: [AuthGuardService]},
      {path: 'maintenance/service-type/new',     component: ServiceTypeFormComponent,    canActivate: [AuthGuardService]},
      {path: 'maintenance/service-type/:id',     component: ServiceTypeFormComponent,    canActivate: [AuthGuardService]},
      {path: 'maintenance/mx-counter-type/list', component: MxCounterTypesComponent,     canActivate: [AuthGuardService]},
      {path: 'maintenance/mx-counter-type/new',  component: MxCounterTypeFormComponent,  canActivate: [AuthGuardService]},
      {path: 'maintenance/mx-counter-type/:id',  component: MxCounterTypeFormComponent,  canActivate: [AuthGuardService]},
      {path: 'maintenance/maintenance/list',     component: MaintenancesComponent,       canActivate: [AuthGuardService]},
      {path: 'maintenance/maintenance/new',      component: MaintenanceFormComponent,    canActivate: [AuthGuardService]},
      {path: 'maintenance/maintenance/:id',      component: MaintenanceFormComponent,    canActivate: [AuthGuardService]},
    ])
  ]
})
export class MaintenanceModule { }
