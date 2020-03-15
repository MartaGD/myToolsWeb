import { TestBed } from '@angular/core/testing';

import { MusicBoxService } from './music-box.service';

describe('MusicBoxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicBoxService = TestBed.get(MusicBoxService);
    expect(service).toBeTruthy();
  });
});
