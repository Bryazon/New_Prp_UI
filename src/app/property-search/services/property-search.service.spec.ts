/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PropertySearchService } from './property-search.service';

describe('Service: PropertySearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertySearchService]
    });
  });

  it('should ...', inject([PropertySearchService], (service: PropertySearchService) => {
    expect(service).toBeTruthy();
  }));
});
