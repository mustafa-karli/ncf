import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRequestByDefineComponent } from './material-request-by-define.component';

describe('MaterialRequestByDefineComponent', () => {
  let component: MaterialRequestByDefineComponent;
  let fixture: ComponentFixture<MaterialRequestByDefineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialRequestByDefineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialRequestByDefineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
