import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { FinanceModule } from './finance/finance.module';
import { PersonnelModule } from './personnel/personnel.module';
import { MaterialModule } from './material/material.module';
import { RequestModule } from './request/request.module';
import { SalesModule } from './sales/sales.module';
import { PurchaseModule } from './purchase/purchase.module';
import { ProductionModule } from './production/production.module';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { ShipmentModule } from './shipment/shipment.module';
import { ProjectModule } from './project/project.module';
import { HelpdeskModule } from './helpdesk/helpdesk.module';
import { BusinessModule } from './business/business.module';
import { SettingsModule } from './settings/settings.module';
import { SharedModule } from './shared/shared.module';

import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './main/login/login.component';
import { AccountRegisterComponent } from './main/account-register/account-register.component';
import { BsNavbarComponent } from './main/bs-navbar/bs-navbar.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    FinanceModule,
    PersonnelModule,
    MaterialModule,
    RequestModule,
    SalesModule,
    PurchaseModule,
    ProductionModule,
    MaintenanceModule,
    ShipmentModule,
    ProjectModule,
    HelpdeskModule,
    BusinessModule,
    SettingsModule,
    SharedModule,
//    AppRoutingModule
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'main/home',                          component: HomeComponent},
      {path: 'main/login',                         component: LoginComponent},
      {path: 'main/bs-navbar',                     component: BsNavbarComponent},
      {path: 'main/account-register',              component: AccountRegisterComponent},
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
