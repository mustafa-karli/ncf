import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { BusinessServicesComponent } from './business-services/business-services.component';
import { PartnerCertificationTypesComponent } from './partner-certification-types/partner-certification-types.component';
import { BusinessPartnersComponent } from './business-partners/business-partners.component';
import { BusinessOwnersComponent } from './business-owners/business-owners.component';
import { VendorsComponent } from './vendors/vendors.component';
import { CustomersComponent } from './customers/customers.component';
import { MyCompanyComponent } from './my-company/my-company.component';
import { BusinessReportsComponent } from './business-reports/business-reports.component';
import { BusinessServiceFormComponent } from './business-service-form/business-service-form.component';
import { PartnerCertificationTypeFormComponent } from './partner-certification-type-form/partner-certification-type-form.component';
import { BusinessPartnerFormComponent } from './business-partner-form/business-partner-form.component';
import { BusinessOwnerFormComponent } from './business-owner-form/business-owner-form.component';
import { VendorFormComponent } from './vendor-form/vendor-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { MyCompanyFormComponent } from './my-company-form/my-company-form.component';
import { BusinessReportFormComponent } from './business-report-form/business-report-form.component';



@NgModule({
  declarations: [
    BusinessServicesComponent,
    PartnerCertificationTypesComponent,
    BusinessPartnersComponent,
    BusinessOwnersComponent,
    VendorsComponent,
    CustomersComponent,
    MyCompanyComponent,
    BusinessReportsComponent,
    BusinessServiceFormComponent,
    PartnerCertificationTypeFormComponent,
    BusinessPartnerFormComponent,
    BusinessOwnerFormComponent,
    VendorFormComponent,
    CustomerFormComponent,
    MyCompanyFormComponent,
    BusinessReportFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'business/business-service/list', component: BusinessServicesComponent,    canActivate: [AuthGuardService]},
      {path: 'business/business-service/new', component: BusinessServiceFormComponent,    canActivate: [AuthGuardService]},
      {path: 'business/business-service/:id', component: BusinessServiceFormComponent,    canActivate: [AuthGuardService]},
      {path: 'business/partner-certification-type/list', component: PartnerCertificationTypesComponent,    canActivate: [AuthGuardService]},
      {path: 'business/partner-certification-type/new', component: PartnerCertificationTypeFormComponent,    canActivate: [AuthGuardService]},
      {path: 'business/partner-certification-type/:id', component: PartnerCertificationTypeFormComponent,    canActivate: [AuthGuardService]},
      {path: 'business/business-partner/list', component: BusinessPartnersComponent,    canActivate: [AuthGuardService]},
      {path: 'business/business-partner/new', component: BusinessPartnerFormComponent,    canActivate: [AuthGuardService]},
      {path: 'business/business-partner/:id', component: BusinessPartnerFormComponent,    canActivate: [AuthGuardService]},
      {path: 'business/business-owner/list', component: BusinessOwnersComponent,    canActivate: [AuthGuardService]},
      {path: 'business/business-owner/new', component: BusinessOwnerFormComponent,    canActivate: [AuthGuardService]},
      {path: 'business/business-owner/:id', component: BusinessOwnerFormComponent,    canActivate: [AuthGuardService]},
      {path: 'business/vendor/list', component: VendorsComponent,    canActivate: [AuthGuardService]},
      {path: 'business/vendor/new', component: VendorFormComponent,    canActivate: [AuthGuardService]},
      {path: 'business/vendor/:id', component: VendorFormComponent,    canActivate: [AuthGuardService]},
      {path: 'business/customer/list', component: CustomersComponent,    canActivate: [AuthGuardService]},
      {path: 'business/customer/new', component: CustomerFormComponent,    canActivate: [AuthGuardService]},
      {path: 'business/customer/:id', component: CustomerFormComponent,    canActivate: [AuthGuardService]},
      {path: 'business/my-company/list', component: MyCompanyComponent,    canActivate: [AuthGuardService]},
      {path: 'business/my-company/new', component: MyCompanyFormComponent,    canActivate: [AuthGuardService]},
      {path: 'business/my-company/:id', component: MyCompanyFormComponent,    canActivate: [AuthGuardService]},
      {path: 'business/business-report/list', component: BusinessReportsComponent,    canActivate: [AuthGuardService]},
      {path: 'business/business-report/new', component: BusinessReportFormComponent,    canActivate: [AuthGuardService]},
      {path: 'business/business-report/:id', component: BusinessReportFormComponent,    canActivate: [AuthGuardService]},
    ])
  ]
})
export class BusinessModule { }
