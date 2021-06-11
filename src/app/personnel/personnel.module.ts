import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { PositionTypesComponent } from './position-types/position-types.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { PeopleComponent } from './people/people.component';
import { EmployeesComponent } from './employees/employees.component';
import { QualificationFormComponent } from './qualification-form/qualification-form.component';
import { PositionTypeFormComponent } from './position-type-form/position-type-form.component';
import { OrganizationFormComponent } from './organization-form/organization-form.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';



@NgModule({
  declarations: [
    QualificationsComponent,
    PositionTypesComponent,
    OrganizationsComponent,
    PeopleComponent,
    EmployeesComponent,
    QualificationFormComponent,
    PositionTypeFormComponent,
    OrganizationFormComponent,
    PersonFormComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'personnel/qualification/list', component: QualificationsComponent,      canActivate: [AuthGuardService]},
      {path: 'personnel/qualification/new',  component: QualificationFormComponent,   canActivate: [AuthGuardService]},
      {path: 'personnel/qualification/:id',  component: QualificationFormComponent,   canActivate: [AuthGuardService]},
      {path: 'personnel/position-type/list', component: PositionTypesComponent,       canActivate: [AuthGuardService]},
      {path: 'personnel/position-type/new',  component: PositionTypeFormComponent,    canActivate: [AuthGuardService]},
      {path: 'personnel/position-type/:id',  component: PositionTypeFormComponent,    canActivate: [AuthGuardService]},
      {path: 'personnel/organization/list',  component: OrganizationsComponent,       canActivate: [AuthGuardService]},
      {path: 'personnel/organization/new',   component: OrganizationFormComponent,    canActivate: [AuthGuardService]},
      {path: 'personnel/organization/:id',   component: OrganizationFormComponent,    canActivate: [AuthGuardService]},
      {path: 'personnel/person/list',        component: PeopleComponent,              canActivate: [AuthGuardService]},
      {path: 'personnel/person/new',         component: PersonFormComponent,          canActivate: [AuthGuardService]},
      {path: 'personnel/person/:id',         component: PersonFormComponent,          canActivate: [AuthGuardService]},
      {path: 'personnel/employee/list',      component: EmployeesComponent,           canActivate: [AuthGuardService]},
      {path: 'personnel/employee/new',       component: EmployeeFormComponent,        canActivate: [AuthGuardService]},
      {path: 'personnel/employee/:id',       component: EmployeeFormComponent,        canActivate: [AuthGuardService]},
    ])
  ]
})
export class PersonnelModule { }
