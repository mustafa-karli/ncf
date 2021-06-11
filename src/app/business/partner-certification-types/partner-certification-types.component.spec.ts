import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerCertificationTypesComponent } from './partner-certification-types.component';

describe('PartnerCertificationTypesComponent', () => {
  let component: PartnerCertificationTypesComponent;
  let fixture: ComponentFixture<PartnerCertificationTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerCertificationTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerCertificationTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
