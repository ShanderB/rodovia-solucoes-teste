import { Component } from '@angular/core';
import { GeoprocessamentoService } from './geoprocessamento.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { Endereco } from './interfaces/Endereco';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-geoprocessamento',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule, MatProgressSpinnerModule],
  templateUrl: './geoprocessamento.component.html',
  styleUrl: './geoprocessamento.component.css'
})
export class GeoprocessamentoComponent {
  ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private geoprocessamentoService: GeoprocessamentoService) { }
  hasData = false;
  isLoading = false;
  localizacaoEnderecoInformacao: Endereco = {} as Endereco;

  ngOnInit() {
    this.geoprocessamentoService.coordenadasAtualizadas
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(responseEndereco => {
      this.localizacaoEnderecoInformacao = responseEndereco;
      this.hasData = true;
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getEnderecoPorCoordenadas() {
    this.geoprocessamentoService.getLocalizacaoNavegador();
    this.isLoading = true;
  }
}
