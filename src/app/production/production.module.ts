import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { ProductionResourcesComponent } from './production-resources/production-resources.component';
import { BomOperationsComponent } from './bom-operations/bom-operations.component';
import { ProductionOrdersComponent } from './production-orders/production-orders.component';
import { ProductionResourceFormComponent } from './production-resource-form/production-resource-form.component';
import { BomOperationFormComponent } from './bom-operation-form/bom-operation-form.component';
import { ProductionOrderFormComponent } from './production-order-form/production-order-form.component';



@NgModule({
  declarations: [
    ProductionResourcesComponent,
    BomOperationsComponent,
    ProductionOrdersComponent,
    ProductionResourceFormComponent,
    BomOperationFormComponent,
    ProductionOrderFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'production/production-resource/list', component: ProductionResourcesComponent,       canActivate: [AuthGuardService]},
      {path: 'production/production-resource/new',  component: ProductionResourceFormComponent,    canActivate: [AuthGuardService]},
      {path: 'production/production-resource/:id',  component: ProductionResourceFormComponent,    canActivate: [AuthGuardService]},
      {path: 'production/bom-operation/list',       component: BomOperationsComponent,             canActivate: [AuthGuardService]},
      {path: 'production/bom-operation/new',        component: BomOperationFormComponent,          canActivate: [AuthGuardService]},
      {path: 'production/bom-operation/:id',        component: BomOperationFormComponent,          canActivate: [AuthGuardService]},
      {path: 'production/production-order/list',    component: ProductionOrdersComponent,          canActivate: [AuthGuardService]},
      {path: 'production/production-order/new',     component: ProductionOrderFormComponent,       canActivate: [AuthGuardService]},
      {path: 'production/production-order/:id',     component: ProductionOrderFormComponent,       canActivate: [AuthGuardService]},
    ])
  ]
})
export class ProductionModule { }
