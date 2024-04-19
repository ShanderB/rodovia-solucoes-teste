import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoprocessamentoComponent } from './geoprocessamento.component';

describe('GeoprocessamentoComponent', () => {
  let component: GeoprocessamentoComponent;
  let fixture: ComponentFixture<GeoprocessamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoprocessamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeoprocessamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
