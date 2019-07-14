import { TestBed } from '@angular/core/testing';

import { MeappService } from './meapp.service';

describe('MeappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeappService = TestBed.get(MeappService);
    expect(service).toBeTruthy();
  });
});
