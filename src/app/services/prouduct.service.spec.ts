import { TestBed } from '@angular/core/testing';

import { ProuductService } from './prouduct.service';

describe('ProuductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProuductService = TestBed.get(ProuductService);
    expect(service).toBeTruthy();
  });
});
