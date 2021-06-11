import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMastersComponent } from './account-masters.component';

describe('AccountMastersComponent', () => {
  let component: AccountMastersComponent;
  let fixture: ComponentFixture<AccountMastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountMastersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
