import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NsonService } from './services/nson.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AppErrorHandler } from './error/app-error-handler';
import { DomainService } from './services/domain.service';
import { TranslateService } from './services/translate.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  providers: [
    AuthGuardService,
    AuthService,
    NsonService,
    DomainService,
    TranslateService,
    UserService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],

})
export class SharedModule { }
