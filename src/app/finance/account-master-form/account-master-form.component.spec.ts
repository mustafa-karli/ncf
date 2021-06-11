import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMasterFormComponent } from './account-master-form.component';

describe('AccountMasterFormComponent', () => {
  let component: AccountMasterFormComponent;
  let fixture: ComponentFixture<AccountMasterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountMasterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMasterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
