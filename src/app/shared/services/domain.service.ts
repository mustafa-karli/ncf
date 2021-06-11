import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NcaCache } from 'src/app/shared/abstract/nca-cache';
import { DomainName, DomainValue} from 'src/app/shared/model/nca';

@Injectable({
  providedIn: 'root'
})
export class DomainService implements NcaCache {

  private domainUrl   = environment.httphost + 'getall/scenarioId=DOMAIN_NAME_1ST';

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http.get<DomainName[]>(this.domainUrl)
      .subscribe({ next: records => {
          for (const record of records) {
            localStorage.setItem(record['domain'], JSON.stringify(record['domainValues']));
          }
        }
      });
  }

  get(key: string): DomainValue[] {
    const options = localStorage.getItem(key);
    if ( options == null )
      return [];
    return JSON.parse(options);
  }

}
