import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { CategoriesComponent } from './categories/categories.component';
import { ProjectsComponent } from './projects/projects.component';
import { SubcontractorsComponent } from './subcontractors/subcontractors.component';
import { ProjectManhoursComponent } from './project-manhours/project-manhours.component';
import { ProjectQuantitiesComponent } from './project-quantities/project-quantities.component';
import { ApproveProgressComponent } from './approve-progress/approve-progress.component';
import { ApproveManhourComponent } from './approve-manhour/approve-manhour.component';
import { ApproveQuantityComponent } from './approve-quantity/approve-quantity.component';
import { ProjectReportsComponent } from './project-reports/project-reports.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { SubcontractorFormComponent } from './subcontractor-form/subcontractor-form.component';
import { ProjectManhourFormComponent } from './project-manhour-form/project-manhour-form.component';
import { ProjectQuantityFormComponent } from './project-quantity-form/project-quantity-form.component';
import { ApproveProgressFormComponent } from './approve-progress-form/approve-progress-form.component';
import { ApproveManhourFormComponent } from './approve-manhour-form/approve-manhour-form.component';
import { ApproveQuantityFormComponent } from './approve-quantity-form/approve-quantity-form.component';
import { ProjectReportFormComponent } from './project-report-form/project-report-form.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    ProjectsComponent,
    SubcontractorsComponent,
    ProjectManhoursComponent,
    ProjectQuantitiesComponent,
    ApproveProgressComponent,
    ApproveManhourComponent,
    ApproveQuantityComponent,
    ProjectReportsComponent,
    CategoryFormComponent,
    ProjectFormComponent,
    SubcontractorFormComponent,
    ProjectManhourFormComponent,
    ProjectQuantityFormComponent,
    ApproveProgressFormComponent,
    ApproveManhourFormComponent,
    ApproveQuantityFormComponent,
    ProjectReportFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'project/category/list',         component: CategoriesComponent,             canActivate: [AuthGuardService]},
      {path: 'project/category/new',          component: CategoryFormComponent,           canActivate: [AuthGuardService]},
      {path: 'project/category/:id',          component: CategoryFormComponent,           canActivate: [AuthGuardService]},
      {path: 'project/project/list',          component: ProjectsComponent,               canActivate: [AuthGuardService]},
      {path: 'project/project/new',           component: ProjectFormComponent,            canActivate: [AuthGuardService]},
      {path: 'project/project/:id',           component: ProjectFormComponent,            canActivate: [AuthGuardService]},
      {path: 'project/subcontractor/list',    component: SubcontractorsComponent,         canActivate: [AuthGuardService]},
      {path: 'project/subcontractor/new',     component: SubcontractorFormComponent,      canActivate: [AuthGuardService]},
      {path: 'project/subcontractor/:id',     component: SubcontractorFormComponent,      canActivate: [AuthGuardService]},
      {path: 'project/project-manhour/list',  component: ProjectManhoursComponent,        canActivate: [AuthGuardService]},
      {path: 'project/project-manhour/new',   component: ProjectManhourFormComponent,     canActivate: [AuthGuardService]},
      {path: 'project/project-manhour/:id',   component: ProjectManhourFormComponent,     canActivate: [AuthGuardService]},
      {path: 'project/project-quantity/list', component: ProjectQuantitiesComponent,      canActivate: [AuthGuardService]},
      {path: 'project/project-quantity/new',  component: ProjectQuantityFormComponent,    canActivate: [AuthGuardService]},
      {path: 'project/project-quantity/:id',  component: ProjectQuantityFormComponent,    canActivate: [AuthGuardService]},
      {path: 'project/approve-progress/list', component: ApproveProgressComponent,        canActivate: [AuthGuardService]},
      {path: 'project/approve-progress/new',  component: ApproveProgressFormComponent,    canActivate: [AuthGuardService]},
      {path: 'project/approve-progress/:id',  component: ApproveProgressFormComponent,    canActivate: [AuthGuardService]},
      {path: 'project/approve-manhour/list',  component: ApproveManhourComponent,         canActivate: [AuthGuardService]},
      {path: 'project/approve-manhour/new',   component: ApproveManhourFormComponent,     canActivate: [AuthGuardService]},
      {path: 'project/approve-manhour/:id',   component: ApproveManhourFormComponent,     canActivate: [AuthGuardService]},
      {path: 'project/approve-quantity/list', component: ApproveQuantityComponent,        canActivate: [AuthGuardService]},
      {path: 'project/approve-quantity/new',  component: ApproveQuantityFormComponent,    canActivate: [AuthGuardService]},
      {path: 'project/approve-quantity/:id',  component: ApproveQuantityFormComponent,    canActivate: [AuthGuardService]},
      {path: 'project/project-report/list',   component: ProjectReportsComponent,         canActivate: [AuthGuardService]},
      {path: 'project/project-report/new',    component: ProjectReportFormComponent,      canActivate: [AuthGuardService]},
      {path: 'project/project-report/:id',    component: ProjectReportFormComponent,      canActivate: [AuthGuardService]},
    ])
  ]
})
export class ProjectModule { }
