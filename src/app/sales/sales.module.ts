import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { ProductPricesComponent } from './product-prices/product-prices.component';
import { SalesCampaignsComponent } from './sales-campaigns/sales-campaigns.component';
import { ProductPriceCommitmentFastComponent } from './product-price-commitment-fast/product-price-commitment-fast.component';
import { ProductPriceCommitmentsComponent } from './product-price-commitments/product-price-commitments.component';
import { SalesCartComponent } from './sales-cart/sales-cart.component';
import { SalesOrdersComponent } from './sales-orders/sales-orders.component';
import { MySalesOrdersComponent } from './my-sales-orders/my-sales-orders.component';
import { SalesReportsComponent } from './sales-reports/sales-reports.component';
import { SalesOwnerReportsComponent } from './sales-owner-reports/sales-owner-reports.component';
import { SalesVendorReportsComponent } from './sales-vendor-reports/sales-vendor-reports.component';
import { SalesCustomerReportsComponent } from './sales-customer-reports/sales-customer-reports.component';
import { ProductPriceFormComponent } from './product-price-form/product-price-form.component';
import { SalesCampaignFormComponent } from './sales-campaign-form/sales-campaign-form.component';
import { ProductPriceCommitmentFastFormComponent } from './product-price-commitment-fast-form/product-price-commitment-fast-form.component';
import { ProductPriceCommitmentFormComponent } from './product-price-commitment-form/product-price-commitment-form.component';
import { SalesCartFormComponent } from './sales-cart-form/sales-cart-form.component';
import { SalesOrderFormComponent } from './sales-order-form/sales-order-form.component';
import { MySalesOrderFormComponent } from './my-sales-order-form/my-sales-order-form.component';
import { SalesReportFormComponent } from './sales-report-form/sales-report-form.component';
import { SalesOwnerReportFormComponent } from './sales-owner-report-form/sales-owner-report-form.component';
import { SalesVendorReportFormComponent } from './sales-vendor-report-form/sales-vendor-report-form.component';
import { SalesCustomerReportFormComponent } from './sales-customer-report-form/sales-customer-report-form.component';



@NgModule({
  declarations: [
    ProductPricesComponent,
    SalesCampaignsComponent,
    ProductPriceCommitmentFastComponent,
    ProductPriceCommitmentsComponent,
    SalesCartComponent,
    SalesOrdersComponent,
    MySalesOrdersComponent,
    SalesReportsComponent,
    SalesOwnerReportsComponent,
    SalesVendorReportsComponent,
    SalesCustomerReportsComponent,
    ProductPriceFormComponent,
    SalesCampaignFormComponent,
    ProductPriceCommitmentFastFormComponent,
    ProductPriceCommitmentFormComponent,
    SalesCartFormComponent,
    SalesOrderFormComponent,
    MySalesOrderFormComponent,
    SalesReportFormComponent,
    SalesOwnerReportFormComponent,
    SalesVendorReportFormComponent,
    SalesCustomerReportFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'sales/product-price/list', component: ProductPricesComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/product-price/new', component: ProductPriceFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/product-price/:id', component: ProductPriceFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-campaign/list', component: SalesCampaignsComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-campaign/new', component: SalesCampaignFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-campaign/:id', component: SalesCampaignFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/product-price-commitment-fast/list', component: ProductPriceCommitmentFastComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/product-price-commitment-fast/new', component: ProductPriceCommitmentFastFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/product-price-commitment-fast/:id', component: ProductPriceCommitmentFastFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/product-price-commitment/list', component: ProductPriceCommitmentsComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/product-price-commitment/new', component: ProductPriceCommitmentFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/product-price-commitment/:id', component: ProductPriceCommitmentFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-cart/list', component: SalesCartComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-cart/new', component: SalesCartFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-cart/:id', component: SalesCartFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-order/list', component: SalesOrdersComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-order/new', component: SalesOrderFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-order/:id', component: SalesOrderFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/my-sales-order/list', component: MySalesOrdersComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/my-sales-order/new', component: MySalesOrderFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/my-sales-order/:id', component: MySalesOrderFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-report/list', component: SalesReportsComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-report/new', component: SalesReportFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-report/:id', component: SalesReportFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-owner-report/list', component: SalesOwnerReportsComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-owner-report/new', component: SalesOwnerReportFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-owner-report/:id', component: SalesOwnerReportFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-vendor-report/list', component: SalesVendorReportsComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-vendor-report/new', component: SalesVendorReportFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-vendor-report/:id', component: SalesVendorReportFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-customer-report/list', component: SalesCustomerReportsComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-customer-report/new', component: SalesCustomerReportFormComponent,    canActivate: [AuthGuardService]},
      {path: 'sales/sales-customer-report/:id', component: SalesCustomerReportFormComponent,    canActivate: [AuthGuardService]},
    ])
  ]
})
export class SalesModule { }
