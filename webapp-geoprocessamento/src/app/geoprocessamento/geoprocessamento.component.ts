import { Component } from '@angular/core';
import { GeoprocessamentoService } from './geoprocessamento.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Endereco } from './interfaces/Endereco';

@Component({
  selector: 'app-geoprocessamento',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './geoprocessamento.component.html',
  styleUrl: './geoprocessamento.component.css'
})
export class GeoprocessamentoComponent {

  constructor(private geoprocessamentoService: GeoprocessamentoService) { }
  hasData = false;
  localizacaoEnderecoInformacao: Endereco = {} as Endereco;

  ngOnInit() {
    this.geoprocessamentoService.coordenadasAtualizadas.subscribe(responseEndereco => {
      this.localizacaoEnderecoInformacao = responseEndereco;
      this.hasData = true;
    });
  }

  getEnderecoPorCoordenadas() {
    this.geoprocessamentoService.getLocalizacaoNavegador();
  }
}
