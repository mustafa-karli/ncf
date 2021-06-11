import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccount } from 'src/app/shared/model/nca';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  returnUrl: string = "";
  loading: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    const url = localStorage.getItem('returnUrl');
    if ( url != null )
      this.returnUrl = url;
  }

  login() {
    this.loading = true;
    this.auth.login(this.model.username, this.model.password);
    this.router.navigate([this.returnUrl]);
  }

}
