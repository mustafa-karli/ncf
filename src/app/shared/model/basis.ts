import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomainValue, TableAction, TableContentType } from './nca';
import { DomainService } from 'src/app/shared/services/domain.service';
import { TranslateService } from 'src/app/shared/services/translate.service';

export const T_BYTE  = 1;
export const T_SHORT = 2;
export const T_INT   = 3;
export const T_LONG  = 4;
export const T_FLT   = 5;
export const T_STR   = 6;
export const T_DATE  = 7;


export interface OperationModel {
  oc: string;
}

export interface TableCache {
  key: string;
  value: string;
}

export interface Lookup {
  select: string;
  options: TableCache[];
}

export interface UserPage {
  pageCaption: string;
  pageIcon:    string;
  url:         string;
}

export interface UserMenu {
  menu:        string;
  menuCaption: string;
  menuIcon:    string;
  pages:       UserPage[];
}

export interface ModelPath {
  scenarioId:  string;
  table:       TableDefinition;
  caption:     string;
  camelName:   string;
  pathType:    string;
  parentKeys?: TableField[];
  childKeys?:  TableField[];
  children?:   ModelPath[];
}

export interface TableField {
  fieldName:   string;
  camelName:   string;
  type:        number;
  size:        number;
  scale:       number;
  order:       number;
  required:    boolean;
  translated:  boolean;
  keyField:    boolean;
  editStyle:   string;
  searchStyle: string;
  lookupStyle: string;
  minValue:    string;
  maxValue:    string;
}

export class TableDefinition {
  tableName:             string = "";
  camelName:             string = "";
  titleName:             string = "";
  module:                string = "";
  orderBy:               string = "";
  keys:                  TableField[] = [];
  fields:                TableField[] = [];
  contentTypes:          TableContentType[] = [];
  actions:               TableAction[] = [];
  clientDependent:       boolean = false;
  organizationDependent: boolean = false;
  cashInHash:            boolean = false;
  cache:                 TableCache[] = [];
  lookups:               TableCache[][] = [];

  public idToStr(record: any): string {
    let s = record[this.keys[0].camelName];
    for (let z = 1; z < this.keys.length; z++) {
      s = s + ',' + this.keys[z].camelName;
    }
    return s;
  }

  public setId(record: any, id: string) {
    const s: string[] = id.split(',');
    let i = 0;
    for (const key of this.keys) {
      if (i < (s.length - 1)) {
        record[key.camelName] = s[i];
        i++;
      }
    }
  }

  asFormGroup(record: any): FormGroup {
    const fg = new FormGroup({});
    for (const field of this.fields) {
      if (field.required) {
        fg.addControl(field.camelName, new FormControl(record[field.camelName], Validators.required));
      } else {
        fg.addControl(field.camelName, new FormControl(record[field.camelName]));
      }
    }
    return fg;
  }

  loodLookups(domainService: DomainService, translateService: TranslateService) {
    if (this.lookups.length > 0) { return; }
    for (const field of this.fields) {
      if (field.editStyle.length > 2) {
        let options: DomainValue[] = domainService.get(field.editStyle);
        if (options != null ) {
          let translated: TableCache[] = [];
          for (const option of options) {
            const val = translateService.get(option.caption);
            translated.push({'key': option.refvalue, 'value': val});
          }
          this.lookups?.push(translated);
        }
      } else {
        this.lookups.push([]);
      }
    }
  }
}

