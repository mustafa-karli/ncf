import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransactionTemplatesComponent } from './account-transaction-templates.component';

describe('AccountTransactionTemplatesComponent', () => {
  let component: AccountTransactionTemplatesComponent;
  let fixture: ComponentFixture<AccountTransactionTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTransactionTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTransactionTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
