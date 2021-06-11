import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCampaignsComponent } from './sales-campaigns.component';

describe('SalesCampaignsComponent', () => {
  let component: SalesCampaignsComponent;
  let fixture: ComponentFixture<SalesCampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesCampaignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
