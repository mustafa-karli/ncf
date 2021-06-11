import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentUploadFormComponent } from './content-upload-form.component';

describe('ContentUploadFormComponent', () => {
  let component: ContentUploadFormComponent;
  let fixture: ComponentFixture<ContentUploadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentUploadFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentUploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
