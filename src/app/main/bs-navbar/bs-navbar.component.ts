import { Component, OnInit } from '@angular/core';
import { UserAccount } from 'src/app/shared/model/nca';
import { Observable } from 'rxjs/';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
//  cart$: Observable<string>;
//  userAccount: UserAccount;

  constructor(public auth: AuthService) {
  }

  ngOnInit() {
//    this.userAccount = this.auth.userAccount;
//    this.cart$ = null;
//    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout() {
    this.auth.logout();
  }

}
