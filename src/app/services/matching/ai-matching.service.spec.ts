import { TestBed } from '@angular/core/testing';

import { AiMatchingService } from './ai-matching.service';

describe('AiMatchingService', () => {
  let service: AiMatchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiMatchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
