import { TestBed, ComponentFixture } from '@angular/core/testing';
import { GeoprocessamentoComponent } from './geoprocessamento.component';
import { GeoprocessamentoService } from './geoprocessamento.service';
import { Subject, of, throwError } from 'rxjs';
import { Endereco } from './interfaces/Endereco';

describe('GeoprocessamentoComponent', () => {
  let component: GeoprocessamentoComponent;
  let fixture: ComponentFixture<GeoprocessamentoComponent>;
  let geoprocessamentoServiceSpy: jasmine.SpyObj<GeoprocessamentoService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('GeoprocessamentoService', ['getLocalizacaoNavegador']);

    TestBed.configureTestingModule({
      imports: [ GeoprocessamentoComponent ],
      providers: [ { provide: GeoprocessamentoService, useValue: spy } ]
    });

    fixture = TestBed.createComponent(GeoprocessamentoComponent);
    component = fixture.componentInstance;
    geoprocessamentoServiceSpy = TestBed.inject(GeoprocessamentoService) as jasmine.SpyObj<GeoprocessamentoService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set hasData to true when there is no error', () => {
    const responseEndereco = { error: false };
    geoprocessamentoServiceSpy.coordenadasAtualizadas = of(responseEndereco) as unknown as Subject<Endereco>;

    component.ngOnInit();

    expect(component.hasData).toBeTrue();
    expect(component.isLoading).toBeFalse();
  });

  it('should set hasError to true when there is an error', () => {
    const responseEndereco = { error: true };
    geoprocessamentoServiceSpy.coordenadasAtualizadas = of(responseEndereco) as unknown as Subject<Endereco>;

    component.ngOnInit();

    expect(component.hasError).toBeTrue();
    expect(component.isLoading).toBeFalse();
  });

  it('should call getLocalizacaoNavegador and set isLoading to true when getEnderecoPorCoordenadas is called', () => {
    component.getEnderecoPorCoordenadas();

    expect(geoprocessamentoServiceSpy.getLocalizacaoNavegador).toHaveBeenCalled();
    expect(component.isLoading).toBeTrue();
  });
});