import { TestBed } from '@angular/core/testing';

import { GeoprocessamentoService } from './geoprocessamento.service';

describe('GeoprocessamentoService', () => {
  let service: GeoprocessamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoprocessamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
