import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { MaterialTypesComponent } from './material-types/material-types.component';
import { MaterialAttributeGroupsComponent } from './material-attribute-groups/material-attribute-groups.component';
import { MaterialGroupsComponent } from './material-groups/material-groups.component';
import { MaterialsComponent } from './materials/materials.component';
import { ManufacturerFormComponent } from './manufacturer-form/manufacturer-form.component';
import { MaterialTypeFormComponent } from './material-type-form/material-type-form.component';
import { MaterialAttributeGroupFormComponent } from './material-attribute-group-form/material-attribute-group-form.component';
import { MaterialGroupFormComponent } from './material-group-form/material-group-form.component';
import { MaterialFormComponent } from './material-form/material-form.component';



@NgModule({
  declarations: [
    ManufacturersComponent,
    MaterialTypesComponent,
    MaterialAttributeGroupsComponent,
    MaterialGroupsComponent,
    MaterialsComponent,
    ManufacturerFormComponent,
    MaterialTypeFormComponent,
    MaterialAttributeGroupFormComponent,
    MaterialGroupFormComponent,
    MaterialFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'material/manufacturer/list',             component: ManufacturersComponent,               canActivate: [AuthGuardService]},
      {path: 'material/manufacturer/new',              component: ManufacturerFormComponent,            canActivate: [AuthGuardService]},
      {path: 'material/manufacturer/:id',              component: ManufacturerFormComponent,            canActivate: [AuthGuardService]},
      {path: 'material/material-type/list',            component: MaterialTypesComponent,               canActivate: [AuthGuardService]},
      {path: 'material/material-type/new',             component: MaterialTypeFormComponent,            canActivate: [AuthGuardService]},
      {path: 'material/material-type/:id',             component: MaterialTypeFormComponent,            canActivate: [AuthGuardService]},
      {path: 'material/material-attribute-group/list', component: MaterialAttributeGroupsComponent,     canActivate: [AuthGuardService]},
      {path: 'material/material-attribute-group/new',  component: MaterialAttributeGroupFormComponent,  canActivate: [AuthGuardService]},
      {path: 'material/material-attribute-group/:id',  component: MaterialAttributeGroupFormComponent,  canActivate: [AuthGuardService]},
      {path: 'material/material-group/list',           component: MaterialGroupsComponent,              canActivate: [AuthGuardService]},
      {path: 'material/material-group/new',            component: MaterialGroupFormComponent,           canActivate: [AuthGuardService]},
      {path: 'material/material-group/:id',            component: MaterialGroupFormComponent,           canActivate: [AuthGuardService]},
      {path: 'material/material/list',                 component: MaterialsComponent,                   canActivate: [AuthGuardService]},
      {path: 'material/material/new',                  component: MaterialFormComponent,                canActivate: [AuthGuardService]},
      {path: 'material/material/:id',                  component: MaterialFormComponent,                canActivate: [AuthGuardService]},
    ])
  ]
})
export class MaterialModule { }
