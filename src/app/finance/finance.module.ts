import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { TaxTypesComponent } from './tax-types/tax-types.component';
import { AccountMastersComponent } from './account-masters/account-masters.component';
import { AccountSchemasComponent } from './account-schemas/account-schemas.component';
import { AccountTransactionTemplatesComponent } from './account-transaction-templates/account-transaction-templates.component';
import { BanksComponent } from './banks/banks.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { TaxTypeFormComponent } from './tax-type-form/tax-type-form.component';
import { AccountMasterFormComponent } from './account-master-form/account-master-form.component';
import { AccountSchemaFormComponent } from './account-schema-form/account-schema-form.component';
import { AccountTransactionTemplateFormComponent } from './account-transaction-template-form/account-transaction-template-form.component';
import { BankFormComponent } from './bank-form/bank-form.component';
import { BankAccountFormComponent } from './bank-account-form/bank-account-form.component';



@NgModule({
  declarations: [
    TaxTypesComponent,
    AccountMastersComponent,
    AccountSchemasComponent,
    AccountTransactionTemplatesComponent,
    BanksComponent,
    BankAccountsComponent,
    TaxTypeFormComponent,
    AccountMasterFormComponent,
    AccountSchemaFormComponent,
    AccountTransactionTemplateFormComponent,
    BankFormComponent,
    BankAccountFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'finance/tax-type/list', component: TaxTypesComponent,    canActivate: [AuthGuardService]},
      {path: 'finance/tax-type/new', component: TaxTypeFormComponent,    canActivate: [AuthGuardService]},
      {path: 'finance/tax-type/:id', component: TaxTypeFormComponent,    canActivate: [AuthGuardService]},
      {path: 'finance/account-master/list', component: AccountMastersComponent,    canActivate: [AuthGuardService]},
      {path: 'finance/account-master/new', component: AccountMasterFormComponent,    canActivate: [AuthGuardService]},
      {path: 'finance/account-master/:id', component: AccountMasterFormComponent,    canActivate: [AuthGuardService]},
      {path: 'finance/account-schema/list', component: AccountSchemasComponent,    canActivate: [AuthGuardService]},
      {path: 'finance/account-schema/new', component: AccountSchemaFormComponent,    canActivate: [AuthGuardService]},
      {path: 'finance/account-schema/:id', component: AccountSchemaFormComponent,    canActivate: [AuthGuardService]},
      {path: 'finance/account-transaction-template/list', component: AccountTransactionTemplatesComponent,    canActivate: [AuthGuardService]},
      {path: 'finance/account-transaction-template/new', component: AccountTransactionTemplateFormComponent,    canActivate: [AuthGuardService]},
      {path: 'finance/account-transaction-template/:id', component: AccountTransactionTemplateFormComponent,    canActivate: [AuthGuardService]},
      {path: 'finance/bank/list', component: BanksComponent,    canActivate: [AuthGuardService]},
      {path: 'finance/bank/new', component: BankFormComponent,    canActivate: [AuthGuardService]},
      {path: 'finance/bank/:id', component: BankFormComponent,    canActivate: [AuthGuardService]},
      {path: 'finance/bank-account/list', component: BankAccountsComponent,    canActivate: [AuthGuardService]},
      {path: 'finance/bank-account/new', component: BankAccountFormComponent,    canActivate: [AuthGuardService]},
      {path: 'finance/bank-account/:id', component: BankAccountFormComponent,    canActivate: [AuthGuardService]},
    ])
  ]
})
export class FinanceModule { }
