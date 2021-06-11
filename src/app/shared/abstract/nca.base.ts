import { Router, ActivatedRoute } from '@angular/router';
import { NsonService } from 'src/app/shared/services/nson.service';
import { AppError } from 'src/app/shared/error/app-error';
import { BadInput } from 'src/app/shared/error/bad-input';
import { NotFoundError } from 'src/app/shared/error//not-found-error';
import { ModelPath } from 'src/app/shared/model/basis';
import { OperationModel } from 'src/app/shared/model/basis';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';
import {TableModule} from 'primeng/table';


export abstract class NcaBase implements OnDestroy {

  scenario: ModelPath;
  records: OperationModel[] = [];
  record: OperationModel = {oc:"R"};
  recordCount: number = 0;
  subscription: Subscription = new Subscription;
  rootpage: string = "";

  constructor(
    protected service: NsonService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected scenarioId: string,
    protected ocode: string) {
      this.scenario = this.service.getScenario(scenarioId);
      if (this.scenario.scenarioId == scenarioId) {
        console.log('Scenario retreived from cache : ' + this.scenario.camelName);
        this.rootpage = this.scenario.table.module + '/' + this.scenario.table.camelName;
      } else {
        this.service.loadScenario(this.scenarioId).subscribe(scenario => {
          this.scenario = scenario;
          this.service.putScenario(scenarioId, scenario);
          this.rootpage = this.scenario.table.module + '/' + this.scenario.table.camelName;
        });
      }
      const id = this.route.snapshot.paramMap.get('id');
      if (this.ocode === 'R') {
        if (id) {
          this.subscription = this.service.select(this.scenarioId, id).subscribe(records => {
            this.records = records;
            this.initializeTable(records);
          });
        } else {
          this.subscription = this.service.selectAll(this.scenarioId).subscribe(records => {
            this.records = records;
            this.initializeTable(records);
          });
        }
      } else {
        if (id) {
          this.ocode = 'U';
          this.subscription = this.service.select(this.scenarioId, id).subscribe(record => this.record = record);
        } else {
          this.ocode = 'I';
          this.record = {'oc':"I"};
        }
      }
  }

  setId(id: string) {};

  select(id: string) {
    this.service.select(this.scenarioId, id).subscribe(records => this.records = records);
  }

  insert(input: HTMLInputElement) {
    const record = { oc: "I", id: input.value };
    this.records.splice(0, 0, record);

    input.value = '';
    this.service.insert(this.scenarioId, record).subscribe(newRecord => {
      record['id'] = newRecord['id'];
    }, (error: AppError) => {
      this.records.splice(0, 1);

      if (error instanceof BadInput) {
        //        this.form.setErrors(error.originalError);
      } else {
        throw error;
      }
    });
  }

  update(record: OperationModel) {
    record.oc = this.ocode;
    this.service.update(this.scenarioId, record).subscribe(newRecord => console.log(newRecord));
  }

  delete(record: any) {
    if (!confirm('Are you sure you want to delete this record?')) {
      return;
    }

    const index = this.records.indexOf(record);
    this.records.splice(index, 1);

    const id = this.scenario.table.idToStr(record);

    this.service.delete(this.scenarioId, id).subscribe(null, (error: AppError) => {
      this.records.splice(index, 0, record);

      if (error instanceof NotFoundError) {
        alert('Record with id ' + id + ' does not exist');
      } else {
        throw error;
      }
    });
  }

  deleteSingle(record: any) {
    if (!confirm('Are you sure you want to delete this record?')) {
      return;
    }
    const id = this.scenario.table.idToStr(record);
    this.service.delete(this.scenarioId, id).subscribe();
    this.router.navigate([this.rootpage + '/list']);
  }

  newlink() {
    this.router.navigate([this.rootpage + '/new']);
  }

  editlink(record: any) {
    this.router.navigate([this.rootpage + '/' + this.scenario.table.idToStr(record)]);
  }


  initializeTable(records: any[]) {
/*    this.tableResource = new DataTableResource(records);
    this.tableResource.query({ offset: 0 })
      .then(items => this.records = items);
    this.tableResource.count()
      .then(count => this.recordCount = count);
  */
  }

  reloadItems(params: any) {
/*    if (!this.tableResource) {
      return;
    }
    this.tableResource.query(params)
      .then(records => this.records = records);
  */
  }

  filter(query: string) {
    const filteredRecords = (query) ?
      this.records.filter(p => JSON.stringify(p).toLowerCase().includes(query.toLowerCase())) :
      this.records;

    this.initializeTable(filteredRecords);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
