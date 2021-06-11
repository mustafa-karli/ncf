import { Injectable } from '@angular/core';
import { UserAccount } from 'src/app/shared/model/nca';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BadInput } from 'src/app/shared/error/bad-input';
import { NotFoundError } from 'src/app/shared/error/not-found-error';
import { AppError } from 'src/app/shared/error/app-error';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

  private loginUrl = environment.httphost + 'login?';

  constructor(private _http: HttpClient) { }

  save(user: UserAccount) {

  }

  get(username: string, password: string): Observable<UserAccount> {
    const url = this.loginUrl + 'username=' + username + '&passtext=' + password;
    return this._http
      .get<UserAccount>(url)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error.json()));
  }

}
