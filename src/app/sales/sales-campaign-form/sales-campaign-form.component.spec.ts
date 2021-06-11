import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCampaignFormComponent } from './sales-campaign-form.component';

describe('SalesCampaignFormComponent', () => {
  let component: SalesCampaignFormComponent;
  let fixture: ComponentFixture<SalesCampaignFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesCampaignFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCampaignFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
