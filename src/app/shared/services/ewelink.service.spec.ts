import { TestBed } from '@angular/core/testing';

import { EwelinkService } from './ewelink.service';

describe('EwelinkService', () => {
  let service: EwelinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EwelinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
