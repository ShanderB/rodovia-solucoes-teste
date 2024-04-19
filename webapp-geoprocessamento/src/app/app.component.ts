import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { GeoprocessamentoService } from './geoprocessamento/geoprocessamento.service';
import {MatButtonModule} from '@angular/material/button'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webapp-geoprocessamento';

  constructor(private geoprocessamentoService: GeoprocessamentoService) {}

  ngOnInit() {
    this.geoprocessamentoService.getLocalizacaoNavegador();
  }

  getEnderecoPorCoordenadas() {
    this.geoprocessamentoService.getEnderecoPorCoordenadas(-23.5505, -46.6333);
  }
}
