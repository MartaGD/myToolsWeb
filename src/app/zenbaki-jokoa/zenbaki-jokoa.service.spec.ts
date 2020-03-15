import { TestBed } from '@angular/core/testing';

import { ZenbakiJokoaService } from './zenbaki-jokoa.service';

describe('ZenbakiJokoaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZenbakiJokoaService = TestBed.get(ZenbakiJokoaService);
    expect(service).toBeTruthy();
  });
});
