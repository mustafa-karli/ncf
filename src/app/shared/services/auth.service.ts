import { Injectable } from '@angular/core';
import { UserAccount } from 'src/app/shared/model/nca';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {
  userAccount: UserAccount = {username:"", firstName:"", lastName:"", status:""};

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  login(username: string, password: string) {
    localStorage.setItem('returnUrl', this.route.snapshot.queryParamMap.get('returnUrl') || '/');
    this.userService.get(username, password).subscribe((record: UserAccount) => this.userAccount = record);
  }

  logout() {
    this.userAccount = {username:"", firstName:"", lastName:"", status:""};;
  }

  authorityCheck(otype: string, action: string, objid: string): boolean {
    return true;
  }
}
