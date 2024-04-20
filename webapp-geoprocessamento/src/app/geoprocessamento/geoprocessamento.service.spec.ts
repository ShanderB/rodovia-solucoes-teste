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

    describe('getEnderecoPorCoordenadas', () => {
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
    })

    describe('getLocalizacaoNavegador', () => {
        it('deve pegar a localização do navegador', () => {
            const position = {
                coords: {
                    latitude: -23.5505,
                    longitude: -46.6333,
                }
            };

            const spy = spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake((success) => {
                return success(position as any);
            });

            const getEnderecoPorCoordenadasSpy = spyOn(service, 'getEnderecoPorCoordenadas');

            service.getLocalizacaoNavegador();

            expect(spy).toHaveBeenCalled();
            expect(getEnderecoPorCoordenadasSpy).toHaveBeenCalledWith(position.coords.latitude, position.coords.longitude);
        });

        it('deve cuidar caso exita erro ao pegar a localização', () => {
            const error = { code: 1, message: "User denied." };

            const spy = spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake((success, failure) => {
                return failure && failure(error as any);
            });

            const nextSpy = spyOn(service.coordenadasAtualizadas, 'next');

            service.getLocalizacaoNavegador();

            expect(spy).toHaveBeenCalled();
            expect(nextSpy).toHaveBeenCalledWith({ error: true });
        });

    });

});