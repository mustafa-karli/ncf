import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentServersComponent } from './content-servers.component';

describe('ContentServersComponent', () => {
  let component: ContentServersComponent;
  let fixture: ComponentFixture<ContentServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentServersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
