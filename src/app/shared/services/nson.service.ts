import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { AppError } from 'src/app/shared/error/app-error';
import { NotFoundError } from 'src/app/shared/error/not-found-error';
import { BadInput } from 'src/app/shared/error/bad-input';
import { environment } from 'src/environments/environment';
import { ModelPath, TableDefinition } from 'src/app/shared/model/basis';

@Injectable()
export class NsonService {

  private getAllUrl = environment.httphost + 'getall/';
  private getUrl    = environment.httphost + 'get/';
  private postUrl   = environment.httphost + 'post/';
  private deleteUrl = environment.httphost + 'delete/';
  private routeUrl  = environment.httphost + 'route/';
  private routesUrl = environment.httphost + 'routes/';
  private headers   = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'q=0.8;application/json;q=0.9')
    .set('Access-Control-Allow-Origin', '*');

  private scenarios: Map<string, ModelPath>;

  constructor(private _http: HttpClient) {
    this.scenarios = new Map<string, ModelPath>();
    this.loadScenarios().subscribe(response => {
      const modelRoutes = response;
      modelRoutes.forEach(scenario => {
        this.scenarios.set(scenario.scenarioId, scenario);
      });
    });
  }

  select(scenarioId: string, id: string): Observable<any> {
    let url: string;
    if (id) {
      url = this.getUrl + '?scenarioId=' + scenarioId + '&id=' + id;
    } else {
      url = this.getAllUrl + '?scenarioId=' + scenarioId;
    }
    return this._http
    .get<any>(url, { 'headers': this.headers })
    .pipe(catchError(this.handleError));
  }

  selectAll(scenarioId: string): Observable<any> {
    let url: string = this.getAllUrl + '?scenarioId=' + scenarioId;
    return this._http
    .get<any>(url, { 'headers': this.headers })
    .pipe(catchError(this.handleError));
  }

  insert(scenarioId: string, record: { id: string; }): Observable<any> {
    const url = this.postUrl + '?scenarioId=' + scenarioId;
    const body = JSON.stringify(record);
    console.log(body);
    return this._http
      .post(url, JSON.stringify(record), { 'headers': this.headers })
      .pipe(catchError(this.handleError));
    }

  update(scenarioId: string, record: any): Observable<any> {
    const url = this.postUrl + '?scenarioId=' + scenarioId;
    const body = JSON.stringify(record);
    console.log(body);
    return this._http
      .post(url, body, { 'headers': this.headers })
      .pipe(catchError(this.handleError));
    }

  delete(scenarioId: string, id:string): Observable<any> {
    return this._http
      .delete(this.deleteUrl + '?scenarioId=' + scenarioId + '&id=' + id)
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

  getScenario(scenarioId: string): any {
    const cacheRoute = this.scenarios.get(scenarioId);
    if (cacheRoute) return cacheRoute ;
    return [];
  }

  putScenario(key: string, path: ModelPath) {
    this.scenarios.set(key, path);
  }

  loadScenario(scenarioId: string): Observable<ModelPath> {
    return this._http
      .get<ModelPath>(this.routeUrl + '?scenarioId=' + scenarioId, { 'headers': this.headers })
      .pipe(catchError(this.handleError));
  }

  loadScenarios(): Observable<ModelPath[]> {
    return this._http
      .get<ModelPath[]>(this.routesUrl, { 'headers': this.headers })
      .pipe(catchError(this.handleError));
  }

}
