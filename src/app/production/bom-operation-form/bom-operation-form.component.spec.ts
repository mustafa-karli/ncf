import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomOperationFormComponent } from './bom-operation-form.component';

describe('BomOperationFormComponent', () => {
  let component: BomOperationFormComponent;
  let fixture: ComponentFixture<BomOperationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BomOperationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BomOperationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
