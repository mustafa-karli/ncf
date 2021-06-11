import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportAreasComponent } from './support-areas.component';

describe('SupportAreasComponent', () => {
  let component: SupportAreasComponent;
  let fixture: ComponentFixture<SupportAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
