import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NcaCache } from 'src/app/shared/abstract/nca-cache';
import { Language, CaptionTranslation } from '../model/nca';

@Injectable({
  providedIn: 'root'
})
export class TranslateService implements OnInit, NcaCache {

  private languageUrl = environment.httphost + 'get/scenarioId=LANGUAGE&id=';

  constructor(private _http: HttpClient, private langcode: string) {}

  ngOnInit(): void {
    this._http.get<Language>(this.languageUrl + this.langcode)
    .subscribe({ next: record => { if ( record != null ) localStorage.setItem('language', JSON.stringify(record)); }});
  }
  
  get(key: string) {
    const langStr = localStorage.getItem('language');
    if ( langStr == null ) return key;
    const lang: Language = JSON.parse(langStr);
    const trans = lang['captionTranslations'];
    if ( trans == null ) return key;
    const label = trans.find(x => x.caption == key)?.labellower;
    if ( label == null ) return key;
    return label;
  }

}
