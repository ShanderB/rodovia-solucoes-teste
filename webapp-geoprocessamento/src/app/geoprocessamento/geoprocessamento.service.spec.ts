import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GeoprocessamentoService } from './geoprocessamento.service';
import { Endereco } from './interfaces/Endereco';
import { environment } from '@env/environment';

describe('GeoprocessamentoService', () => {
  let service: GeoprocessamentoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GeoprocessamentoService]
    });

    service = TestBed.inject(GeoprocessamentoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve buscar endereço por coordenadas', () => {
    const dummyEndereco: Endereco = {
      latitudeUsadoRequest: -23.5505,
      longitudeUsadoRequest: -46.6333,
    };

    service.getEnderecoPorCoordenadas(-23.5505, -46.6333)

    const req = httpMock.expectOne(`${environment.apiURL}?latitude=-23.5505&longitude=-46.6333`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyEndereco);
  });
});