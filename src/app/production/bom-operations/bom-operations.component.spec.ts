import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomOperationsComponent } from './bom-operations.component';

describe('BomOperationsComponent', () => {
  let component: BomOperationsComponent;
  let fixture: ComponentFixture<BomOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BomOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BomOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
