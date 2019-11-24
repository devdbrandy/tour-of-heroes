import { TestBed } from '@angular/core/testing';

import { InMemoryDb } from './in-memory-db.service';

describe('InMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryDb = TestBed.get(InMemoryDb);
    expect(service).toBeTruthy();
  });
});
