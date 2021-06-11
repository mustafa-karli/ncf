import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { RequestForProposalEntryComponent } from './request-for-proposal-entry/request-for-proposal-entry.component';
import { RequestForProposalInitialComponent } from './request-for-proposals-initial/request-for-proposals-initial.component';
import { RequestForProposalPublishedComponent } from './request-for-proposals-published/request-for-proposals-published.component';
import { RequestForProposalCompleteComponent } from './request-for-proposals-complete/request-for-proposals-complete.component';
import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';
import { PurchaseDeliveriesComponent } from './purchase-deliveries/purchase-deliveries.component';
import { PurchaseOrderDeliverComponent } from './purchase-order-deliver/purchase-order-deliver.component';
import { RequestForProposalEntryFormComponent } from './request-for-proposal-entry-form/request-for-proposal-entry-form.component';
import { RequestForProposalInitialFormComponent } from './request-for-proposal-initial-form/request-for-proposal-initial-form.component';
import { RequestForProposalPublishedFormComponent } from './request-for-proposal-published-form/request-for-proposal-published-form.component';
import { RequestForProposalCompleteFormComponent } from './request-for-proposal-complete-form/request-for-proposal-complete-form.component';
import { PurchaseOrderFormComponent } from './purchase-order-form/purchase-order-form.component';
import { PurchaseDeliveryFormComponent } from './purchase-delivery-form/purchase-delivery-form.component';
import { PurchaseOrderDeliverFormComponent } from './purchase-order-deliver-form/purchase-order-deliver-form.component';



@NgModule({
  declarations: [
    RequestForProposalEntryComponent,
    RequestForProposalInitialComponent,
    RequestForProposalPublishedComponent,
    RequestForProposalCompleteComponent,
    PurchaseOrdersComponent,
    PurchaseDeliveriesComponent,
    PurchaseOrderDeliverComponent,
    RequestForProposalEntryFormComponent,
    RequestForProposalInitialFormComponent,
    RequestForProposalPublishedFormComponent,
    RequestForProposalCompleteFormComponent,
    PurchaseOrderFormComponent,
    PurchaseDeliveryFormComponent,
    PurchaseOrderDeliverFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'purchase/request-for-proposal-entry/list', component: RequestForProposalEntryComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/request-for-proposal-entry/new', component: RequestForProposalEntryFormComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/request-for-proposal-entry/:id', component: RequestForProposalEntryFormComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/request-for-proposal-initial/list', component: RequestForProposalInitialComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/request-for-proposal-initial/new', component: RequestForProposalInitialFormComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/request-for-proposal-initial/:id', component: RequestForProposalInitialFormComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/request-for-proposal-published/list', component: RequestForProposalPublishedComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/request-for-proposal-published/new', component: RequestForProposalPublishedFormComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/request-for-proposal-published/:id', component: RequestForProposalPublishedFormComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/request-for-proposal-complete/list', component: RequestForProposalCompleteComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/request-for-proposal-complete/new', component: RequestForProposalCompleteFormComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/request-for-proposal-complete/:id', component: RequestForProposalCompleteFormComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/purchase-order/list', component: PurchaseOrdersComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/purchase-order/new', component: PurchaseOrderFormComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/purchase-order/:id', component: PurchaseOrderFormComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/purchase-delivery/list', component: PurchaseDeliveriesComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/purchase-delivery/new', component: PurchaseDeliveryFormComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/purchase-delivery/:id', component: PurchaseDeliveryFormComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/purchase-order-deliver/list', component: PurchaseOrderDeliverComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/purchase-order-deliver/new', component: PurchaseOrderDeliverFormComponent,    canActivate: [AuthGuardService]},
      {path: 'purchase/purchase-order-deliver/:id', component: PurchaseOrderDeliverFormComponent,    canActivate: [AuthGuardService]},
    ])
  ]
})
export class PurchaseModule { }
