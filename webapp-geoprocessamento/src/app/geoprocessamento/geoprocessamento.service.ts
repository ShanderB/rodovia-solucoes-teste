import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Endereco } from './interfaces/Endereco';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoprocessamentoService {

  constructor(private readonly http: HttpClient) { }

  coordenadasAtualizadas = new Subject<Endereco>();

  getLocalizacaoNavegador() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          this.getEnderecoPorCoordenadas(position.coords.latitude, position.coords.longitude);
        }
      },
        (error) => console.log(error));
    }
  }

  getEnderecoPorCoordenadas(latitude: number, longitude: number) {
    this.http.get<Endereco>(environment.apiURL, { params: { latitude, longitude } }).subscribe(data => {
      this.coordenadasAtualizadas.next({
        ...data,
        latitudeUsadoRequest: latitude,
        longitudeUsadoRequest: longitude
      });
    });
  }
}
