import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { AuthorityGroupsComponent } from './authority-groups/authority-groups.component';
import { MenusComponent } from './menus/menus.component';
import { UserAccountsComponent } from './user-accounts/user-accounts.component';
import { DomainsComponent } from './domains/domains.component';
import { LanguagesComponent } from './languages/languages.component';
import { UnitConversionsComponent } from './unit-conversions/unit-conversions.component';
import { ContentServersComponent } from './content-servers/content-servers.component';
import { ContentUploadComponent } from './content-upload/content-upload.component';
import { NotificationTypesComponent } from './notification-types/notification-types.component';
import { TableControllerStaticsComponent } from './table-controller-statics/table-controller-statics.component';
import { TableViewScenariosComponent } from './table-view-scenarios/table-view-scenarios.component';
import { AuthorityGroupFormComponent } from './authority-group-form/authority-group-form.component';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { UserAccountFormComponent } from './user-account-form/user-account-form.component';
import { DomainFormComponent } from './domain-form/domain-form.component';
import { LanguageFormComponent } from './language-form/language-form.component';
import { UnitConversionFormComponent } from './unit-conversion-form/unit-conversion-form.component';
import { ContentServerFormComponent } from './content-server-form/content-server-form.component';
import { ContentUploadFormComponent } from './content-upload-form/content-upload-form.component';
import { NotificationTypeFormComponent } from './notification-type-form/notification-type-form.component';
import { TableControllerStaticFormComponent } from './table-controller-static-form/table-controller-static-form.component';
import { TableViewScenarioFormComponent } from './table-view-scenario-form/table-view-scenario-form.component';



@NgModule({
  declarations: [
    AuthorityGroupsComponent,
    MenusComponent,
    UserAccountsComponent,
    DomainsComponent,
    LanguagesComponent,
    UnitConversionsComponent,
    ContentServersComponent,
    ContentUploadComponent,
    NotificationTypesComponent,
    TableControllerStaticsComponent,
    TableViewScenariosComponent,
    AuthorityGroupFormComponent,
    MenuFormComponent,
    UserAccountFormComponent,
    DomainFormComponent,
    LanguageFormComponent,
    UnitConversionFormComponent,
    ContentServerFormComponent,
    ContentUploadFormComponent,
    NotificationTypeFormComponent,
    TableControllerStaticFormComponent,
    TableViewScenarioFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'settings/authority-group/list',         component: AuthorityGroupsComponent,       canActivate: [AuthGuardService]},
      {path: 'settings/authority-group/new',          component: AuthorityGroupFormComponent,    canActivate: [AuthGuardService]},
      {path: 'settings/authority-group/:id',          component: AuthorityGroupFormComponent,    canActivate: [AuthGuardService]},
      {path: 'settings/menu/list',                    component: MenusComponent,                 canActivate: [AuthGuardService]},
      {path: 'settings/menu/new',                     component: MenuFormComponent,              canActivate: [AuthGuardService]},
      {path: 'settings/menu/:id',                     component: MenuFormComponent,              canActivate: [AuthGuardService]},
      {path: 'settings/user-account/list',            component: UserAccountsComponent,          canActivate: [AuthGuardService]},
      {path: 'settings/user-account/new',             component: UserAccountFormComponent,       canActivate: [AuthGuardService]},
      {path: 'settings/user-account/:id',             component: UserAccountFormComponent,       canActivate: [AuthGuardService]},
      {path: 'settings/domain/list',                  component: DomainsComponent,               canActivate: [AuthGuardService]},
      {path: 'settings/domain/new',                   component: DomainFormComponent,            canActivate: [AuthGuardService]},
      {path: 'settings/domain/:id',                   component: DomainFormComponent,            canActivate: [AuthGuardService]},
      {path: 'settings/language/list',                component: LanguagesComponent,             canActivate: [AuthGuardService]},
      {path: 'settings/language/new',                 component: LanguageFormComponent,          canActivate: [AuthGuardService]},
      {path: 'settings/language/:id',                 component: LanguageFormComponent,          canActivate: [AuthGuardService]},
      {path: 'settings/unit-conversion/list',         component: UnitConversionsComponent,       canActivate: [AuthGuardService]},
      {path: 'settings/unit-conversion/new',          component: UnitConversionFormComponent,    canActivate: [AuthGuardService]},
      {path: 'settings/unit-conversion/:id',          component: UnitConversionFormComponent,    canActivate: [AuthGuardService]},
      {path: 'settings/content-server/list',          component: ContentServersComponent,        canActivate: [AuthGuardService]},
      {path: 'settings/content-server/new',           component: ContentServerFormComponent,     canActivate: [AuthGuardService]},
      {path: 'settings/content-server/:id',           component: ContentServerFormComponent,     canActivate: [AuthGuardService]},
      {path: 'settings/content-upload/list',          component: ContentUploadComponent,         canActivate: [AuthGuardService]},
      {path: 'settings/content-upload/new',           component: ContentUploadFormComponent,     canActivate: [AuthGuardService]},
      {path: 'settings/content-upload/:id',           component: ContentUploadFormComponent,     canActivate: [AuthGuardService]},
      {path: 'settings/notification-type/list',       component: NotificationTypesComponent,            canActivate: [AuthGuardService]},
      {path: 'settings/notification-type/new',        component: NotificationTypeFormComponent,         canActivate: [AuthGuardService]},
      {path: 'settings/notification-type/:id',        component: NotificationTypeFormComponent,         canActivate: [AuthGuardService]},
      {path: 'settings/table-controller-static/list', component: TableControllerStaticsComponent,       canActivate: [AuthGuardService]},
      {path: 'settings/table-controller-static/new',  component: TableControllerStaticFormComponent,    canActivate: [AuthGuardService]},
      {path: 'settings/table-controller-static/:id',  component: TableControllerStaticFormComponent,    canActivate: [AuthGuardService]},
      {path: 'settings/table-view-scenario/list',     component: TableViewScenariosComponent,           canActivate: [AuthGuardService]},
      {path: 'settings/table-view-scenario/new',      component: TableViewScenarioFormComponent,        canActivate: [AuthGuardService]},
      {path: 'settings/table-view-scenario/:id',      component: TableViewScenarioFormComponent,        canActivate: [AuthGuardService]},
    ])
  ]
})
export class SettingsModule { }
