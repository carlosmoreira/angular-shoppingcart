import { TestBed } from '@angular/core/testing';

import { ProductHelperService } from './product-helper.service';

describe('ProductHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductHelperService = TestBed.get(ProductHelperService);
    expect(service).toBeTruthy();
  });
});
