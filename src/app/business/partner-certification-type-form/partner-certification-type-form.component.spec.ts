import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerCertificationTypeFormComponent } from './partner-certification-type-form.component';

describe('PartnerCertificationTypeFormComponent', () => {
  let component: PartnerCertificationTypeFormComponent;
  let fixture: ComponentFixture<PartnerCertificationTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerCertificationTypeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerCertificationTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
