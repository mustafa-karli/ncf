import { TestBed, inject } from '@angular/core/testing';

import { NsonService } from './nson.service';

describe('NsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NsonService]
    });
  });

  it('should be created', inject([NsonService], (service: NsonService) => {
    expect(service).toBeTruthy();
  }));
});
