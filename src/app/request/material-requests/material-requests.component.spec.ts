import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRequestsComponent } from './material-requests.component';

describe('MaterialRequestsComponent', () => {
  let component: MaterialRequestsComponent;
  let fixture: ComponentFixture<MaterialRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
