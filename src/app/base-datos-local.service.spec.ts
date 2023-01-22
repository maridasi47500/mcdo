import { TestBed } from '@angular/core/testing';

import { BaseDatosLocalService } from './base-datos-local.service';

describe('BaseDatosLocalService', () => {
  let service: BaseDatosLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseDatosLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
