import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: string, state: RouterStateSnapshot) {
    if (this.auth.authorityCheck('PAGE', 'ACCESS', route)) {
        return true;
    }
    this.router.navigate(['/main/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }

}
